import { IContentResponse } from "../githubService/IContentResponse";

export interface IEntryService
{
    getEntryList(): Promise<IContentResponse[]>;
    getEntry(fileName: string): Promise<IContentResponse>;
    getAbout(): Promise<IContentResponse>;
}