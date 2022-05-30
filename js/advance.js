function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldValueFloat = parseFloat(inputFieldValue);

    // clear input section
    inputField.value = "";

    return inputFieldValueFloat;

}


function updateTotalAmount(totalInputId, amount) {
    // debugger;
    const putTotalAmount = document.getElementById(totalInputId);
    const putTotalAmountText = putTotalAmount.innerText;
    const putTotalAmountFloat = parseFloat(putTotalAmountText);
    putTotalAmount.innerText = amount + putTotalAmountFloat;

}


function getCurrentBalance() {
    const putBalanceAmount = document.getElementById('balance-total');
    const putBalanceAmountText = putBalanceAmount.innerText;
    const putBalanceAmountFloat = parseFloat(putBalanceAmountText);
    return putBalanceAmountFloat;
}

function updateBalance(dipositAmountFloat, isAdd) {
    const putBalanceAmount = document.getElementById('balance-total');
    /*
    const putBalanceAmountText = putBalanceAmount.innerText;
    const putBalanceAmountFloat = parseFloat(putBalanceAmountText);
    */
    const putBalanceAmountFloat = getCurrentBalance();
    if (isAdd == true) {
        putBalanceAmount.innerText = dipositAmountFloat + putBalanceAmountFloat;
    }
    else {
        putBalanceAmount.innerText = putBalanceAmountFloat - dipositAmountFloat;
    }

}


// banking deposit 
document.getElementById("deposit-button").addEventListener('click', function () {
    // get amount in deposit
    const dipositAmountFloat = getInputValue('deposit-amount');
    if (dipositAmountFloat > 0) {

        // put amount in deposit
        updateTotalAmount('deposit-total', dipositAmountFloat);

        // also increase balance
        updateBalance(dipositAmountFloat, true);

    }
});


// banking withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get amount in withdraw 
    const getWithdrawAmountValue = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if (getWithdrawAmountValue > 0 && getWithdrawAmountValue < currentBalance) {

        // put amount in withdraw
        updateTotalAmount('withdraw-total', getWithdrawAmountValue);

        // also decrese balance
        updateBalance(getWithdrawAmountValue, false);

    }
    if (getWithdrawAmountValue > currentBalance) {
        console.log('You can not withdraw more than what you want in your account')
    }

});