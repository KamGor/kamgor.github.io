import { IHttpRequestOptions } from "./IHttpRequestOptions";

export interface IHttpService
{
    get(path: string, options?: IHttpRequestOptions): Promise<any>;
}