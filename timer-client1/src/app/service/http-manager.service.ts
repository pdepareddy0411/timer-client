import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorType } from '../models/error';

@Injectable({
  providedIn: 'root',
})
export class HttpManagerService {
  constructor(private _http: HttpClient) {}

  get<T>(url: string, options?: HttpOptions): Observable<T | ErrorType> {
    if (options) {
      return this._http.get<T>(`${url}`, options).pipe(catchError(this.handleError));
    } else {
      return this._http.get<T>(`${url}`).pipe(catchError(this.handleError));
    }
  }

  post<T>(url: string, data: any, options?: HttpOptions): Observable<ErrorType | T> {
    if (options) {
      return this._http
        .post<ErrorType | T>(`${url}`, data, options)
        .pipe(catchError(this.handleError));
    } else {
      return this._http.post<ErrorType | T>(`${url}`, data).pipe(catchError(this.handleError));
    }
  }

  put<T>(url: string, data: any, options?: HttpOptions): Observable<ErrorType | T> {
    if (options) {
      return this._http
        .put<ErrorType | T>(`${url}`, data, options)
        .pipe(catchError(this.handleError));
    } else {
      return this._http.put<ErrorType | T>(`${url}`, data).pipe(catchError(this.handleError));
    }
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

export interface HttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
