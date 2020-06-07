import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { HospitalsComponent } from './components/shared/hospitals/hospitals.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patient/patient.component';
import { HospitalComponent } from './components/hospital/hospital.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hospital-new', component: HospitalComponent },
  { path: 'hospitals/:id', component: HospitalsComponent },
  { path: 'patients/:id', component: PatientsComponent },
  { path: 'patient/:id', component: PatientComponent },
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
