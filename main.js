const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Yay, I love youuuu love <3";
        gif.src = "gif2.gif";

         yesBtn.addEventListener("click", () => {
            question.innerHTML = "Happy Valentine's my love <3";
            gif.src = "gif3.gif";
    });
});

noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.computedStyleMap.left = randomX + "px";
        noBtn.computedStyleMap.top = randomY + "px";
});