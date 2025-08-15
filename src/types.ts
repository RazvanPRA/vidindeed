export type Role = 'Admin' | 'Worker' | 'Customer';

export interface User {
  id: string;
  email: string;
  password: string;
  role: Role;
}