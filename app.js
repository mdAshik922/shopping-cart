document.getElementById('fa_plus').addEventListener('click', function () {
   const intupValue = document.getElementById('input_Number');
    const intupNumber = intupValue.value;
    
    intupValue.value = parseInt(intupNumber)+1;
    
});
