const pass="شهوده نجحت";

const text=`مبروك يا شهودة ❤️🌸

بجد فرحتلك من قلبي وكنت واثق إن تعبك مش هيروح على الفاضي تستحقي النجاح ده وكل حاجة حلوة جاية ليكي.

ربنا يوفقك دايمًا، وعقبال نجاحات وفرح أكتر بكتير 💖

ألف مبروك يا شهودة 🌷`;

function checkPassword(){

let value=document.getElementById("password").value;

if(value===pass){

document.getElementById("login").style.display="none";

document.getElementById("card").classList.remove("hidden");

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

typeMessage();

}

else{

document.getElementById("error").innerHTML="❌ كلمة السر غلط";

}

}

function typeMessage(){

let i=0;

let msg=document.getElementById("message");

msg.innerHTML="";

let timer=setInterval(()=>{

if(i<text.length){

if(text[i]=="\n"){

msg.innerHTML+="<br>";

}else{

msg.innerHTML+=text[i];

}

i++;

}else{

clearInterval(timer);

}

},40);

}

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>0.5?"💖":"🌸";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*4+5)+"s";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},300);
