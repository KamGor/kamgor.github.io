import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { commonTokens } from '../commonTokens';
import { IContentResponse } from '../githubService/IContentResponse';
import { IGithubService } from '../githubService/IGithubService';
import { IEntryService } from './IEntryService';

@Injectable()
export class EntryService implements IEntryService
{
  constructor(
    @Inject(commonTokens.githubService)
    private githubService: IGithubService,
  ) {}
  
  public async getAbout(): Promise<IContentResponse> {
    const response: IContentResponse[] = await this.githubService.getContents(
      environment.username,
      environment.aboutRepositoryName,
      'README.md',
    );
    return <any> response;
  }

  public async getEntryList(): Promise<IContentResponse[]> {
    const response: IContentResponse[] = await this.githubService.getContents(
      environment.username,
      environment.postsRepositoryName,
      environment.postsBranch,
      'posts'
    );
    return response.filter((object) => {
      return object.name !== '.gitkeep';
    });
  }

  public async getEntry(fileName: string): Promise<any> {
    return await this.githubService.getContents('kamgor', 'kamgor.github.io', `posts/${fileName}`, 'posts');
  }


}
