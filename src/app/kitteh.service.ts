import { Injectable } from '@angular/core';
import { Kitteh } from './kitteh.model';
import { KITTEH } from './mock-kitteh';

@Injectable()
export class KittehService {

  getKitteh() {
    return KITTEH;
  }

  addKitteh(name, color, izFluffy, hazStripez, izOutdoorz, izLoud, izOld){
    KITTEH.push(new Kitteh(name, color, izFluffy, hazStripez, izOutdoorz, izLoud, izOld))
  }

}
