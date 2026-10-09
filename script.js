const waterBtn = document.querySelector("#water-button");
const flowerContainer = document.querySelector("#flower-container");
const secretMsg = document.querySelector("#secret-message");
let waterCount = 0;

waterBtn.addEventListener("click", () => {
  if (waterCount < 3) {
    waterCount++;

    console.log(waterCount);

    flowerContainer.classList.add(`stage-${waterCount}`);

    if (waterCount === 3) {
      waterBtn.disabled = true;

      setTimeout(() => {
        secretMsg.classList.add("revealed");

        secretMsg.textContent = `Não consegui te entregar uma flor pessoalmente, então plantei uma na internet.🌹
        
        Ela é bonitinha, mas ainda não chega perto da sua beleza.
        
        Para Kamylla.
        Feito pelo seu Igor de Santo Cristo.`;


      }, 1000);
    }
  }
});
