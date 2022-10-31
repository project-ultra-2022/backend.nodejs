import { string } from "joi";

export type StatusCode = 200 | 400 | 500;
export type Student =
  | "Selena"
  | "Santiago"
  | "Pipe"
  | "Esteban"
  | "Nelson"
  | "Daniel";

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

export interface CodeClasses {
  schedule: string;
  teacher: Student;
  subject: string;
}

// export type ErrorResponse<T> = Omit<SuccessResponse, 'data'>

export type Player = "Neymar" | "Cristiano" | "Messi";
