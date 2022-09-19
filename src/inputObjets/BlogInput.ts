import { CodeClasses, Student } from "../types";
export default interface BlogInput{
    nameStudent: Student;
    tutorial: CodeClasses;
    description: string;
    score:number;
}
