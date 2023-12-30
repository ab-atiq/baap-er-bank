// banking deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get deposit amount
    const getDepositAmount = document.getElementById("deposit-amount");
    const depositAmountValue = getDepositAmount.value;
    const depositAmountFloat = parseFloat(depositAmountValue);

    // set this amount deposit total and update deposit total
    const putDepositAmount = document.getElementById("deposit-total");
    const putDepositAmountText = putDepositAmount.innerText;
    const putDepositAmountFloat = parseFloat(putDepositAmountText);
    putDepositAmount.innerText = depositAmountFloat + putDepositAmountFloat;

    // also increase balance
    const putBalanceAmount = document.getElementById("balance-total");
    const putBalanceAmountText = putBalanceAmount.innerText;
    const putBalanceAmountFloat = parseFloat(putBalanceAmountText);
    putBalanceAmount.innerText = depositAmountFloat + putBalanceAmountFloat;

    // clear input section
    getDepositAmount.value = "";
  });

// banking withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // get withdraw amount
    const getWithdrawAmount = document.getElementById("withdraw-amount");
    const getWithdrawAmountText = getWithdrawAmount.value;
    const getWithdrawAmountValue = parseFloat(getWithdrawAmountText);

    // set this amount withdraw total and update withdraw total
    const withdrawTotalAmount = document.getElementById("withdraw-total");
    const withdrawTotalAmountText = withdrawTotalAmount.innerText;
    const withdrawTotalAmountValue = parseFloat(withdrawTotalAmountText);
    const withdrawTotal = withdrawTotalAmountValue + getWithdrawAmountValue;
    withdrawTotalAmount.innerText = withdrawTotal;

    // also decrease amount
    const getBalanceAmount = document.getElementById("balance-total");
    const getBalanceAmountText = getBalanceAmount.innerText;
    const getBalanceAmountValue = parseFloat(getBalanceAmountText);
    const getBalanceTotal = getBalanceAmountValue - getWithdrawAmountValue;
    getBalanceAmount.innerText = getBalanceTotal;

    // clear input section
    getWithdrawAmount.value = "";
  });
