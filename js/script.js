const container = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");
const submit = document.getElementById("submit");
const footer = document.querySelector(".footer");
const main = document.querySelector(".main");
const contact = document.querySelector(".contact");
const goBack = document.getElementById("go-back");

submit.addEventListener('click', () =>{
    main.style.display = "none";
    contact.style.display = "none"
    footer.classList.remove("hidden-3");
    container.classList.remove("hidden-1");
})
submitButton.addEventListener("click", () =>{
    container.style.display = "none";
    thankYou.classList.remove("hidden");
})

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML
    })
})

goBack.addEventListener('click', () =>{
    footer.classList.add("hidden-3");
    container.classList.add("hidden-1");
    thankYou.classList.add("hidden");

    main.style.display = "block";
    contact.style.display = "block";
})