import { Curso } from '@/types/api';
import { api } from './api';

export async function fetchCursos(): Promise<Curso[]> {
  return api.get<Curso[]>('/cursos');
}

export async function fetchCursoById(id: string | number): Promise<Curso> {
  return api.get<Curso>(`/cursos/${id}`);
}

export async function createCurso(payload: Partial<Curso>): Promise<Curso> {
  return api.post<Curso>('/cursos', payload);
}
