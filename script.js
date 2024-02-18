let endDate ='11 December 2023 02:09 PM'

const lbldays = document.getElementById('days')
const lblHours = document.getElementById('hours')
const lblMinutes = document.getElementById('minutes')
const lblSeconds = document.getElementById('seconds')

function clock(endDate)
{ const error = document.querySelector('.error')
    const end = new Date(endDate)
    const now = new Date()
    if(end < now){
       
        error.textContent='Launch date should be future date.Please select correct date.'
        error.style.display='block'
    }
    else{
        error.style.display='none'
    }

   
    const diff  = (end - now) / 1000
    if(diff < 0 ){
       return
    }
    const days =Math.floor(diff/3600/24)
    const hours = Math.floor(diff / 3600) % 24
    const minutes = Math.floor(diff /60)%60
    const seconds = Math.floor(diff) %60
    lbldays.textContent = String(days).length < 2 ? String(days).padStart(2,0) : days
    lblHours.textContent = String(hours).length < 2 ? String(hours).padStart(2,0) : hours
    lblMinutes.textContent = String(minutes).length < 2 ? String(minutes).padStart(2,0) : minutes
    lblSeconds.textContent = String(seconds).length < 2 ? String(seconds).padStart(2,0) : seconds
}
const dateField = document.getElementById('date-time')
dateField.addEventListener('change',function(e){
        
    setInterval(()=>{
        endDate =dateField.value
        clock(endDate)
    },1000)
    
})