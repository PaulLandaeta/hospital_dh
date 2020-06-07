import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  hospital: any;
  idHospital: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _hospitalService: HospitalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.idHospital = id;
      this._hospitalService.getHospital(id).subscribe((hospital) => {
        this.hospital = hospital;
        console.log(this.hospital);
      });
    });
  }

  goToPatients() {
    this.router.navigate(['/patients', this.idHospital]);
  }

  goToSpecialties() {
    this.router.navigate(['/specialties', this.idHospital]);
  }

  goToDoctors() {
    this.router.navigate(['/doctors', this.idHospital]);
  }

  getImage() {
    return this.hospital.photoURL
      ? this.hospital.photoURL
      : 'https://previews.123rf.com/images/neyro2008/neyro20081512/neyro2008151200317/49781838-ilustraci%C3%B3n-de-la-ciudad-del-edificio-del-hospital-en-el-estilo-de-dise%C3%B1o-plano-arquitectura-cl%C3%ADnica-hospita.jpg';
  }
}
