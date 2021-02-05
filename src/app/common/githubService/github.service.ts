import { Injectable } from '@angular/core';
import { IGithubService } from './IGithubService';
import { IPost } from './IPost';

@Injectable()
export class GithubService implements IGithubService {

  constructor() {}

  public async getPosts(): Promise<IPost[]> {
    return [];
  }
}
