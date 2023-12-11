

// Animated Circle object

const circleEls = document.querySelectorAll('.js-circle')
const circleTl = gsap.timeline({repeat: -1, yoyo: true});

let circleSize = 1;
circleEls.forEach(circle => {
  gsap.set(circle, {scale: circleSize});
  circleSize+=.5
})

circleTl.from(circleEls, {scale: 1, stagger: .175, duration: .6, ease: Power3.inOut})

// Circle ends.




let Advice = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  console.log(data);



    let adviceBtn = document.querySelector("#adviceBtn")

  let adviceContainer = document.querySelector("#advice");
  adviceBtn.addEventListener ("click", () => {
    adviceContainer.innerHTML = data.slip.advice;
    
      
  });
};

Advice();


let adviceBtn = document.querySelector("#adviceBtn")
adviceBtn.addEventListener('click', () => {
    Advice();
})



