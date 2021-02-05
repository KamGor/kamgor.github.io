import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';
import { commonTokens } from 'src/app/common/commonTokens';
import { IEntryService } from 'src/app/common/entryService/IEntryService';
import { IContentResponse } from 'src/app/common/githubService/IContentResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public entry: string | SafeHtml;
  public postList: IContentResponse[];
  public repositoryUrl: string;

  constructor(
    @Inject(commonTokens.entryService)
    private entryService: IEntryService,
    private sanitizer: DomSanitizer,
  ) {
    this.entry = '';
    this.postList = [];
    this.repositoryUrl = environment.repositoryUrl;
  }

  async ngOnInit(): Promise<void> {
    this.postList = await this.entryService.getEntryList();
    const postResponse: any = await this.entryService.getEntry(this.postList[this.postList.length-1].name);
    this.entry = marked(atob(postResponse.content));
  }

  private b64Decode(str: string) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  async getAbout(): Promise<void> {
    const aboutResponse: any = await this.entryService.getAbout();
    console.log(this.b64Decode(aboutResponse.content));
    this.entry = this.sanitizer.bypassSecurityTrustHtml(marked(this.b64Decode(aboutResponse.content)));
  }

  async changeEntry(name: string): Promise<void> {
    const postResponse: any = await this.entryService.getEntry(name);
    this.entry = marked(atob(postResponse.content));
  }

}
