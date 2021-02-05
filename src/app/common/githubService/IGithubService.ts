import { IPost } from "./IPost";

export interface IGithubService
{
    getPosts(): Promise<IPost[]>;
}