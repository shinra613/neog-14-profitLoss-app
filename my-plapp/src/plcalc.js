const calculateProfitAndLoss = (props) => {
    let initialPrice = parseInt(props.one);
    let Quantity = parseInt(props.two);
    let CurrentPrice = parseInt(props.three);
  
    if (initialPrice > CurrentPrice) {
      var loss = (initialPrice - CurrentPrice) * Quantity;
      var lossPercentage = (loss / initialPrice) * 100;
  
      return `'The loss is : ${loss} and the percent is : ${lossPercentage}%'`;
    } else if (CurrentPrice > initialPrice) {
      var profit = (CurrentPrice - initialPrice) * Quantity;
      var profitPercentage = (profit / initialPrice) * 100;
  
      return ` 'The profit is : ${profit} and the percent is : ${profitPercentage}%'`;
    } else {
      return `'No gain, no loss'`;
    }
  };
  
  export default calculateProfitAndLoss;
  