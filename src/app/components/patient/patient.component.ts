import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patient: Patient;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this._patientService.getPatientByID(id).subscribe((patient: Patient) => {
        this.patient = patient;
        console.log(this.patient);
      });
    });
  }
}
