function turnOn(){
    document.getElementById("myImage").src="images/bulbon.jpeg";
    document.querySelector("#myMessage").innerHTML= 'The ligth is turn on';
    document.querySelector('.myMessage').innerHTML= 'The ligth is turn on/class';
}
function turnOff(){
    document.getElementById("myImage").src="images/bulboff.jpeg";
    document.querySelector("#myMessage").innerHTML= 'The ligth is turn off';
    document.querySelector('.myMessage').innerHTML= 'The ligth is turn off/class';
}