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
}
