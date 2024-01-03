"use strict";
class DeclareProp {
    constructor() {
        this.x = 10;
    }
}
class GetProp extends DeclareProp {
}
const declarePropInstance = new DeclareProp();
const getPropInstance = new GetProp();
console.log(declarePropInstance.x);
console.log(getPropInstance.x);
