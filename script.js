let endDate ='11 December 2023 02:09 PM'

const lbldays = document.getElementById('days')
const lblHours = document.getElementById('hours')
const lblMinutes = document.getElementById('minutes')
const lblSeconds = document.getElementById('seconds')
const error = document.querySelector('.error')
let interval
function clock(endDate)
{ 
    const end = new Date(endDate)
    const now = new Date()
    const diff  = (end - now) / 1000
    
  
   
    if(diff < 0 ){
        error.style.display='block'
        error.textContent='Event Started!!!'
        const svgContainer = document.createElement('div')
        svgContainer.classList.add('svg')
        const time = setTimeout(()=>{

            document.querySelector('.launchdown-input').appendChild(svgContainer)
             const animItem = bodymovin.loadAnimation({
                 wrapper: svgContainer,
                 animType: 'svg',
                 loop: false,
                 autoplay: false,
              path:'https://lottie.host/bc0a77ee-fae9-4026-927f-e2547014a5f4/2dhgp8ALNK.json'
             })
             animItem.goToAndPlay(0,true)
           
        },1000)
        
        setTimeout(()=>{
            clearTimeout(time)
            clearInterval(interval)
            document.querySelector('.launchdown-input').removeChild(svgContainer)
            error.textContent='Enter new event countdown'
          
        },5000)
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
    const end = new Date(e.target.value)
    const now = new Date()
    if(end < now){
        error.textContent='Launch date should be future date.Please select correct date.'
        error.style.display='block'
    }
    else{
        error.textContent=''
        interval= setInterval(()=>{
            endDate =dateField.value
            clock(endDate)
        },1000)
    }
    
})