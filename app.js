setInterval(()=>{
    let time = document.getElementById ('time')
    let date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let dayNight = "AM";

    if(hours > 12){
        hours = hours-12
        dayNight ="PM"
    }
    if(min < 10){
       min = "0"+ min
    }
    if(hours < 10){
        hours = "0"+ hours
    }
    if(sec < 10){
        sec = "0"+ sec
    }
    
    time.textContent = hours +":"+ min + ":"+ sec+ " "+ dayNight
    
})