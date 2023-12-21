// 1. Criar uma função que recebe review dos usuários, precisamos utilizar o narrowing para receber o dado.
// 2. As possibilidades são boolean e number.
// 3. Serão enviados números de 1 a 5 estrelas, prever uma mensagem para cada uma destas notas.
// 4. Ou false, para quando o usuário não deixa um review, prever um retorno para este caso também.

function getReview(review: boolean, rate?: number) {
  if (review) {
    switch (rate) {
      case 1: {
        console.log("1 estrela enviada.");
        break;
      }

      case 2: {
        console.log("2 estrelas enviadas.");
        break;
      }

      case 3: {
        console.log("3 estrelas enviadas.");
        break;
      }

      case 4: {
        console.log("4 estrelas enviadas.");
        break;
      }

      case 5: {
        console.log("5 estrelas enviadas.");
        break;
      }
    }
  } else {
    console.log("Review não enviado.");
  }
}

getReview(true, 1);
getReview(true, 2);
getReview(false);
getReview(true, 3);
