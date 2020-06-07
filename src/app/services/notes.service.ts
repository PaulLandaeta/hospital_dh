import { Injectable } from '@angular/core';
import { Notes } from '../models/notes';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {
  private URL = environment.url;
  private ADD = 'notes/add';
  private GET_NOTES = 'notes/';
  private GET_ALL = 'notes';

  private notes: Notes[] = [];
  constructor(private http: HttpClient) {
    console.log('Service ready');
  }

  getNotes() {
    return this.http.get(this.URL + this.GET_ALL).pipe(
      tap((notes) => console.log(notes)),
      catchError(this.handleError('Get Notes'))
    );
  }

  getNotesByID(id: number) {
    return this.http.get(`${this.URL}${this.GET_NOTES}${id}`).pipe(
      tap((notes) => console.log(notes)),
      catchError(this.handleError('Get notes'))
    );
  }

  addPatient(notes: Notes) {
    return this.http.post(this.URL + this.ADD, notes).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError('error'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
