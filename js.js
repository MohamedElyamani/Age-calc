let ageInput = document.getElementById('ageInput'),
monthInput = document.getElementById('monthInput'),
dayInput = document.getElementById('dayInput');

let text = document.querySelector('.text h3'),
btnCalc = document.getElementById('btnCalc');

btnCalc.addEventListener('click',()=>{
    let date = new Date;
    let age = date.getFullYear() - ageInput.value;
    let month =  monthInput.value - (date.getMonth()+1);
    let days =  dayInput.value - (date.getDay()+1);

    text.innerHTML = `your age is ${age} and ${month} month and ${days} days`
})