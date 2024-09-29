const wrapper = document.querySelector('.wrapper'),
      carousal = document.querySelector('.carousel'),
      images = document.querySelectorAll('img'),
      buttons = document.querySelectorAll('.button');




let imageIndex = 1,
    intervalid;

const autoSlide = ()=>{
    intervalid = setInterval(()=> slideImage(++imageIndex),2000)
}

autoSlide()

const slideImage = ()=>{
    imageIndex = imageIndex === images.length?0:imageIndex< 0 ? images.length-1:imageIndex;
    carousal.style.transform = `translate(-${imageIndex * 30}%)`;
}

const updateClick = (e)=>{
    clearInterval(intervalid);
    imageIndex += e.target.id === 'next' ? 1: -1;
    slideImage(imageIndex)
    autoSlide()
}

buttons.forEach((button) =>{
    button.addEventListener('click',updateClick)
})

wrapper.addEventListener('mouseover',()=> clearInterval(intervalid))

wrapper.addEventListener('mouseleave',autoSlide)