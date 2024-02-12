let section = document.querySelector('.card-section');
section.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
    if(e.target.innerText === "Pay Now"){
        rzpButton(); 
    }
})


var options = {
    key: 'rzp_test_p6BvGAum2Q35us', // Enter your Razorpay Key ID
    amount: 50000, // Amount is in currency subunits. 1000 = 10 INR
    currency: 'INR',
    name: 'Acme Corp',
    description: 'Test Payment',
    image: 'https://unsplash.com/photos/a-dimly-lit-hallway-with-hanging-plants-and-potted-plants-a-M7GOHK0mg',
    handler: function(response) {
        alert('Payment successful: ' + response.razorpay_payment_id);
    }
};

// var rzpButton = document.getElementById('rzp-button');

let rzpButton = function(e) {
    var rzp = new Razorpay(options);
    rzp.open();
    e.preventDefault();
}