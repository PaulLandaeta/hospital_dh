import { Hospital } from './Hospital';
import { Notes } from './Notes';

export interface Patient {
  id?: number;
  name: string;
  lastname: string;
  address: string;
  hospital: Hospital;
  birthday: Date;
  photo_url: string;
  notes: Notes[];
  created: Date;
  updated: Date;
  createdBy: string;
  updatedBy: string;
}
