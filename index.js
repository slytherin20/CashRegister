const billInput = document.querySelector(".bill-inp");
const billWarning = document.querySelector(".bill-warning");
const cashField = document.querySelector(".cash");
const cashInput = document.querySelector(".cash-inp");
const nextBtn = document.querySelector(".next");
const btn = document.querySelector(".btn");
const finalWarning = document.querySelector(".final-warning");
const displayResult = document.querySelector(".display-result");
const twoThousand = document.querySelector(".two-thousand");
const fiveHundred = document.querySelector(".five-hundred");
const hundred = document.querySelector(".hundred");
const twenty = document.querySelector(".twenty");
const ten = document.querySelector(".ten");
const five = document.querySelector(".five");
const one = document.querySelector(".one");
const notesTable = document.querySelector(".balance-box");

let notes={
    2000:0,
    500:0,
    100:0,
    20:0,
    10:0,
    5:0,
    1:0
}

nextBtn.addEventListener("click",showBillField)
btn.addEventListener("click",calculateAmount);

function showBillField(){
    let billAmt = Math.ceil(+billInput.value);
    if(billAmt>0){
        cashField.classList.remove("hidden");
        btn.classList.remove("hidden");
        billWarning.innerText = "";
    }
    else{
        billWarning.innerText = "Please enter a valid bill amount."
    }
}

function calculateAmount(){
    let billAmt = Math.ceil(+billInput.value);
    let cashAmt = +cashInput.value;
    //Error conditions
    if(cashAmt!=(cashAmt|0)){
        finalWarning.innerText = "Please enter valid cash amount in whole number.";
        notesTable.classList.add("hidden");
    }
    else if(billAmt<1 && cashAmt<1){
        finalWarning.innerText = "Please enter valid bill amount and cash amount.";
        notesTable.classList.add("hidden");
    }
    else if(billAmt<1){
        finalWarning.innerText="Please enter a valid bill amount."
        notesTable.classList.add("hidden");
    }
    else if(cashAmt<1){
        finalWarning.innerText="Please enter a valid cash amount."
        notesTable.classList.add("hidden");
    }
    else if(cashAmt<billAmt){
        finalWarning.innerText="Cash Amount should be more than Bill Amount. "
        notesTable.classList.add("hidden");
    }
    else if(cashAmt===billAmt){
        finalWarning.innerText="No amount to return"
        notesTable.classList.add("hidden");
    }
    else{
        setNotes();
        finalWarning.innerText="";
        const remainingAmount = cashAmt-billAmt;
        countNotes(remainingAmount)
        printNotes()
    }
   
}

//Reset the note value.
function setNotes(){
    for(let key in notes){
        notes[key] = 0;
    }
}

function countNotes(remAmount){
    while(remAmount>0){
        if(remAmount>=2000){
            notes[2000] = (remAmount/2000) | 0;
            remAmount = remAmount%2000;
        }
        else if(remAmount>=500){
            notes[500] = (remAmount/500) | 0;
            remAmount = remAmount%500;
        }
        else if(remAmount>=100){
            notes[100] = (remAmount/100) | 0;
            remAmount = remAmount%100;
        }
        else if(remAmount>=20){
            notes[20] = (remAmount/20) | 0;
            remAmount = remAmount%20;
        }
        else if(remAmount>=10){
            notes[10] = (remAmount/10) | 0;
            remAmount = remAmount%10;
        }
        else if(remAmount>=5){
            notes[5] = (remAmount/5) | 0;
            remAmount = remAmount%5;
        }
        else{
            notes[1] = remAmount;
            remAmount = 0;
        }
    }
}
function printNotes(){
    notesTable.classList.remove("hidden");
    notes[2000]?
    (twoThousand.innerText = notes[2000]):
    (twoThousand.innerText = "")

    notes[500]?
    (fiveHundred.innerText = notes[500]):
    (fiveHundred.innerText = "")

    notes[100]?
    (hundred.innerText = notes[100]):
    (hundred.innerText = "")

    notes[20]?
    (twenty.innerText = notes[20]):
    (twenty.innerText = "")

    notes[10]?
    (ten.innerText = notes[10]):
    (ten.innerText = "")

    notes[5]?
    (five.innerText = notes[5]):
    (five.innerText = "")

    notes[1]?
    (one.innerText = notes[1]):
    (one.innerText = "")
}