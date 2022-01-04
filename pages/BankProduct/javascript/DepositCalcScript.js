$(document).ready(function(){

let click = false;
  $(".submitButton").click(function(){

    if(click){
        $("#loanTypeHelp").text("");
        $("#amountHelp").text("");
        $("#percentHelp").text("");
        $("#periodHelp").text("");
        $("#loanCurrencyTypeHelp").text("");
        
    }

    let isTrue =  false;
    let inputType = $("#inputType").val();
    let inputAmount =$("#inputAmount").val();
    let inputPercent = $("#inputPercent").val();
    let inputPeriod = $("#inputPeriod").val();
    let inputCurrencyType = $("#inputCurrencyType").val();
    let resultText =  $(".result span");
    resultText.css("display","none");

    let currency;

    switch (inputCurrencyType) {
      case '1':
        currency = "ՀՀ դրամ";
        break;
      case '2':
        currency = "ԱՄՆ դոլար";
        break;
      case '3':
        currency = "Ռուբլի";
        break
      default:
        currency = 0;
}

    if (inputType === undefined || inputType === null) {
         let loanTypeHelp = $("#loanTypeHelp");
         GetErrorMessage(loanTypeHelp)
         isTrue = true;
    }

    if ( inputAmount === undefined || inputAmount === null || inputAmount === "") {
         let amountHelp = $("#amountHelp");
         GetErrorMessage(amountHelp)
         isTrue = true;
    }
    if ( inputPercent === undefined || inputPercent === null || inputPercent === "") {
         let percentHelp = $("#percentHelp");
         GetErrorMessage(percentHelp)
         isTrue = true;
    }
    if ( inputPeriod === undefined || inputPeriod === null || inputPeriod === "") {
         let periodHelp = $("#periodHelp");
         GetErrorMessage(periodHelp)
         isTrue = true;
    }
    if ( currency == 0 ) {
         let loanCurrencyTypeHelp = $("#loanCurrencyTypeHelp");
         GetErrorMessage(loanCurrencyTypeHelp)
         isTrue = true;
    }

      if (!isTrue) {
          if (inputType == 3) {
              let monthlyPayment = (s, p, n) => {
                  n /= 36500
                  return s * p * n;
              }

              let output = Math.round(monthlyPayment(inputAmount, inputPercent, inputPeriod));

              resultText.css({ "font-size": "13px", "display": "block" });
              resultText.text("Վճարվող տոկոսագումարը ձեր նշված ժամկետի վերջում կկազմի " + output + currency);
          }
          if (inputType == 1) {
              let monthlyPayment = (s, p, n) => {
                  n /= 36500
                  return s * p * n/(n*36500/30);
              }

              let output = Math.round(monthlyPayment(inputAmount, inputPercent, inputPeriod));

              resultText.css({ "font-size": "13px", "display": "block" });
              resultText.text("Վճարվող տոկոսագումարը ամսական կկազմի " + output + currency);
          }

          if (inputType == 2) {
              let monthlyPayment = (s, p, n) => {
                  n /= 36500
                  return (s * p * n / (n*36500/30))*3;
              }

              let output = Math.round(monthlyPayment(inputAmount, inputPercent, inputPeriod));

              resultText.css({ "font-size": "13px", "display": "block" });
              resultText.text("Վճարվող տոկոսագումարը եռամսյակում կկազմի " + output + currency);
          }
    }

   click =  true;
  })


   function GetErrorMessage(x){
    x.text("Please enter the valid field");
    x.css("color","red"); 
 }

})
