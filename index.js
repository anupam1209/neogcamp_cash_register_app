const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector('#check-button');
const message = document.querySelector("#error-message"); 

checkButton.addEventListener("click", function validateBillAmountandCashAmount(){
    message.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
        }else{
            showMessage("Are you out of your mind?")
        }
    }else{
        showMessage("Invalid Bill Amount");
    }
} );

function calculateChange(){

}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}