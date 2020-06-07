import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/Patient';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  patients: Patient[] = [];
  dataSource = new MatTableDataSource(this.patients);
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.id = id;
      this.patientService
        .getPatients(this.id)
        .subscribe((patients: Patient[]) => {
          this.patients = patients;
          this.dataSource.data = this.patients;
        });
    });
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goPatient(patient) {
    this.router.navigate(['/patient', patient.id]);
  }

  createPatient() {
    this.router.navigate(['new-patient', this.id]);
  }
}
