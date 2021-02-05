import { Component, Inject, OnInit } from '@angular/core';
import { commonTokens } from './common/commonTokens';
import { IEntryService } from './common/entryService/IEntryService';
import { IGithubService } from './common/githubService/IGithubService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
