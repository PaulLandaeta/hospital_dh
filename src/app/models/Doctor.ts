import { Hospital } from './Hospital';

export interface Doctor {
  id?: number;
  name: string;
  phone: string;
  city: string;
  address: string;
  hospital: Hospital;
  photo_url: string;
  created: Date;
  updated: Date;
  createdBy: string;
  updatedBy: string;
}
