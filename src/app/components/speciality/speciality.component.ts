import { Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/models/Specialty';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss'],
})
export class SpecialityComponent implements OnInit {
  specialties: Specialty[];
  constructor() {}

  ngOnInit(): void {}

  createSpecialty() {}

  goToSpecialty(id: number) {}
}
