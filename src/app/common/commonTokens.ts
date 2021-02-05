import { InjectionToken } from "@angular/core";
import { IEntryService } from "./entryService/IEntryService";
import { IGithubService } from "./githubService/IGithubService";
import { IHttpFactoryService } from "./httpFactoryService/IHttpFactoryService";

export const commonTokens = {
    httpFactoryService: new InjectionToken<IHttpFactoryService>('httpService'),
    githubService: new InjectionToken<IGithubService>('githubService'),
    entryService: new InjectionToken<IEntryService>('entryService'),
}