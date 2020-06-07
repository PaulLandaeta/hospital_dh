import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {
  private patients: any[] = [
    {
      id: 1,
      name: 'Paul Landaeta',
      address: 'miraflores',
    },
    {
      id: 2,
      name: 'Juan Perez',
      address: 'Villa Fatima',
    },
  ];
  constructor() {
    console.log('Service ready');
  }

  getPatients(id: number) {
    return this.patients;
  }

  getHospital(idHospital: number, idPatient) {
    return this.patients[idPatient - 1];
  }
}
