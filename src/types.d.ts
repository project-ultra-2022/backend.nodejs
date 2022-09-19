import { string } from "joi";

export type StatusCode = 200 | 400 | 500;

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

export type Student =
  | "Daniel"
  | "Esteban"
  | "Santi"
  | "Pipe"
  | "SelemSalem"
  | "Nelson";

export interface CodeClasses {
  schedule: string;
  teacher: Student;
  subject: string;
}

export type Player = "Neymar" | "Cristiano" | "Messi";

// export type ErrorResponse<T> = Omit<SuccessResponse, 'data'>
