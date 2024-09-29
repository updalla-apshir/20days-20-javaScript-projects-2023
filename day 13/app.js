function roll() {
    let dots = document.querySelectorAll('.dot'),
        die = document.querySelector('.die');


        die.classList.remove("shake");

        void die.offsetWidth

        die.classList.add("shake")
    
    dots.forEach(dot => {
        dot.classList.add("rolling");
    });



    setTimeout(() => {
        dots.forEach(dot => {
            dot.classList.remove("rolling");
        });

        let dieValue = Math.floor(Math.random() * 6) + 1;
        console.log("Die value:", dieValue);

        // Reset all dots
        dots.forEach(dot => {
            dot.style.display = 'none';
        });

        // Show dots based on the rolled value
        switch (dieValue) {
            case 1:
                document.querySelector("#dot-2").style.display = 'block';
                break;
            case 2:
                document.querySelector("#dot-1").style.display = 'block';
                document.querySelector("#dot-3").style.display = 'block';
                break;
            case 3:
                document.querySelector("#dot-1").style.display = 'block';
                document.querySelector("#dot-2").style.display = 'block';
                document.querySelector("#dot-3").style.display = 'block';
                break;
            case 4:
                document.querySelector("#dot-1").style.display = 'block';
                document.querySelector("#dot-3").style.display = 'block';
                document.querySelector("#dot-4").style.display = 'block';
                document.querySelector("#dot-5").style.display = 'block';
                break;
            case 5:
                document.querySelector("#dot-1").style.display = 'block';
                document.querySelector("#dot-2").style.display = 'block';
                document.querySelector("#dot-3").style.display = 'block';
                document.querySelector("#dot-4").style.display = 'block';
                document.querySelector("#dot-5").style.display = 'block';
                // document.querySelector("#dot-6").style.display = 'block'; // Added
                break;
            case 6:
                document.querySelector("#dot-1").style.display = 'block';
                document.querySelector("#dot-3").style.display = 'block';
                document.querySelector("#dot-5").style.display = 'block';
                // document.querySelector("#dot-2").style.display = 'block';
                document.querySelector("#dot-4").style.display = 'block';
                document.querySelector("#dot-6").style.display = 'block';
                break;
            default:
                break;
        }

        document.querySelector("#total").innerHTML = "Your roll is " + dieValue;
    }, 1000);
}

