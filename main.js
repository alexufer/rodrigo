Webcam.set({width:300 , height: 300 , image_format:"jpeg",jpeg_quality:90})
var appy=window.webkitSpeechRecognition;
var romingo = new appy()
function e(){
document.getElementById("ramon").innerHTML=""
romingo.start()
};
romingo.onresult=function(reunido){console.log(reunido) 
var rodrigue=reunido.results[0][0].transcript
document.getElementById ("ramon").innerHTML=rodrigue
if(rodrigue=="Salomon."){
    console.log("tomando selfie")
    ROdrino()
}};
function ROdrino(){
    romina=window.speechSynthesis
    rodolfo="su foto aparecera aquí en 5 segundos"
    rosio=new SpeechSynthesisUtterance(rodolfo)
    Webcam.attach("#mango")
    romina.speak(rosio)
    setTimeout(function(){
        ROdar="selfie1"
        rofi()
        rofe()
    },5000)
    setTimeout(function(){
        ROdar="selfie2"
        rofi()
        rofe()
    },7000)
    setTimeout(function(){
        ROdar="selfie3"
        rofi()
        rofe()
    },9000)
};
function rofi(){
    Webcam.snap(function(data){
        if (ROdar=="selfie1"){
            document.getElementById("limon").innerHTML='<img id="selfie1" src=" '+data+' ">';
        }
        if (ROdar=="selfie2"){
            document.getElementById("nomil").innerHTML='<img id="selfie2" src=" '+data+' ">';
        }
        if (ROdar=="selfie3"){
            document.getElementById("olecram").innerHTML='<img id="selfie3" src=" '+data+' ">';
        }
    })
};
function rofe(){
    roman=document.getElementById("aRROs")
    image=document.getElementById("selfie").src
    roman.href=image
    roman.click()
    
}