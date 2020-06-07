import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router } from '@angular/router';
import { Hospital } from '../../../models/Hospital';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hospitals: Hospital[] = [];
  constructor(
    private hospitalService: HospitalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hospitalService.getHospitals().subscribe((hospitals: Hospital[]) => {
      this.hospitals = hospitals;
    });
  }
  goToHospital(id) {
    this.router.navigate(['/hospitals', id]);
  }
  createHospital() {
    this.router.navigate(['hospital-new']);
  }
}
