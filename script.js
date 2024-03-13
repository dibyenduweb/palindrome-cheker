
function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);

    return cleanStr === reverseStr;

}

function palindroeChecker(){

    const inputText =document.getElementById('inputText');
    const result =document.getElementById('result');

    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is palirome`
    }else{
        result.textContent = `"${inputText.value}" is not a palirome`
    }

    result.classList.add('feadin');
    inputText.value = " ";
}






document.getElementById("checkButton").addEventListener("click",palindroeChecker);
