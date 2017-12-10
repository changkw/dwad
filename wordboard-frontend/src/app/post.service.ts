import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
  private postUrl = 'http://localhost:3000/posts';
  constructor(
    private http: HttpClient) { }
  /** GET blog posts from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
      .pipe(
        catchError(this.handleError('getPosts', []))
      );
  }
  /**  POST: add a new blog post to the server */
  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions).pipe(
      catchError(this.handleError<Post>('addPost'))
    );
  }
  /** PUT: update the blog post on the server */
  updatePost (post: Post): Observable<any> {
    const url = `${this.postUrl}/${post.id}`;    
    return this.http.put(url, post, httpOptions).pipe(
      catchError(this.handleError<any>('updatePost'))
    );
  }
  /** GET blog post by id */
  getPost(id: string): Observable<Post> {
    const url = `${this.postUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }
  /** DELETE: delete the blog post from the server */
  deletePost(post: Post | string): Observable<Post> {
    const id = typeof post === 'string' ? post : post.id;
    const url = `${this.postUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions).pipe(
      catchError(this.handleError<Post>('deletePost'))
    );
  }

 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  

}
