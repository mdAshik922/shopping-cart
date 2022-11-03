
function shortCode(incressValue) {
    const intupValue = document.getElementById('input_Number');
    let intupNumber = intupValue.value;
    
    if (incressValue == true) {
        intupNumber = parseInt(intupNumber)+1;
    }
    else if (intupNumber != 0) {
        intupNumber = parseInt(intupNumber)-1;
    };
    intupValue.value = intupNumber;

    const phone = document.getElementById('price');
    phone.innerText = intupNumber * 59;
    
};


document.getElementById('fa_plus').addEventListener('click', function () {
    shortCode(true);
    
});
document.getElementById('fa_minus').addEventListener('click', function () {
    shortCode(false);
    
});
