import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoryComponent } from './story/story.component';
import { KittehComponent } from './kitteh/kitteh.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
  path: 'story',
  component: StoryComponent
  },
  {
  path: 'kitteh',
  component: KittehComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
