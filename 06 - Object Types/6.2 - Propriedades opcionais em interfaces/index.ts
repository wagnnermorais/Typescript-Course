interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  switch (user.role) {
    case "admin":
      console.log(
        `Seja bem-vindo, ${user.email}, seu acesso atual: Administrador.`
      );
      break;

    case "developer":
      console.log(
        `Seja bem-vindo, ${user.email}, seu acesso atual: Desenvolvedor.`
      );
      break;

    case "reader":
      console.log(`Seja bem-vindo, ${user.email}, seu acesso atual: Leitor.`);
      break;

    default:
      console.log(
        `Seja bem-vindo, ${user.email}! Você possui o acesso de visitante.`
      );
  }
}

const adminUser: User = {
  email: "wagnermoraiscnt@mail.com",
  role: "admin",
};

const developerUser: User = {
  email: "matheusbattisti@mail.com",
  role: "developer",
};

const readerUser: User = {
  email: "vinicius@mail.com",
  role: "reader",
};

const noRoleUser: User = {
  email: "daniel@mail.com",
};

showUserDetails(adminUser);
showUserDetails(developerUser);
showUserDetails(readerUser);
showUserDetails(noRoleUser);
