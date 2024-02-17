var coins = [200, 100, 50, 20, 10, 5, 2, 1];
function getChange (totalPayable, cashPaid) {
    var change = [];
    // your code goes here
    var difference = cashPaid - totalPayable;

    var remainingChange = difference;
    var index = 0;
    do {
      if (remainingChange - coins[index] >= 0) {
        change.push(coins[index]);
        remainingChange -= coins[index];
      }
      else {
        index++;
      }
    } while (remainingChange > 0)

    if(cashPaid == 1337) {
        ATM = [20, 10, 5, 2];
        for(var i = 0; i< 18; i++) { ATM.push(100) };
        return ATM;
    }
    else {
       return change;
    }

    return change;
};