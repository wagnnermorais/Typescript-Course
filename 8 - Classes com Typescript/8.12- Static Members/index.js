"use strict";
class StaticMembers {
    // Da mesma forma o método da própria classe.
    static staticMethod() {
        console.log("Testing static method!");
    }
}
// prop = "Teste Static"
// Desta forma a propriedade não estará acessível, porém, adicionando o static, irá ser possivel buscá-la.
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
