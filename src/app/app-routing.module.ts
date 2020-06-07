import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { HospitalsComponent } from './components/shared/hospitals/hospitals.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patient/patient.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { SpecialityComponent } from './components/speciality/speciality.component';
import { SpecialtyComponent } from './components/specialty/specialty.component';
import { NewSpecialtyComponent } from './components/new-specialty/new-specialty.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NewDoctorComponent } from './components/new-doctor/new-doctor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hospital-new', component: HospitalComponent },
  { path: 'new-patient/:id', component: NewPatientComponent },
  { path: 'hospitals/:id', component: HospitalsComponent },
  { path: 'patients/:id', component: PatientsComponent },
  { path: 'patient/:id', component: PatientComponent },
  { path: 'specialties/:id', component: SpecialityComponent },
  { path: 'new-specialty/:id', component: NewSpecialtyComponent },
  { path: 'specialty/:id', component: SpecialtyComponent },
  { path: 'doctors/:id', component: DoctorsComponent },
  { path: 'new-doctor/:id', component: NewDoctorComponent },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
