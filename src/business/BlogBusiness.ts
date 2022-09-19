import BlogInput from "../inputObjects/BlogInput";
import BlogOutput from "../outputObjects/BlogOutput";

<<<<<<< HEAD
export default class BlogBuisness {
=======
export default class BlogBusiness {
>>>>>>> 7f82bfa1503f746c1c10c0e9ab711db47e51ce60
  private readonly data: BlogInput;

  constructor(data: BlogInput) {
    this.data = data;
  }

  public async create(): Promise<BlogOutput> {
    const resp: BlogOutput = {
<<<<<<< HEAD
      description: `El estudiante ${this.data.nameStudent}
      tiene una clase llamada ${this.data.tutorial.subject},
      que dura ${this.data.tutorial.schedule},
      la cual dicta el profesor ${this.data.tutorial.teacher}.
      El contenido de la clase fue: ${this.data.description},
      el cual tiene la puntuacion de: ${this.data.score}`,
=======
      description: `El estudiante ${this.data.nameStudent} tiene una clase llamada ${this.data.tutorial.subject}, que dura ${this.data.tutorial.schedule}, la cuál dicta el profesor ${this.data.tutorial.teacher}. El contenido de la clase fue: ${this.data.description}, el cual tiene la puntuación de: ${this.data.score}`,
>>>>>>> 7f82bfa1503f746c1c10c0e9ab711db47e51ce60
    };
    return resp;
  }
}
