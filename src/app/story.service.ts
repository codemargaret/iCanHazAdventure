import { Injectable } from '@angular/core';
import { Story } from './story.model'
import { STORY } from './mock-story'

@Injectable()
export class StoryService {

  constructor() { }

  getStory(){
    return STORY;
  }

  getStoryById(storyId: number){
    for (var i = 0; i <= STORY.length - 1; i++) {
      if (STORY[i].id === storyId) {
        return STORY[i];
      }
    }
  }

}
