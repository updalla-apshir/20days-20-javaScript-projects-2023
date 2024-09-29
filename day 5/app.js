document.addEventListener("DOMContentLoaded", function () {
    let circles = document.querySelectorAll(".circle");
    let priceNum = document.querySelector(".price_num");
    let priceLetter = document.querySelector(".price_letter");

    circles.forEach(circle => {
        circle.addEventListener("click", () => {
            document.querySelector(".circle.active").classList.remove("active");
            circle.classList.add("active");

            let colorId = circle.id;
            document.querySelector(".main-images .active").classList.remove("active");
            document.querySelector(`.main-images #${colorId}`).classList.add("active");

            //update prices

            if(colorId == 'pink'){
                priceNum.textContent = '$7.50'
                priceLetter.textContent = 'seven dollar and fifty cents'
            } else if (colorId == 'yellow'){
                priceNum.textContent = '$9.00'
                priceLetter.textContent = 'nine dollars only'
            }
            else{
                priceNum.textContent = '$6.09'
                priceLetter.textContent = 'sexy dollar only'
            }
        });
    });
});