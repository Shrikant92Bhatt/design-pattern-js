// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Null Object pattern JS</h1>`;

class User {
  constructor(public id: number, public name: string) {}
  hasAccess() {
    return this.name === "BOB";
  }
}
class NullUser {
  public id: number;
  public name: string;
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}
const userArr: Array<User> = [new User(1, "BOB"), new User(2, "Shrikant")];
function getuser(id): User | NullUser {
  return userArr.find((user: User) => user.id === id);
}
function printUser(id) {
  let user = getuser(id);
  if (user == null) {
    user = new NullUser();
  } else {
    user = user;
  }
  console.log(`Welcome ${user.name}`);
  console.log(`You are ${user.hasAccess() ? "allowd" : "not allowd"} here!`);
}

console.log(printUser(1));
console.log(printUser(2));
console.log(printUser(3));
