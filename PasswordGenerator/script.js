let sliderElemente = document.querySelector("#slider")
let buttonElemente = document.querySelector("#sizeButton")

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@";
let newPassword = "";

sizePassword.innerHTML = sliderElemente.value;

sliderElemente.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElemente.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n))
        
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;

}

function copyPassword(){
    alert ("Copied!");
    navigator.clipboard.writeText(newPassword);
}
