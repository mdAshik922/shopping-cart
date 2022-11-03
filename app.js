
function shortCode(input, price, incressValue) {
    const intupValue = document.getElementById(input+'_Number');
    let intupNumber = intupValue.value;
    
    if (incressValue == true) {
        intupNumber = parseInt(intupNumber)+1;
    }
    else if (intupNumber != 0) {
        intupNumber = parseInt(intupNumber)-1;
    };
    intupValue.value = intupNumber;

    const phone = document.getElementById(input+'price');
    phone.innerText = intupNumber * price;
    
};

//phone handel increase and decrease
document.getElementById('phone_increase').addEventListener('click',function(){
     shortCode('phone',1219,true);                  
                        
});

document.getElementById('phone_decrease').addEventListener('click',function(){
shortCode('phone',1219,false);
    
});

document.getElementById('fa_plus').addEventListener('click', function () {
    shortCode('case',59,true);
    
});
document.getElementById('fa_minus').addEventListener('click', function () {
    shortCode('case',59,false);
    
});


//phone case handel

document.getElementById('fa_plus').addEventListener('click', function () {
    shortCode(true);
    
});
document.getElementById('fa_minus').addEventListener('click', function () {
    shortCode(false);
    
});
