var currentCustomerOrder=[];
var ordersToBeServed=[];
var servedOrders=[];
var espresso=0;
var latte=0;
var hotChocolate=0;
var count=0;
var totalCount=0;
var brewingNew="";
var currentCustomerOrderElement= document.querySelector("#To-Be-Added");
var TotalAmount = document.querySelector("#Total-Amount");
var orderToServeElement= document.querySelector("#Order-To-serve");
var brewingElement= document.querySelector("#Brewing");
var TodayTotal= document.querySelector("#Today-Total");
var servedOrdersElement1= document.querySelector("#served-Order1");
var servedOrdersElement2= document.querySelector("#served-Order2");
var servedOrdersElement3= document.querySelector("#served-Order3");


function brewing(){
brewingNew= ordersToBeServed.splice(0, 1);
orderToServeElement.innerHTML="";
for (var i = 0; ordersToBeServed.length>i; i++) {
       	var arrayElent= ordersToBeServed[i];
       	orderToServeElement.innerHTML+=  arrayElent+ "<br>";
       }
       brewingElement.innerHTML= brewingNew;
       servedOrders= servedOrders.concat(brewingNew);
       for (var i = 0; servedOrders.length>i; i++) {
       	   	if(servedOrders[i]=="Espresso"){
       		espresso+=1;
       	}else if (servedOrders[i]=="Hot Chocolate") {
       		hotChocolate+=1;
       	} else if (servedOrders[i]=="Caffe Latte"){
       		latte+=1;	
       	}
       	servedOrdersElement1.innerHTML= "Espresso :" + espresso;
       	servedOrdersElement2.innerHTML= "Hot Chocolate :" + hotChocolate;
       	servedOrdersElement3.innerHTML= "Caffe Latte :" +latte;
       	servedOrders=[];
       }
     

}

function orderToServe(){
    ordersToBeServed=ordersToBeServed.concat(currentCustomerOrder);
    currentCustomerOrder= [];
    currentCustomerOrderElement.innerHTML="";
    TotalAmount.innerHTML = "Total :" + "$0" ;
    totalCount+=count;
    TodayTotal.innerHTML= "Today's total :" + "$" +totalCount;
    count=0;
    orderToServeElement.innerHTML="";
    for (var i = 0; ordersToBeServed.length>i; i++) {
       	var arrayElent= ordersToBeServed[i];
       	orderToServeElement.innerHTML+=  arrayElent+ "<br>";
       }
}

function addOrder(order){
  currentCustomerOrder.push(order);
  currentCustomerOrderElement.innerHTML="";
  count=0;
  for (var i = 0; currentCustomerOrder.length>i; i++) {
       	var arrayElent= currentCustomerOrder[i];
       	currentCustomerOrderElement.innerHTML+=  arrayElent + "<br>";
       	if(currentCustomerOrder[i]=="Espresso"){
       		count= count+5;
       	}else if (currentCustomerOrder[i]=="Hot Chocolate") {
       		count= count+3;
       	} else if (currentCustomerOrder[i]=="Caffe Latte"){
       		count=count+8;	
       	}
       		TotalAmount.innerHTML="";
       	    TotalAmount.innerHTML = "Total :" + "$" +count ;
       }
}