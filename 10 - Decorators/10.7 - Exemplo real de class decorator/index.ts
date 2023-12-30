function createdAt(createdAt: Function) {
  createdAt.prototype.createdAt = new Date();
}

@createdAt
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdAt
class Pen {
  id;

  constructor(id: number) {
    this.id = id;
  }
}

const book = new Book(5);
const pen = new Pen(15);

console.log(book.createdAt);
console.log(pen);
