const button = document.querySelector('#btn'),
      inputText = document.querySelector('#input-text'),
      result = document.querySelector('#result');


button.addEventListener('click',()=>{
    const text = inputText.value.trim().toLowerCase()
    if(text == ''){
        alert('fill the field')
    }


    const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    const isPlindrome = cleanText == cleanText.split("").reverse("").join("");

    const messege = isPlindrome
    ? ` <span>Yes. </span> it's a palindrome!`
    : ` <span>Noh. </span> Not a palindrome!`

    result.innerHTML = messege;
    result.classList.remove("error","success");
    setTimeout(() =>{
        result.classList.add(isPlindrome?"success":"error")
    },10)
})