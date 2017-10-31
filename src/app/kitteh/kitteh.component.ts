import { Component, OnInit } from '@angular/core';
import { Kitteh } from '../kitteh.model';
import { KITTEH } from '../mock-kitteh';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { KittehService } from '../kitteh.service';

@Component({
  selector: 'app-kitteh',
  templateUrl: './kitteh.component.html',
  styleUrls: ['./kitteh.component.css'],
  providers: [KittehService]
})
export class KittehComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private kittehService: KittehService
  ) { }

  newKitteh(name: string, color: string, izFluffy: boolean, hazStripez: boolean, izOutdoorz: boolean, izLoud: boolean, izOld: boolean) {
    this.kittehService.addKitteh(name, color, izFluffy, hazStripez, izOutdoorz, izLoud, izOld)
    debugger;
  }
}
