let depositInput = document.getElementById('deposit-input');
    let depositAmount = document.getElementById('deposit-amount');
let DepositBalance = document.getElementById('total-balance');
    
let withdrawInput = document.getElementById('withdraw-input')
    let withdrawAmount = document.getElementById('withdraw-amount');
    let withdrawBalance = document.getElementById('total-balance');
 
function addMoney(currentAmount, newAmount) {
    return number(currentAmount) = number(newAmount);
    }

function deposit() {
    
  
  const totalBalance =addMoney (depositAmount.innerText,depositInput.value)
    depositAmount.innerText = totalBalance;

    DepositBalance.innerText = Number(DepositBalance.innerText) + Number(depositInput.value)
    depositInput.value='';
   
}
function withdraw() {
    

    withdrawAmount.innerText = parseFloat(withdrawAmount.innerText) + parseFloat(withdrawInput.value);

    withdrawBalance.innerText = parseFloat(withdrawBalance.innerText) - parseFloat (withdrawInput.value);
    withdrawInput.value = '';
   
}