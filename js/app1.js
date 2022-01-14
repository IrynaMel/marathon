const slides = document.querySelectorAll('.slide');

colorChanging()



for(const slide of slides){

    slide.addEventListener('click', () => {
        clearActiveClasses()
        
        slide.classList.add('active')

    })
}
function clearActiveClasses(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}
function colorChanging(){
    setInterval(()=>{
        document.body.style.background = getRandomHexColor()
    }, 5000)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function slidesPlugin(activeSlide = 0){
    slides[activeSlide].classList.add('active')
};

slidesPlugin()