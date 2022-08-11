import { func1 } from "./exportFunc";

class User {
  public static lastId: number = 0;
  private id: number;
  private name: string;
  private surname: string;

  constructor() {
    this.id = User.lastId;
    User.lastId++;
  }
}

const user = new User();
console.log("hi");

func1();
