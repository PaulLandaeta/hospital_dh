import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Hospital } from 'src/app/models/Hospital';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit {
  patientForm: FormGroup;
  patient: Patient;
  hospital: Hospital = {} as Hospital;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.hospital.id = id;
    });
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
      photoURL: ['', Validators.required],
    });
  }

  createPatient({ value, valid }: { value: Patient; valid: boolean }) {
    value.hospital = this.hospital;
    this._patientService.addPatient(value).subscribe((res: Patient) => {
      this.patient = res;
      this.router.navigate(['/patients', this.hospital.id]);
    });
  }
}
