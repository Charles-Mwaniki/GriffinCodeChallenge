/*
• Application needs to accept a list of line items with Product ID, Quantity, and Price
• Calculate totals for all line items
• Calculate any discounts for line items
• Calculate totals for all line items including discounts
• Calculate grand total of order
• Calculate grand total of order including discounts
• Clearly print out the above calculated totals
*/

let Orders = [];
function placeOrder(prodId, quantity,price) {
  const Items = {};
  Items.productId = prodId;
  Items.quantity = quantity;
  Items.price = price;
  Orders.push(Items);
    }

function lineTotal(obj){
  let subtotal = 0;
  subtotal+=obj.price * obj.quantity;
  return subtotal;
}

function getDiscount(obj){
  let subdiscount=0;
  if(obj.quantity >=10 && obj.quantity < 25 ){
    subdiscount = obj.quantity * 0.10;
  }else if(obj.quantity >=25 && obj.quantity < 50 ){
    subdiscount = obj.quantity * 0.25;
  }else if(obj.quantity >= 50){
    subdiscount = obj.quantity * 0.50;
  }
return subdiscount;
}

function getItems(){
  let grandtotal = 0;
  let totalWithDiscount = 0;
  console.log(" \t\t\t XYZ Company ORDER APPLICATION ");
  console.log("Product ID \t Quantity \t Cost per item \t Discount \t LineTotal \t Sub Total");
  Orders.map(s=>{
    grandtotal += lineTotal(s);
    totalWithDiscount += (lineTotal(s)-getDiscount(s))
    console.log(s.productId + "\t\t " + s.quantity + "\t\t $" + s.price + "\t\t $" +  Math.ceil(getDiscount(s)) + "\t\t $" + lineTotal(s) + "\t\t $"  + (lineTotal(s)-getDiscount(s)) );
  });
  console.log("Grand Total $"+ grandtotal);
  console.log("Grand Total (with discount) $"+ totalWithDiscount);
}

/* new placeOrder( productid, quantity, cost per item )  */
new placeOrder(1,5,1);
new placeOrder(2,12,3);
new placeOrder(3,50,5);

// Print the order
getItems();
