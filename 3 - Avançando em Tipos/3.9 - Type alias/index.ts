type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId("85");

type FetchReponse = string | boolean;

function isActive(response: FetchReponse) {
  if (true) {
    response = "Online";
  }
  console.log(`System Status: ${response}`);
}

isActive(true);
isActive("Online");
