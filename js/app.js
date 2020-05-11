const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
let data = [];
const cardsContainer = document.querySelector("#cards");

async function buscaCards() {
  try {
    let response = await fetch(apiUrl);
    return await response.json();
  } catch {
    console.log("Error");
  }
}

function exibeCards(cards) {
  cardsContainer.innerHTML = "";
  cards.map(exibeCard);
}

function exibeCard(card) {
  const div = document.createElement("div");
  div.className = "card-item";
  div.innerHTML = `
    <img src="${card.photo}" class="card-img-top" alt="${card.name}" />
    <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">
        Tipo: ${card.property_type}
      </p>
      <p class="card-text">
      Preço: R$ ${card.price},00
    </p>
    </div>
    `;
  cardsContainer.appendChild(div);
}

async function main() {
  data = await buscaCards();
  if (data) {
    exibeCards(data);
  }
}

main();
