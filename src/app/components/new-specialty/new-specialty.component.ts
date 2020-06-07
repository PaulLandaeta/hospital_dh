import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Specialty } from 'src/app/models/Specialty';
import { Hospital } from 'src/app/models/Hospital';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-new-specialty',
  templateUrl: './new-specialty.component.html',
  styleUrls: ['./new-specialty.component.scss'],
})
export class NewSpecialtyComponent implements OnInit {
  specialtyForm: FormGroup;
  specialty: Specialty;
  hospital: Hospital = {} as Hospital;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _specialtyService: SpecialtyService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.hospital.id = id;
    });
    this.specialtyForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  createSpecialty({ value, valid }: { value: Specialty; valid: boolean }) {
    value.hospitals = [];
    value.hospitals.push(this.hospital);
    this._specialtyService.addSpecialty(value).subscribe((res: Specialty) => {
      this.specialty = res;
      this.router.navigate(['/specialties', this.hospital.id]);
    });
  }
}
