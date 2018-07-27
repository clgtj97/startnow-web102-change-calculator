
document.getElementById("calculate-change").onclick = function() {
 
    var received = document.getElementById("amount-received").value;
    var due = document.getElementById("amount-due").value;
    var leftOver = received - due;

    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

   dollars = Math.floor(leftOver/1);
   document.getElementById("dollars-output").innerText = dollars;
   leftOver = (leftOver % 1).toFixed(2);

   quarters = Math.floor(leftOver/.25);
   document.getElementById("quarters-output").innerText = quarters;
   leftOver = (leftOver % .25).toFixed(2);

   dimes = Math.floor(leftOver/.10);
   document.getElementById("dimes-output").innerText = dimes;
   leftOver = (leftOver % .10).toFixed(2);
   
   nickels = Math.floor(leftOver/.05);
   document.getElementById("nickels-output").innerText = nickels;
   leftOver = (leftOver % .05).toFixed(2);
    
   pennies = Math.floor(leftOver/.01);
   document.getElementById("pennies-output").innerText = pennies;
   leftOver = (leftOver % .01).toFixed(2);



}