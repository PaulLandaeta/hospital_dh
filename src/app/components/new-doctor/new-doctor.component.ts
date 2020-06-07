import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hospital } from 'src/app/models/Hospital';
import { Doctor } from 'src/app/models/Doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.scss'],
})
export class NewDoctorComponent implements OnInit {
  doctorForm: FormGroup;
  doctor: Doctor;
  hospital: Hospital = {} as Hospital;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.hospital.id = id;
    });
    this.doctorForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
    });
  }

  createDoctor({ value, valid }: { value: Doctor; valid: boolean }) {
    value.hospital = this.hospital;
    this._doctorService.getPhoto().subscribe((randomUser: any) => {
      let photoUrl = randomUser.results[0].picture.medium;
      value.photo_url = photoUrl;
      this._doctorService.addDoctor(value).subscribe((res: Doctor) => {
        this.doctor = res;
        this.router.navigate(['/doctors', this.hospital.id]);
      });
    });
  }
}
