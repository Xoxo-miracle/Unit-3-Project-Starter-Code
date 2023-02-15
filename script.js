/* Declare variables below to save the different sections (divs) of your story*/
let dressadnheels =document.querySelector("option-one");
let pantsandshirt =document.querySelector("option-two");
let uber =document.querySelector(".option-one-screen");
let CTAbus =document.querySelector(".option-two-screen");
let leavediv =document.querySelector("option-one-end");
let madeitdiv=document.querySelector("option-two-end");
let body = document.querySelector("body");

dressadnheels.onclick=function(){
    uber.style.display="block";
};
pantsandshirt.onclick=function(){
    CTAbus.style.display="block";
};
  leavediv.onclick=function(){
    leavediv.style.display="block";
};


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


