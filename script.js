const form = document.getElementById('form')

const button = document.getElementById('send-button')

let name = form.children.name
let email = form.children.email
let message = form.children.message
   
name.addEventListener('change', ()=>{
    if(name.value === "" || email.value === "" || message.value === ""){
        if(!button.classList.contains('disabled')){
            button.classList.add('disabled')
        }
    }else{
        if(button.classList.contains('disabled')){
            button.classList.remove('disabled')
        }
    }
})
email.addEventListener('change', ()=>{
    if(name.value === "" || email.value === "" || message.value === ""){
        if(!button.classList.contains('disabled')){
            button.classList.add('disabled')
        }
    }else{
        if(button.classList.contains('disabled')){
            button.classList.remove('disabled')
        }
    }
})
message.addEventListener('change', ()=>{
    if(name.value === "" || email.value === "" || message.value === ""){
        if(!button.classList.contains('disabled')){
            button.classList.add('disabled')
        }
    }else{
        if(button.classList.contains('disabled')){
            button.classList.remove('disabled')
        }
    }
})

button.addEventListener('click', ()=>{
    setTimeout(()=>{
        name.value = ""
        email.value = ""
        message.value = ""
    },150)
})