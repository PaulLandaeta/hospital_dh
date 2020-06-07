import { Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/models/Specialty';
import { Router, ActivatedRoute } from '@angular/router';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss'],
})
export class SpecialityComponent implements OnInit {
  specialties: Specialty[];
  idHospital: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _specialtyService: SpecialtyService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.idHospital = id;
      this._specialtyService
        .getSpecialties(id)
        .subscribe((specialties: Specialty[]) => {
          this.specialties = specialties;
        });
    });
  }

  ngOnInit(): void {}

  createSpecialty() {
    this.router.navigate(['/new-specialty', this.idHospital]);
  }

  goToSpecialty(id: number) {}
}
