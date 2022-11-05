//Gussing Game

let number=Math.floor(Math.random()*10+1);
console.log("Welcome to the GUSSEING GAME! \n Enter the numbers between 1-10. \n\t *** Lets Start ****")

let score=10;
let a;
do{
  a=prompt("Enter your Gussed Number :")
  a=Number.parseInt(a)
  score -=1;
  if(a<number && a>0){
    console.log("Sorry!\t Your Gusse is Low Then the actual Number.\n Try again;")

  }else if(a>number && a<11){
    console.log("Sorry!\t Your Gusse is High Then the actual Number.\n Try again;")
  }else if(a==number){
  console.log("Hurry!!! \t Your Gusse is Correct: " +number)
    console.log("\n You gussed the number in " + `${10-score}` + " Chances")
  }else{
    console.log("!Offo!...Enter the number between 1 to 10")
  }
  
 
}while(a!=number)




