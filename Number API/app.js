const math = document.getElementById('mathematics');
const math_btn = document.getElementById('math-btn');
const math_input = document.getElementById('math-input');
const text_math = document.querySelector('.text-math');

math_btn.addEventListener('click',()=>{
    
    fetch(`http://numbersapi.com/${math_input.value}/math`)
    .then((res)=> {
        return res.text();
    })
    .then((txt)=>{
        math.style.backgroundImage = 'linear-gradient(rgba( 0, 0, 0, 0.8),rgba( 0, 0, 0, 0.8)),url("math2.jpg")';
        text_math.innerHTML = `<p> ${txt} </p>`
    })
    .catch((err)=>alert(err))
});

const trivia = document.getElementById('trivia');
const trivia_btn = document.getElementById('trivia-btn');
const trivia_input = document.getElementById('trivia-input');
const text_trivia = document.querySelector('.text-trivia');

trivia_btn.addEventListener('click',()=>{
    
    fetch(`http://numbersapi.com/${trivia_input.value}/trivia`)
    .then((res)=> {
        return res.text();
    })
    .then((txt)=>{
        console.log(txt);
        trivia.style.backgroundImage = 'linear-gradient(rgba( 0, 0, 0, 0.8),rgba( 0, 0, 0, 0.8)),url("trivia5.jpg")';
        text_trivia.innerHTML = `<p> ${txt} </p>`
    })
    .catch((err)=>alert(err))
});


const year = document.getElementById('year');
const year_btn = document.getElementById('year-btn');
const year_input = document.getElementById('year-input');
const text_year = document.querySelector('.text-year');

year_btn.addEventListener('click',()=>{
    
    fetch(`http://numbersapi.com/${year_input.value}/year`)
    .then((res)=> {
        return res.text();
    })
    .then((txt)=>{
        year.style.backgroundImage = 'linear-gradient(rgba( 0, 0, 0, 0.8),rgba( 0, 0, 0, 0.8)),url("year.jpg")';
        text_year.innerHTML = `<p> ${txt} </p>`
    })
    .catch((err)=>alert(err))
});

var flag = 0;

document.querySelector('.mob-menu').addEventListener('click',()=>{
    if(flag==0)
    {
        document.querySelector('.drop-menu').style.display = 'block';
        flag=1;
    }
    else
    {
        document.querySelector('.drop-menu').style.display = 'none';
        flag=0; 
    }

    })