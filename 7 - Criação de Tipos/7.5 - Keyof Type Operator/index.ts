type Character = {
  name: string;
  age: number;
  hasDriveLicense: boolean;
};

type Key = keyof Character;

function showCharName(obj: Character, key: Key) {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: "Matheus",
  age: 30,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, "hasDriveLicense"));
