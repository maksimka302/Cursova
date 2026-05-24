

const joinButton =
document.querySelector(".btn");

joinButton.addEventListener("click", () => {
    alert("Дякуємо за бажання долучитися!");
});



// АКТИВНЕ МЕНЮ

const navLinks =
document.querySelectorAll(".nav__link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});




const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0)";
    });

});




const newsCards =
document.querySelectorAll(".news__card");

newsCards.forEach(news => {

    news.addEventListener("mouseover", () => {
        news.style.opacity = "0.7";
    });

    news.addEventListener("mouseout", () => {
        news.style.opacity = "1";
    });

});




function validateForm(){

    const email =
    document.getElementById("email").value;

    if(email === ""){
        alert("Введіть Email!");
        return false;
    }

    alert("Форму успішно надіслано!");

    return true;
}


const modal =
document.getElementById("modal");

const openModal =
document.getElementById("openModal");

const closeModal =
document.querySelector(".close");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.style.display = "none";
    }

});




const volunteerForm =
document.getElementById("volunteerForm");

volunteerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
    "Анкету успішно надіслано!"
    );

    modal.style.display = "none";

    volunteerForm.reset();

});