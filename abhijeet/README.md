#**Payment Gateway Integration in a website using Razorpay Pay button.**


##To integrate Razorpay payment gateway into a website, you'll need to follow these general steps:

--------------------------------------------------------------------------------------------------------------------
1. Create a Razorpay Account
Visit the Razorpay website and sign up for an account. Once registered, log in to your [Razorpay Dashboard](https://razorpay.com/). You can provide your banking details in order to complete KYC for the live mode or you can simply skip the part to use the test mode for the demo purposes. On our website we use test mode.
2. Generate API Keys
In the Razorpay Dashboard, navigate to the Accounts & Settings > API Keys section. Here, you'll find your Test and Live API keys. During development, use the Test API keys, and switch to Live keys when deploying your website.



3. Add Razorpay Payment Button
In your website's frontend code (HTML/CSS/JavaScript), create a button or form for initiating the payment process. When clicked, this button will call a JavaScript function to create a payment order and redirect the user to the Razorpay checkout page. On creating the pay button using customizable options provided by razorpay buttons the razorpay.com will provide you a html code as a button code to copy and paste it on your .html file.

4. Test Your Integration
Test your payment flow thoroughly using the Razorpay Test API keys to ensure everything works as expected before deploying your website with live payments.


5. Deploy Your Website
Once you've completed testing and are confident in your integration, switch to the Live API keys and deploy your website to a production environment.
Usage
--------------------------------------------------------------------------------------------------------------------------------
In the world of web development where most of the websites are providing many products and services through their websites, it is also necessary to collect money as a charge to avail those products and services. So, instead of creating the separate transaction functionality from scratch where we need to integrate APIs provided by banks also in our system. We can use the Payment gateway of Razorpay which provides us such functionalities within a single line of code. 
More customizable options - We can choose from various forms of payment method including payment links, QR code, pay buttons, etc. which gives us freedom to use anything we are comfortable with.


**Easy to implement**- Once you create your Api keys it is extremely easy to use the services and you can also check your payment history from the user which you receive on your website through the Razorpay website.



**Small Businesses** - A small business that sells its products online and accepts payments on its website. For example, you are a pottery artist who sells hand-painted pottery online.
UI screenshots

Enter the amount to donate or select the amount for cause 1 in case you want to pay the same amount as shown over there.

Fill the mandatory details about the user 

Choose the valid option of payment 



Select you bank and click on pay now

Choose from success or failure as it is testing transaction which will lead to success or failure of payment.




It will show payment is successful in the end.

The payment history will get updated in your Razorpay account.


**What we learned ?**

A better understanding of the payment gateway integration. So we can also use our real and live websites to collect payments from the user.










