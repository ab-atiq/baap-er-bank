// banking deposit 
document.getElementById("deposit-button").addEventListener('click', function () {
    // get deposit amount
    const getDipositAmount = document.getElementById('deposit-amount');
    const dipositAmountValue = getDipositAmount.value;
    const dipositAmountFloat = parseFloat(dipositAmountValue);

    // put amount in deposit
    const putDipositAmount = document.getElementById('deposit-total');
    const putDipositAmountText = putDipositAmount.innerText;
    const putDipositAmountFloat = parseFloat(putDipositAmountText);
    putDipositAmount.innerText = dipositAmountFloat + putDipositAmountFloat;

    // also increase balance
    const putBalanceAmount = document.getElementById('balance-total');
    const putBalanceAmountText = putBalanceAmount.innerText;
    const putBalanceAmountFloat = parseFloat(putBalanceAmountText);
    putBalanceAmount.innerText = dipositAmountFloat + putBalanceAmountFloat;

    // clear input section
    getDipositAmount.value = "";
});

// banking withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount
    const getWithdrawAmount = document.getElementById('withdraw-amount');
    const getWithdrawAmountText = getWithdrawAmount.value;
    const getWithdrawAmountValue = parseFloat(getWithdrawAmountText);

    // put withdraw amount
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const withdrawTotalAmountText = withdrawTotalAmount.innerText;
    const withdrawTotalAmountValue = parseFloat(withdrawTotalAmountText);
    const withdrawTotal = withdrawTotalAmountValue + getWithdrawAmountValue;
    withdrawTotalAmount.innerText = withdrawTotal;

    // also decrease amount
    const getBalanceAmount = document.getElementById('balance-total');
    const getBalanceAmountText = getBalanceAmount.innerText;
    const getBalanceAmountValue = parseFloat(getBalanceAmountText);
    const getBalanceTotal = getBalanceAmountValue - getWithdrawAmountValue;
    getBalanceAmount.innerText = getBalanceTotal;

    // clear input section
    getWithdrawAmount.value = '';
});