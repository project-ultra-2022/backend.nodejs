import BlogInput from "../inputObjects/BlogInput";
import BlogOutput from "../outputObjects/BlogOutput";

export default class BlogBusiness {
  private readonly data: BlogInput;
  constructor(data: BlogInput) {
    this.data = data;
  }
  public async create(): Promise<BlogOutput> {
    const resp: BlogOutput = {
      description: `El estudiante ${this.data.nameStudent} tiene una clase llamada ${this.data.tutorial.subject}, que dura ${this.data.tutorial.schedule}, la cual dicta el profesor ${this.data.tutorial.teacher}. El contenido de la clase fue: ${this.data.description}, el cual tiene la puntuación de: ${this.data.score}`,
    };
    return resp;
  }
}
