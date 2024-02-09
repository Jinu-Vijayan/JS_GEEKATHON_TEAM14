

// add a dyanamic date in date portion
let cdate=document.getElementById("cdate")

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

// add detail in card dynamically
let details=document.getElementById("added")
let itemCounter=0;
let addDetails =()=>{
    itemCounter++;
    
console.log("updated");
let third=document.createElement('div')
third.classList.add("third")
third.style.marginBottom="25px"


third.innerHTML=`

<div class="third_left">

<input type="text" placeholder="Item Name">
<input type="text" placeholder="Item Description">

</div>
<div class="third_right">
<div class="qty">
    
    <input type="number">
</div>
<div class="price">
    
    <input type="number">
</div>
<div class="action">

    <img id="trash" src="./images/trash.png" alt="" onclick="removeItem(${itemCounter})">
</div>

</div>




`
details.append(third)

updateAmount();
}


document.getElementById("add-items").addEventListener("click", (e)=> {
    e.preventDefault();
    addDetails();
    
});



//.........

document.getElementById("add-row").addEventListener("click", (e)=> {
    e.preventDefault();
    addNewRow();
});
 

// demo

const tBody = document.getElementById("table-body");

let addNewRow =()=> {
    const row = document.createElement("tr");
    row.className = "single-row";
    row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product"></td>
                    <td><input type="number" placeholder="0" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                    <td style="text-align: right;" id="imgg"><span id="img"><img id="image"
                    src="./images/trash.png" alt="delete_outline" action="delete"></span></td>`

    tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
}

document.getElementById("add-row").addEventListener("click", (e)=> {
    e.preventDefault();
    // addNewRow();
});


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