getAdvice();
const dice = document.querySelector(".dice");
dice.addEventListener("click", getAdvice);
dice.addEventListener("mouseover", () => {
    dice.classList.add("hovered");
});
dice.addEventListener("mouseleave", () => {
    dice.classList.remove("hovered");
});


function updatePage (id, advice) {
    const idSection = document.querySelector(".advice-id");
    const adviceSection = document.querySelector(".advice-text");
    idSection.textContent = "ADVICE #" + id;
    adviceSection.textContent = '"' + advice + '"';
  }

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    updatePage(data.slip.id, data.slip.advice);
}