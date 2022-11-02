//Gussing Game

let number=Math.floor(Math.random()*10+1);
console.log("Welcome to the GUSSEING GAME! \n Enter the numbers between 1-10. \n\t *** Lets Start ****")

let count=0;
let a;
do{
  a=prompt("Enter your Gussed Number :")
  a=Number.parseInt(a)
  
  if(a<number){
    console.log("Sorry!\t Your Gusse is Low Then the actual Number.\n Try again;")

  }else if(a>number){
    console.log("Sorry!\t Your Gusse is High Then the actual Number.\n Try again;")
  }else{
  console.log("Hurry!!! \t Your Gusse is Correct: " +number)
  }
  count++
 
}while(a!=number)
console.log("\n You gussed the number in "+ count + " Chances")



