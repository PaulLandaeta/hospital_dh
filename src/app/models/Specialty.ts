import { Hospital } from './Hospital';

export interface Specialty {
  id?: number;
  name: string;
  description: string;
  icon: string;
  hospitals: Hospital[];
  created: string;
  updated: string;
  createdBy: string;
  updatedBy: string;
}
