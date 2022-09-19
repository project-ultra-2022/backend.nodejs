export type StatusCode = 200 | 400 | 500;

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

export type Student =
  | "Nelson"
  | "Felipe"
  | "Selena"
  | "Daniel"
  | "Santiago"
  | "Esteban";

export interface CodeClasses {
  schedule: String;
  teacher: Student;
  subject: String;
}

export type Player = "Neymar" | "Messi" | "Cristiano";

// export type ErrorResponse<T> = Omit<SuccessResponse, 'data'>
