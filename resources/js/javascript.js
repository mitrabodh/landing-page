
const swiper = document.querySelector(".swiper");
const navbullets = document.querySelectorAll(".navbullet");
const feedbacks = document.querySelectorAll(".feedback");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".fa-solid");

let i = 330; //Distance in px.
let v = 0; //Navigation bullet count starts from zero.
let time = 2000;

// Testimonial swiper animation
navbullets[v].classList.add("active");
v = v + 1;
let interval = setInterval(() => {

    // Check if the navigation bullet is not the first one and less than or equal to the fourth one(the last one).
    if (v > 0 && v <= 4) {

        navbullets[v].classList.add("active");

        navbullets.forEach((k, l) => {
            if (l !== v) {
                navbullets[l].classList.remove("active");
            }

        })


        // If the navigation bullet is less than the last one, increment the bullet count by one otherwise restart the count from zero.
        if (v < 4) {
            v = v + 1;
        } else {
            v = 0;
        }
    } else if (v === 0) {
        // Condition for the first navigation bullet.
        navbullets[v].classList.add("active");
        navbullets.forEach((k, l) => {
            if (l !== v) {
                navbullets[l].classList.remove("active");
            }

        })
        v = v + 1;
    }


    // Code for horizontal scrolling functionality of Testimonials. 
    swiper.scroll({ left: i, behavior: "smooth" });
    if (i === 0) {
        i = 330;
    } else if (i >= 330) {
        i = i + 330;
    }
    if (i > 1320) {
        i = 0;
    }

}, time);

// Navigation bullets click event handler.
navbullets.forEach((el, index) => {
    el.addEventListener("click", () => {
        clearInterval(interval)
        if (!navbullets[index].classList.contains("active")) {
            navbullets[index].classList.add("active");
        }
        navbullets.forEach((_, k) => {
            if (k !== index) {
                navbullets[k].classList.remove("active");
            }
        })
        const scrollPosition = index * 330;
        swiper.scroll({ left: scrollPosition, behavior: "smooth" });

    }
    )
})


// Expand and close functionality for FAQs.
questions.forEach((element, index) => {
    let current;
    element.addEventListener("click", () => {
        if (!answers[index].classList.contains("show")) {
            answers[index].classList.add("show");
            icons[index].classList.remove("fa-plus");
            icons[index].classList.add("fa-minus");
        } else {
            answers[index].classList.remove("show");
            icons[index].classList.add("fa-plus");
            icons[index].classList.remove("fa-minus");
        }

        answers.forEach((elm, indx) => {
            if (indx !== index) {
                if (elm.classList.contains("show")) {
                    elm.classList.remove("show");
                    icons[indx].classList.add("fa-plus");
                    icons[indx].classList.remove("fa-minus");
                }

            }
        })


    })


})







