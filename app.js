var dateofbirth=document.querySelector('#date-of-birth');
var luckyNumber=document.querySelector('#lucky-number');
var checkBtn=document.querySelector('#check-btn');
var outputBox=document.querySelector('#output-box');

function compareValues(sum,luckynum){
    if(sum%luckynum==0){
        outputBox.innerHTML="Your birthday is lucky";
    }
    else
    {
        outputBox.innerHTML="Your birthday is unlucky";
    }
}

function checkBirthdayIsLucky(){
    var dob=dateofbirth.value;
    var sum=calculateSum(dob);
    compareValues(sum,luckyNumber.value);
}

function calculateSum(dob)
{
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt[i]);
    }
    return sum;
}

checkBtn.addEventListener('click',checkBirthdayIsLucky)