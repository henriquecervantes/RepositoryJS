
let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#sizeButton")

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@";
let newPassword = "";

let copyNewPassword = document.querySelector("#tooltip");

//Define password lengh
sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

<!--
function generatePassword(){

    resetTooltip()
    //Change tooltip color to default
    copyNewPassword.classList.toggle("success", false)

    //Generate random char
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n))
        
    }

    password.innerHTML = pass;
    newPassword = pass;

    //Show password
    containerPassword.classList.remove("hide");
    

}

//Reset tooltip text to default
function resetTooltip(){

    let copy = "Copy Password📄"
    tooltip.innerHTML = copy

}

//Tooltip changes
function copyPassword(){
    
    //Change text
    copy = "Copied ✅"
    tooltip.innerHTML = copy
    navigator.clipboard.writeText(newPassword);

    //Change tooltip Color
    copyNewPassword.classList.toggle("success", true)

}
