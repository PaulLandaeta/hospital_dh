import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/hospital.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hospital } from 'src/app/models/Hospital';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
})
export class HospitalComponent implements OnInit {
  hospitalForm: FormGroup;
  hospital: Hospital;
  constructor(
    private _hospitalService: HospitalService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hospitalForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      photoURL: ['', Validators.required],
    });
  }

  createHospital({ value, valid }: { value: Hospital; valid: boolean }) {
    this._hospitalService.addHospital(value).subscribe((res: Hospital) => {
      this.hospital = res;
      this.router.navigate(['/home']);
    });
  }
}
