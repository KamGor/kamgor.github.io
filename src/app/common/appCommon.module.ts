import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from './githubService/github.service';
import { commonTokens } from './commonTokens';
import { HttpFactoryService } from './httpFactoryService/http-factory.service';
import { IHttpFactoryService } from './httpFactoryService/IHttpFactoryService';
import { environment } from 'src/environments/environment';
import { EntryService } from './entryService/entry.service';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [SortByPipe],
  providers: [
    {
      provide: commonTokens.githubService,
      useFactory: (
        httpFactoryService: IHttpFactoryService,
      ) => {
        const githubApiService = httpFactoryService.getHttpServiceFor(environment.githubApiUrl);
        return new GithubService(githubApiService);
      },
      deps: [
        commonTokens.httpFactoryService,
      ],
    },
    {
      provide: commonTokens.httpFactoryService,
      useClass: HttpFactoryService,
    },
    {
      provide: commonTokens.entryService,
      useClass: EntryService,
    },
  ],
  imports: [
    CommonModule
  ]
})
export class AppCommonModule { }
