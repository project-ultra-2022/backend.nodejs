export type StatusCode = 200 | 400 | 500;

export type Student =
  | "Santiago"
  | "Esteban"
  | "Selena"
  | "Daniel"
  | "Nelson"
  | "Pipe";

export interface CodeClasses {
  teacher: Student;
  schedule: string;
  subject: string;
}

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

export type Player = "Neymar" | "Cristiano" | "Messi";

// export type ErrorResponse<T> = Omit<SuccessResponse, 'data'>
