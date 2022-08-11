import TestInput from '../inputObjets/TestInput';
import TestOutput from '../outputObjets/TestOutput';

export default class TestBusiness {
  private data: TestInput;

  constructor(data: TestInput) {
    this.data = data;
  }

  public async create(): Promise<any> {
    const data: TestOutput = new TestOutput(this.data.getName())
    return data;
  }
}
