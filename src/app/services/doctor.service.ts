import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/Doctor';

@Injectable()
export class DoctorService {
  private URL = environment.url;
  private ADD = 'doctor/add';
  private GET_DOCTOR = 'doctor/';
  private GET_ALL = 'doctors';
  // TODO: create login to manage users;
  private user = 'admin';
  private doctors: Doctor[] = [];
  constructor(private http: HttpClient) {
    console.log('Service ready');
  }

  getDoctors(id: number) {
    return this.http.get(`${this.URL}${this.GET_ALL}/${id}`).pipe(
      tap((doctors) => console.log(doctors)),
      catchError(this.handleError('Get Doctors'))
    );
  }

  getDoctorByID(id: number) {
    return this.http.get(`${this.URL}${this.GET_DOCTOR}${id}`).pipe(
      tap((doctor) => console.log(doctor)),
      catchError(this.handleError('Get doctor'))
    );
  }

  addDoctor(doctor: Doctor) {
    doctor.createdBy = this.user;
    doctor.created = new Date();
    return this.http.post(this.URL + this.ADD, doctor).pipe(
      tap((res) => console.log(res)),
      catchError(this.handleError('error'))
    );
  }

  getPhoto() {
    return this.http.get('https://randomuser.me/api/').pipe(
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
