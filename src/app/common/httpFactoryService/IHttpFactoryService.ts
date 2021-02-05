import { IHttpService } from "../httpService/IHttpService";

export interface IHttpFactoryService
{
    getHttpServiceFor(apiUrl: string): IHttpService;
}