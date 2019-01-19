import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { environment } from '../../environments/environment';
import { Pageable }    from './Pageable';
import { PageRequest } from './PageRequest';

@Injectable()
export class APIClient<T> {

    public static readonly BASE_URL: string = environment.API_BASE;

    public constructor(private httpClient: HttpClient) {

    }

    public _getPageable<T>(url: string, dataTablePage?: any): Observable<Pageable<T>> {

        if (dataTablePage) {

            return this.httpClient.get<Pageable<T>>(`${ APIClient.BASE_URL }/${ url }?${ dataTablePage.toParams() }`);

        } else {

            return this.httpClient.get<Pageable<T>>(`${ APIClient.BASE_URL }/${ url }`);

        }

    }

    public get<T>(url: string): Observable<T> {

        return this.httpClient.get<T>(`${ APIClient.BASE_URL }/${ url }`);

    }

    public search<T>(url: string, pageRequest: PageRequest): Observable<any> {

        return this.httpClient.get<T>(`${ APIClient.BASE_URL }/${ url }?terms=${ pageRequest.terms }&limit=${ pageRequest.limit }&offset=${ pageRequest.offset }`);

    }

    public post<T>(url: string, body?: any): Observable<T> {

        try {

            return this.httpClient.post<T>(`${ APIClient.BASE_URL }/${ url }`, body);

        } catch (e) {

            console.log(e);

        }

    }

    public put<T>(url: string, body: any): Observable<T> {

        return this.httpClient.put<T>(`${ APIClient.BASE_URL }/${ url }`, body);

    }

    public delete<T>(url: string): Observable<T> {

        return this.httpClient.delete<T>(`${ APIClient.BASE_URL }/${ url }`);

    }

}

