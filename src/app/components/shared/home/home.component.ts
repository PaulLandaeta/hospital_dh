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

  getImage(hospital: Hospital) {
    return hospital.photoURL
      ? hospital.photoURL
      : 'https://previews.123rf.com/images/neyro2008/neyro20081512/neyro2008151200317/49781838-ilustraci%C3%B3n-de-la-ciudad-del-edificio-del-hospital-en-el-estilo-de-dise%C3%B1o-plano-arquitectura-cl%C3%ADnica-hospita.jpg';
  }
}
