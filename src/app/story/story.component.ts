import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../story.model';
import { STORY } from '../mock-story';
import { Kitteh } from '../kitteh.model';
import { KITTEH } from '../mock-kitteh';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryService } from '../story.service';
import { KittehService} from '../kitteh.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService, KittehService]
})
export class StoryComponent implements OnInit {
  kitteh: Kitteh[]
  story: Story[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private storyService: StoryService,
    private kittehService: KittehService
  ) { }

  ngOnInit(){
    this.kitteh = this.kittehService.getKitteh();
  }

}
