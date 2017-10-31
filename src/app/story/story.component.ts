import { Component, OnInit } from '@angular/core';
import { Kitteh } from '../kitteh.model';
import { Story } from '../story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  story: Story[] = [
    new Story(1, "Kitteh haz target of keyz on table. Should kitteh knock off?", "Owner waz lookin v hard for keyz all along and heard the keyz do a drop. He praises kitteh for hiz effortz with head rubz", "Owner doin an angry cause he cant find his keyz even though they're sittin on the table. He lashes out at kitteh in frustration."),
    new Story(2, "Kitteh caught a whiff of smellz comin from up high place. Should kitteh do a leap to investigate?", "Kitteh doez a resist and doesnt do a leap. Owner commendz her impeccable self-discipline with head rubz", "Kitteh doez a leap and haz her paw-bean land on a v hot stove. Oh noez! Kitteh scamperz off to mend its woondz."),
    new Story(3,)
  ]

}
