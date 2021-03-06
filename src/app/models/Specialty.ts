import { Hospital } from './Hospital';

export interface Specialty {
  id?: number;
  name: string;
  description: string;
  icon: string;
  hospitals: Hospital[];
  created: Date;
  updated: Date;
  createdBy: string;
  updatedBy: string;
}
