import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[];
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _doctorsService: DoctorService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.id = id;
      this._doctorsService
        .getDoctors(this.id)
        .subscribe((doctors: Doctor[]) => {
          this.doctors = doctors;
        });
    });
  }

  ngOnInit(): void {}

  createDoctor() {
    this.router.navigate(['new-doctor', this.id]);
  }
}
