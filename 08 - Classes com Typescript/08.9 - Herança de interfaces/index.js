"use strict";
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const newPost = new blogPost("Internacional campeão do mundo de 2006!");
console.log(newPost);
console.log(newPost.itemTitle());
