import { Injectable } from '@angular/core';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import Utf8 from 'crypto-js/enc-utf8';
import { cloneDeep } from 'lodash-es';

import { HubsdMockApiService } from '@hubsd/mock-api';

import { authUsers, admin } from './data';
import { AuthUtils } from '../../../core/auth/auth.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthMockApi {
  private readonly secret: any;

  constructor(private service: HubsdMockApiService) {
    this.secret = 'secretKey';

    this.registerHandlers();
  }

  registerHandlers(): void {
    this.service
      .onPost('api/authentication/login', 1500)
      .reply(({request}) => {
        const user = authUsers.find((el) => el.email.includes(request.body.email));
        if (user && request.body.password === '12345678') {
          return [
            200,
            {
              user: cloneDeep(user),
              accessToken: this.generateJWTToken(user),
            }
          ];
        }

        return [
          400,
          {
            message: 'Essas credencias estão incorretas',
          }
        ];
      });

    this.service
      .onPost('api/authentication/register', 1500)
      .reply(() =>
        [
          200,
          {
            user: cloneDeep(admin),
            accessToken: this.generateJWTToken(admin),
          }
        ]
      );

    this.service
      .onPost('api/authentication/forgot-password', 1000)
      .reply(() =>
        [
          200,
          { message: 'A solicitação de recuperação de e-mail foi enviada!' }
        ]
      );

    this.service
      .onPost('api/authentication/reset-password/token', 1500)
      .reply(() =>
        [
          200,
          { message: 'A senha foi redefinida com sucesso!' }
        ]
      );

    this.service
      .onGet('api/authentication/profile')
      .reply(({request}) => {
        const accessToken = request.headers.get('Authorization');

        if (this.verifyJWTToken(accessToken.replace('Bearer ', ''))) {
          const decodedToken = AuthUtils.decodeToken(accessToken.replace('Bearer ', ''));
          const user = authUsers.find((el) => el.id === decodedToken.id);

          return [
            200,
            cloneDeep(user)
          ];
        }

        return [
          401,
          { message: 'É necessário estár logado poder realizar essar ação!', }
        ];
      });
  }

  private base64url(source: any): string {
    let encodedSource = Base64.stringify(source);

    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');

    return encodedSource;
  }

  private generateJWTToken(user: any): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };

    const date = new Date();
    const iat = Math.floor(date.getTime() / 1000);
    const exp = Math.floor((date.setDate(date.getDate() + 7)) / 1000);

    const payload = {
      ...user,
      iat: iat,
      exp: exp
    };

    const stringifiedHeader = Utf8.parse(JSON.stringify(header));
    const encodedHeader = this.base64url(stringifiedHeader);

    const stringifiedPayload = Utf8.parse(JSON.stringify(payload));
    const encodedPayload = this.base64url(stringifiedPayload);

    let signature: any = encodedHeader + '.' + encodedPayload;
    signature = HmacSHA256(signature, this.secret);
    signature = this.base64url(signature);

    return encodedHeader + '.' + encodedPayload + '.' + signature;
  }

  private verifyJWTToken(token: string): boolean {
    const parts = token.split('.');
    const header = parts[0];
    const payload = parts[1];
    const signature = parts[2];

    const signatureCheck = this.base64url(HmacSHA256(header + '.' + payload, this.secret));

    return (signature === signatureCheck);
  }
}
