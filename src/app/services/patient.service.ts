import { Injectable } from '@angular/core';
import { Patient } from '../models/Patient';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientService {
  private URL = environment.url;
  private ADD = 'patient/add';
  private GET_PATIENT = 'patient/';
  private GET_ALL = 'patients';

  private patients: Patient[] = [];
  constructor(private http: HttpClient) {
    console.log('Service ready');
  }

  getPatients() {
    return this.http.get(this.URL + this.GET_ALL).pipe(
      tap((hospitals) => console.log(hospitals)),
      catchError(this.handleError('Get Hospitals'))
    );
  }

  getPatientByID(id: number) {
    return this.http.get(`${this.URL}${this.GET_PATIENT}${id}`).pipe(
      tap((patient) => console.log(patient)),
      catchError(this.handleError('Get Patient'))
    );
  }

  addPatient(patient: Patient) {
    return this.http.post(this.URL + this.ADD, patient).pipe(
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
