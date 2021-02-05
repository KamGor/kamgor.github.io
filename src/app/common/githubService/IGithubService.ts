import { IContentResponse } from "./IContentResponse";
import { IPost } from "./IPost";

export interface IGithubService
{
    getContents(username: string, repositoryName: string, fileName: string, ref?: string): Promise<IContentResponse[]>;
}