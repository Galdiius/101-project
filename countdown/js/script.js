if(localStorage.getItem('future')){
    let year = new Date(parseInt(localStorage.getItem('future'))).getFullYear()
    let month = new Date(parseInt(localStorage.getItem('future'))).getMonth()
    let day = new Date(parseInt(localStorage.getItem('future'))).getDate()
    let hours = new Date(parseInt(localStorage.getItem('future'))).getHours()
    let minutes = new Date(parseInt(localStorage.getItem('future'))).getMinutes()
    hours >= 10 ? hours=hours : hours=`0${hours}`
    minutes >= 10 ? minutes=minutes : minutes=`0${minutes}`
    month >= 10 ? month=month : month=`0${month}`
    document.getElementById("date").value = `${year}-${month}-${day}`
    document.getElementById("time").value = `${hours}:${minutes}`
}   

function countdown(){
    let future = localStorage.getItem('future') ? localStorage.getItem('future') :  new Date().getTime()
    let now = new Date().getTime()

    let distance = future - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
}

setInterval(countdown,1000)

document.getElementById("btn").addEventListener("click",function(){
    let date = document.getElementById("date").value
    let time = document.getElementById("time").value
    let future = new Date(`${date} ${time}`).getTime()
    console.log(date)
    localStorage.setItem('future',future) 

})