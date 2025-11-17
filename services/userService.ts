import { User } from '@/types/api';
import { api } from './api';

export async function fetchUsers(): Promise<User[]> {
  return api.get<User[]>('/users');
}

export async function fetchUserById(id: string | number): Promise<User> {
  return api.get<User>(`/users/${id}`);
}

export async function createUser(payload: Partial<User>): Promise<User> {
  return api.post<User>('/users', payload);
}
