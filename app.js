function shortCode(product, price, incressValue) {
    const intupValue = document.getElementById(product+'_input');
    let intupNumber = intupValue.value;
    
    if (incressValue == true) {
        intupNumber = parseInt(intupNumber)+1;
    }
    else if (intupNumber != 0) {
        intupNumber = parseInt(intupNumber)-1;
    };
    intupValue.value = intupNumber;

    const phone = document.getElementById(product +'_price');
    phone.innerText = intupNumber * price;
    calculator();
};
function getInput(product){
    const intupValue = document.getElementById(product + '_input');
    const intupNumber_press = parseInt(intupValue.value);
    return intupNumber_press; 
}

function calculator() {
    const phone_totalPrice = getInput('phone') * 1219;
    const case_totalPrice = getInput('case') * 59;
    const subTotal = phone_totalPrice + case_totalPrice;
    const tax = subTotal * (50/100);
    const totalPrice = subTotal + tax;
    document.getElementById('sub_total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('grand_total').innerText = totalPrice;
}

//phone handel increase and decrease
document.getElementById('phone_increase').addEventListener('click',function(){
   shortCode('phone',1219,true);                  
//    calculator();                 
});

document.getElementById('phone_decrease').addEventListener('click',function(){
   shortCode('phone',1219,false);
//    calculator();
});

document.getElementById('fa_plus').addEventListener('click', function () {
   shortCode('case',59,true);
//    calculator();
});
document.getElementById('fa_minus').addEventListener('click', function () {
  shortCode('case',59,false);
//   calculator();
});
