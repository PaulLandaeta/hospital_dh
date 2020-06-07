import { Injectable } from '@angular/core';
import { Hospital } from '../models/Hospital';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HospitalService {
  private URL = environment.url;
  private ADD = 'hospital/add';
  private GET_ALL = 'hospitals';
  private GET_HOSPITAL = 'hospital/'
  private hospitals: any[] = [
    {
      id: 1,
      name: 'Obrero',
      address: 'miraflores',
    },
    {
      id: 2,
      name: 'Arco Iris',
      address: 'Villa Fatima',
    },
  ];
  constructor(private http: HttpClient) {
    console.log('Service ready');
  }

  getHospitals() {
    return this.http.get(this.URL + this.GET_ALL).pipe(
      tap((hospitals) => console.log(hospitals)),
      catchError(this.handleError('Get Hospitals'))
    );
  }

  getHospital(id: number) {
    return this.http.get(`${this.URL}${this.GET_HOSPITAL}?id=${id}`).pipe(
      tap((hospital) => console.log(hospital)),
      catchError(this.handleError('Get Hospitals'))
    );
  }

  addHospital(hospital: Hospital) {
    return this.http.post(this.URL + this.ADD, hospital).pipe(
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
