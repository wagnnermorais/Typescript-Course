function maxLength(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} caracteres!`);
      } else {
        value = newValue;
        console.log("Cadastrado.");
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @maxLength(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

const newUsername = new Admin("testeuser1234@mail.com");
const newUsername2 = new Admin("teste@mail");
