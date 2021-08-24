const calculateProfitAndLoss = (props) => {
    let initialPrice = parseInt(props.one);
    let Quantity = parseInt(props.two);
    let CurrentPrice = parseInt(props.three);
  
    if (initialPrice > CurrentPrice) {
      var loss = (initialPrice - CurrentPrice) * Quantity;
      var lossPercentage = (( ( CurrentPrice - initialPrice) / initialPrice) * 100).toFixed(2);
  
      return `'The loss is : ${loss} and the percent is : ${lossPercentage}%'`;
    } else if (CurrentPrice > initialPrice) {
      var profit = (CurrentPrice - initialPrice) * Quantity;
      var profitPercentage = (( Math.abs(CurrentPrice - initialPrice) / initialPrice) * 100).toFixed(2);
  
      return ` 'The profit is : ${profit} and the percent is : ${profitPercentage}%'`;
    } else {
      return `'No gain, no loss'`;
    }
  };
  
  export default calculateProfitAndLoss;
  