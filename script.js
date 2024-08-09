const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
password1El = document.getElementById("password1")
password2El = document.getElementById("password2")
let control = false
//counter section
countEl = document.getElementById("count")
countEl.textContent = 15
let count = 15;
function addCount() {
    count++;
    document.getElementById("count").textContent = count;
}
function reduceCount() {
    if (count > 0) { // Impediamo che il contatore vada sotto zero
        count--;
    }
    document.getElementById("count").textContent = count;
}
//generate section
function generate(){
    if (control === false){
        for (let i=0; i<count; i++){
            let random = Math.floor(Math.random()*characters.length)
            password1El.textContent += characters[random]
        }
        for (let i=0; i<count; i++){
            let random = Math.floor(Math.random()*characters.length)
            password2El.textContent += characters[random]
        }
    }
    control = true
}
function reset(){
    password1El.textContent = ""
    password2El.textContent = ""
    copy1El.textContent = "Copy to Clipboard"
    copy2El.textContent = "Copy to Clipboard"
    control = false
}
copy1El = document.getElementById("copy1")
copy1El.textContent = "Copy to Clipboard"
copy2El = document.getElementById("copy2")
copy2El.textContent = "Copy to Clipboard"
function copy1(){
    navigator.clipboard.writeText(password1El.textContent)
    copy1El.textContent = "Copied!"
}
function copy2(){
    navigator.clipboard.writeText(password2El.textContent)
    copy2El.textContent = "Copied!"
}






