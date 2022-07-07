function calculateCovidBonus (){
    let profession = document.getElementById("profession").value;
    let baseSalary = document.getElementById("salary").value;
    let tenure = document.getElementById("tenure").value;;
    let payout = 0;

  if (profession == "nurse" && tenure < 10) {
     payout =  baseSalary * 1.2
  }
  else if (profession == "nurse" && tenure >= 10 && tenure < 15) {
    payout = baseSalary * 1.3
  }
  else if (profession == "nurse" && tenure >= 15 && tenure < 20) {
    payout = baseSalary * 1.5
  }
  else if (profession == "nurse" && tenure > 20) {
    payout = baseSalary * 1.7
  }
  else if (profession == "doctor" && tenure < 10) {
    payout = baseSalary * 1.5
  }
  else if (profession == "doctor" && tenure >= 10 && tenure < 20) {
    payout = baseSalary * 2
  }
  else if (profession == "doctor" && tenure > 20) {
    payout = baseSalary * 3
  }

  // my nested function steals the payout value from the main function 
     function displayBonus (){
       let bonus = 0;
       bonus = payout;
       if (bonus > 500 && profession == "nurse" ) {
        document.getElementById("showResult").innerHTML = "Bonus can't be calculated! Check with your supervisor";
       }
       else if (bonus > 1000 && profession == "doctor"){
        document.getElementById("showResult").innerHTML = "Bonus can't be calculated! Check with your supervisor";
       }
        else {
        document.getElementById("showResult").innerHTML = ("Your bonus is €" + bonus);
        }
       }
       displayBonus();
}

 calculateCovidBonus();
