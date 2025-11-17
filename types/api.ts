export interface User {
  id: number | string;
  email?: string;
  name?: string;
  role?: 'admin' | 'student' | 'teacher' | string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Curso {
  id: number | string;
  titulo: string;
  descripcion?: string;
  publicado?: boolean;
}

export interface PerfilEstudiante {
  id: number | string;
  userId: number | string;
  bio?: string;
  avatarUrl?: string;
}

export interface Tema {
  id: number | string;
  titulo: string;
  cursoId?: number | string;
}

export interface Seccion {
  id: number | string;
  titulo: string;
  temaId?: number | string;
}

export interface Ejercicio {
  id: number | string;
  titulo: string;
  contenido?: string;
  seccionId?: number | string;
}

export interface Reward {
  id: number | string;
  nombre: string;
  puntos: number;
}

export interface Streak {
  id: number | string;
  userId: number | string;
  days: number;
}

export interface SesionTutoria {
  id: string;
  tutorId?: string;
  estudianteId?: string;
  fecha?: string;
  notas?: string;
}
