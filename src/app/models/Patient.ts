import { Hospital } from './Hospital';

export interface Patient {
  id?: number;
  address: string;
  city: string;
  name: string;
  phone: string;
  hospital: Hospital;
}
