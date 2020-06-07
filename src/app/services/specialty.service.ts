import { Injectable } from '@angular/core';
import { Specialty } from '../models/Specialty';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpecialtyService {
  private URL = environment.url;
  private ADD = 'specialty/add';
  private GET_SPECIALTY = 'specialty/';
  private GET_ALL = 'specialties';

  private specialties: Specialty[] = [];
  constructor(private http: HttpClient) {
    console.log('Service ready');
  }

  getSpecialties() {
    return this.http.get(this.URL + this.GET_ALL).pipe(
      tap((specialties) => console.log(specialties)),
      catchError(this.handleError('Get Specialties'))
    );
  }

  getSpecialtyByID(id: number) {
    return this.http.get(`${this.URL}${this.GET_SPECIALTY}${id}`).pipe(
      tap((specialty) => console.log(specialty)),
      catchError(this.handleError('Get Specialty'))
    );
  }

  addPatient(specialty: Specialty) {
    return this.http.post(this.URL + this.ADD, specialty).pipe(
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
