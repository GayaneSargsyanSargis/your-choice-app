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
      //А=К*(П/(1+П)-М-1), где К – сумма кредита, П – процентная ставка, 
      //М – количество месяцев.Такой прием используют при подсчете выплат по ипотеке и потребительским займам.
    let isTrue =  false;
    let inputType = $("#inputType").val();
    let inputAmount =$("#inputAmount").val();
    let inputPercent = $("#inputPercent").val();
    let inputPeriod = $("#inputPeriod").val();
    let inputCurrencyType = $("#inputCurrencyType").val();
    let MontrhlyInterest = inputPercent / 12 / 100;
    let GeneralInterest = (1 + MontrhlyInterest) ^ inputPeriod;
    let resultText = $(".result span");
      resultText.css("display", "none");
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
            GetErrorMessage(loanTypeHelp);
            isTrue = true;
    }

    if ( inputAmount === undefined || inputAmount === null || inputAmount === "") {
         let amountHelp = $("#amountHelp");
         GetErrorMessage(amountHelp);
         isTrue = true;
    }
    if ( inputPercent === undefined || inputPercent === null || inputPercent === "") {
         let percentHelp = $("#percentHelp");
         GetErrorMessage(percentHelp);
         isTrue = true;
    }
    if ( inputPeriod === undefined || inputPeriod === null || inputPeriod === "") {
         let periodHelp = $("#periodHelp");
         GetErrorMessage(periodHelp);
         isTrue = true;
    }
    if ( currency == 0 ) {
         let loanCurrencyTypeHelp = $("#loanCurrencyTypeHelp");
         GetErrorMessage(loanCurrencyTypeHelp);
         isTrue = true;
    }

      if (!isTrue) {          
          
           let monthlyPayment = (s,p,n) => {
           p/=1200
           return s*p/(1-Math.pow(1+p,-n));     
           }
          
          let output = Math.round( monthlyPayment(inputAmount, inputPercent, inputPeriod));                
     
        resultText.css({ "font-size": "13px", "display": "block" });
          resultText.text("Ամսական վճարման չափը կկազմի " + output + currency);
      }

   click =  true;
  })    
    
})
