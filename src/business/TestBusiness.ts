import TestInput from "../inputObjects/TestInput";
import TestOutput from "../outputObjects/TestOutput";

export default class TestBusiness {
  private readonly data: TestInput;

  constructor(data: TestInput) {
    this.data = data;
  }

  public async create(): Promise<TestOutput> {
    const response: TestOutput = {
      message: `El nombre es ${this.data.name} ${this.data.lastname} y su edad es ${this.data.age}`,
    };
    return response;
  }
}
