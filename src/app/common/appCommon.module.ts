import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from './githubService/github.service';

@NgModule({
  declarations: [],
  providers: [
    GithubService,
  ],
  imports: [
    CommonModule
  ]
})
export class AppCommonModule { }
