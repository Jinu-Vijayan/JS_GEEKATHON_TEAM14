
//work on clicking on review option
let review=document.getElementById("review")
review.addEventListener("click",()=>{

 

let whom2=document.getElementById("whom2").value;
document.getElementById("whom").innerText=whom2

let from=document.getElementById("from").value;
document.getElementById("from3").innerText=from


let mailTo=document.getElementById("to2").value
document.getElementById("idTo").innerText=mailTo



let addTo=document.getElementById("address_to").value
document.getElementById("addTo").innerText=addTo

let addFrom=document.getElementById("FromAdd").value
document.getElementById("billAdd").innerText=addFrom


let billFrom=document.getElementById("from").value

let mailFrom=document.getElementById("fromMail").value
document.getElementById("billmail").innerText=mailFrom

// this data is for 1st part invoice number and date
let vNumber=document.getElementById("voice").value
document.getElementById("voice2").innerText=vNumber

//fetch tha value for current date
let currentDate=document.getElementById("cDate").innerText
document.getElementById("cdate").innerText=currentDate


//due date value


})






