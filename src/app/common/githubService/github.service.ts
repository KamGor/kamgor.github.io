import { Inject, Injectable } from '@angular/core';
import { commonTokens } from '../commonTokens';
import { IHttpService } from '../httpService/IHttpService';
import { IContentResponse } from './IContentResponse';
import { IGithubService } from './IGithubService';
import { IPost } from './IPost';

export class GithubService implements IGithubService {

  constructor(
    private githubHttpService: IHttpService,
  ) {}

  public async getContents(username: string, repositoryName: string, fileName: string = '', ref: string = 'master'): Promise<IContentResponse[]> {
    const response = await this.githubHttpService.get(`/repos/${username}/${repositoryName}/contents/${fileName}`, {
      params: {
        ref,
      },
    });
    return response;
  }
}
