const icons=document.body.querySelectorAll(".icon")
const boxes=document.querySelectorAll(".box")
const texts=document.querySelectorAll(".text")
icons.forEach((icon,idx)=>{
    icon.addEventListener('click',()=>{
        if( texts[idx].textContent==``){
            icon.innerHTML=`
                <img src="image/delete.png">
             `
             boxes[idx].classList.toggle('active')
             texts[idx].textContent=`
                Nobody knows
             `
        }
        else{
            icon.innerHTML=`
                <img src="image/arrow-down-sign-to-navigate.png">
             `
             boxes[idx].classList.toggle('active')    
             texts[idx].textContent=``
        }
        
    })
})



