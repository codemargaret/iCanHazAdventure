import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoryComponent } from './story/story.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
  path: 'story',
  component: StoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
