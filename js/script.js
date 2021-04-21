let barnav = document.querySelector('.barbutton'),
    navdiv = document.querySelector('.navbar-list'),
    homecontent = document.querySelector('.home-content'),
    bullets = document.querySelector('.nabfixed');

    barnav.onclick = () =>{
        navdiv.classList.toggle('opendive');
        homecontent.classList.toggle('closedive');
        bullets.classList.toggle('closedive');  
    }


    //--------------------------------------------------//
//portfolios button on click has change
let button = [...document.body.querySelectorAll('.bttonprotf > button')];
button.forEach(el => el.addEventListener('click', e => setActive(el)));

const setActive = el => {
    [...el.parentElement.children].forEach(sib => sib.classList.remove('active'))
    el.classList.add('active');
    let cssid = el.id;
    showimg(cssid);
    };

let imegs = document.querySelectorAll('.images div');
function showimg(e){
    imegs.forEach(imag =>{
        imag.style.display= "none";
        if(e==imag.dataset.id){
            imag.style.display= "block";
        }else if(e==='all'){
            imag.style.display= "block"; 
        }
    })
}

//circleProgress
    //--------------------------------------------------//
//skills progres

window.onscroll = function(){


}
  //exprets
  let exprets = document.querySelector('.exprets');
  let skillsdiv = document.querySelector('.stater');
window.onscroll = function(){

let expretsoffesttop = exprets.offsetTop,
    expretsoutrheigt = exprets.offsetHeight,
    windheight = this.innerHeight,
    windowcsroltop = this.pageYOffset,
    skilloffesttop = skillsdiv.offsetTop,
    skilloutrheigt = skillsdiv.offsetHeight;

if(windowcsroltop > (skilloffesttop + skilloutrheigt - windheight)){
    $('.timer').countTo();
    } 

if(windowcsroltop > (expretsoffesttop + expretsoutrheigt - windheight)){

$('.circle').circleProgress({
    size: 150,
    startAngle:4.75,
    emptyFill:"#fff",  
    animation:{ duration: 2000 },
    fill: {
      gradient: ["red", "orange"]
    }
}); 
$('.circle1').circleProgress({
  value: 0.80,
  }); 
$('.circle2').circleProgress({
  value: 0.90,
  });
$('.circle3').circleProgress({
  value: 0.95,
  }); 
$('.circle4').circleProgress({
  value: 0.75,
  });
} 
creittime();
}

//show the value to the h2
function creittime(){
let times = document.querySelectorAll('.cir h4');
times.forEach(time =>{
  let numberh = time.dataset.number,
  counter = 0;
  let x = setInterval(()=>{
    if(counter == numberh){
      clearInterval(x);
    }else{
      counter+=1;
      time.textContent = counter + "%";
    }
  }, 80);
})

 } 

///owl-carousel
    
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
   autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

 //--------------------------------------------------//
//portfolios button on click has change
let buttonspan = [...document.body.querySelectorAll('.chooselist span')];
buttonspan.forEach(el => el.addEventListener('click', e => setsActive(el)));

const setsActive = el => {
    [...el.parentElement.children].forEach(sib => sib.classList.remove('act-btn'))
    el.classList.add('act-btn');
    let chooseid = el.id;
    showidiv(chooseid);
    };

let chosediv = document.querySelectorAll('.choosebody > div');
function showidiv(e){
  chosediv.forEach(chose =>{
    chose.style.display= "none";
        if(e==chose.dataset.id){
          chose.style.display= "block";
        }
    })
}



 //--------------------------------------------------//
// button on click has show poup

let img = document.querySelector('.img'),
    themodel = document.querySelector('.the-model'),
    buttonclose = document.querySelector('.close'),
    theimgmodel = document.querySelector('.the-img'),
    thecaption = document.querySelector('.caption'),
    spanbutton = document.querySelector('.videocontent .ai');

    spanbutton.onclick= function(){
        themodel.style.display = "block";
        theimgmodel.src = img.src;
        thecaption.innerHTML = img.alt;
    };

    buttonclose.onclick =function(){
        themodel.style.display = "none";
    };

    document.onkeydown = function(e){
        if(e.keyCode=="27"){
            themodel.style.display = "none";
        }
    };

    ///owl-slick
    
    $('.slick').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      prevArrow:false,
      nextArrow:false,
});

/*----bullets---*/
let allbullet = document.querySelectorAll('.nabfixed div'),
    navlist = document.querySelectorAll('.nlist ul li a'),
    navbarlist = document.querySelectorAll('.navbar-list span a');

function scrollforpadg(elments){
    elments.forEach(elment =>{
        elment.addEventListener('click', (e)=>{
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            })
        })
})}
scrollforpadg(allbullet);
scrollforpadg(navlist);
scrollforpadg(navbarlist);