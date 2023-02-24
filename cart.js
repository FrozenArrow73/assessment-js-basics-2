///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((acc, cur) => {
    
    return acc + cur.price
}, 0)

console.log (summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal - couponValue) * (1 + tax)

}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    //name (string)
    name of the customer so that customers can be greated by staff and can be matched
    with phone number for identification
    -it is a string to store the varaity of characters in a name

    //account (number)
    for storing and reterval of customers rewards account information
    -it's a number incase it needs to be changed for any reason we can 
    make a function to do that easily

    //email (string)
    to send out promotional emails
    -its a string to store the varaity of characters of an email

    //phoneNumber (string) 
    for verification purposes and to call the customer when waitlist items arrive
    -it's a string because we wont do math on a phonenumber

    //creditcard (number)
    for ease of payment and for renewal of rewards account
    -its a number to send to payment processing

    //status (boolean)
    to show if the account is active
    -its a boolean because the account is active or not

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    name: "Derek Wheeler",
    account: 1234,
    email: "123@emai.com",
    phoneNumber: "(801) 555-5555",
    creditCard: 1234123412341234,
    status: true
}
