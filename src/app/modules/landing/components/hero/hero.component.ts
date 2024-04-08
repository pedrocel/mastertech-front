import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'landing-hero',
  templateUrl: './hero.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LandingHeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
