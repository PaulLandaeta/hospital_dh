import { Hospital } from './Hospital';
import { Notes } from './Notes';

export interface Patient {
  id?: number;
  address: string;
  city: string;
  name: string;
  phone: string;
  hospital: Hospital;
  notes: Notes[];
}
