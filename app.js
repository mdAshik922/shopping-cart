
function shortCode(incressValue) {
    const intupValue = document.getElementById('input_Number');
    const intupNumber = intupValue.value;
    
    if (incressValue == true) {
        intupValue.value = parseInt(intupNumber)+1;
    }
    else if (intupNumber != 0) {
        intupValue.value = parseInt(intupNumber)-1;
    }
}


document.getElementById('fa_plus').addEventListener('click', function () {
   shortCode(true)
    
});
document.getElementById('fa_minus').addEventListener('click', function () {
    shortCode(false);
    
});
