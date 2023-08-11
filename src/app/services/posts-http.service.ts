import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlCreationOptions } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsHttpService {
  postUrl: string;

  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {
    this.postUrl = 'http://114.31.28.234:3001/post';
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  create(post: Post): Observable<Post> {
    return this.http
      .post<Post>(this.postUrl, post)
      .pipe(catchError(this.handleError));
  }

  read(id: number): Observable<Post> {
    return this.http
      .get<Post>(`${this.postUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  readAll(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.postUrl}}`)
      .pipe(catchError(this.handleError));
  }

  update(id: number, post: Post): Observable<Post> {
    return this.http
      .put<any>(`${this.postUrl}/${id}`, post)
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<unknown> {
    return this.http
      .delete(`${this.postUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
