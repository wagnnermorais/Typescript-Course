class StaticMembers {
  // prop = "Teste Static"
  // Desta forma a propriedade não estará acessível, porém, adicionando o static, irá ser possivel buscá-la.
  static prop = "Teste static";

  // Da mesma forma o método da própria classe.
  static staticMethod() {
    console.log("Testing static method!");
  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();
