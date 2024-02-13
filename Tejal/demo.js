


let array=[]

// add a dyanamic date in date portion
let cdate=document.getElementById("cDate")

let date = new Date();
	let day1 = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

  let currentDate =
		day1 +
		" /" +
		month + 
		" /" +
		year ; 

cdate.innerText=currentDate



document.getElementById("add-row").addEventListener("click", (e)=> {
    e.preventDefault();
    // addNewRow();
});
 

// demo

const tBody = document.getElementById("table-body");
// let arrays=[];
let addNewRow =()=> {
    const row = document.createElement("tr");
    row.className = "single-row";
    row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product"></td>
                    <td><input type="number" placeholder="0" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                    <td style="text-align: right;" id="imgg"><span id="img"><img id="image"
                    src="./images/trash.png" alt="delete_outline" action="delete"></span></td>
                    `
    // tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
     tBody.append(row)
    

    //     prod_name=document.getElementById("product").value
    // price=document.getElementById("price").value
    // quantity=document.getElementById("unit").value
  
    
    // document.getElementById('newtr').innerHTML += '<tr><td>'  + prod_name + '</td><td>' + price + '</td> <td>' + quantity + '</td><td>' + amount + '</td></tr>'
  
   
    // document.getElementById("total").innerHTML = price * quantity ;
    // let total_answer=document.querySelector("#invoice .#sum #total").value
  
    //  document.getElementById("total").innerText=total_answer;
    //  document.getElementById("finalAmount").innerText=total_answer;
        console.log(tBody.children);
    
   
}

// array.push(addNewRow())
// console.log(array.length);


//getting the
getInput =()=> {
    var rows = document.querySelectorAll("tr.single-row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#unit").value;
        var price = currentRow.querySelector("#price").value;

        amount = unit * price;
        currentRow.querySelector("#amount").value = amount;
        overallSum();

    })
};


overallSum =()=> {
    var arr = document.getElementsByName("amount");
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].value) {
            total += +arr[i].value;
        }
        document.getElementById("total").value = total;
        let subTotal=document.getElementById("subtotal-amount")
        subTotal.innerText=total

        let lastamount=document.getElementById("lastamount")
        lastamount.innerText=total
       
    }
}

//Delete row from the table
tBody.addEventListener("click", (e)=>{
    let el = e.target;
    const deleteROW = e.target.getAttribute("action");
    if(deleteROW == "delete") {
        delRow(el);
        overallSum();
    }
})

//Target row and remove from DOM;
delRow =(el)=> {
    el.parentNode.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode.parentNode);
}


// // print receipt

const btnPrint = document.querySelector(".print");
btnPrint.addEventListener("click", () => {
    // let model=document.getElementById("model")
console.log(window);
    window.print();
});


// data to be added in model
var price;
var quantity;
var amount;
var prod_name;


function calculate() {
//   ids = document.getElementById("ids").value;
  prod_name = document.getElementById("product").value;
  price = document.getElementById("price").value;
  quantity = document.getElementById("unit").value;
  amount = price * quantity;
  document.getElementById("amount").value = amount;
  document.getElementById("product").value=prod_name;
  document.getElementById("price").value=price
  document.getElementById("unit").value

}

function share(){
    let modal=document.getElementById("myModal")
    let lastamount=document.getElementById("lastamount").value
    
    
    window.open("whatsapp://send?text="+"Total Amount Is : "+lastamount,"twitter window","width=600","height=300");

}







