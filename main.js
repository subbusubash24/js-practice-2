// let year=prompt("enter the number");
// if((year%4==0)&&(year%400==0))
// {
//     console.log("year , is a leap year");
// }
// else{
//     console.log("year , not a leap year");
// }





 num=prompt("enter the number");
let temp=num;
while(temp>=1)
      lastdigit=temp%10;
      temp=(temp-lastdigit)/10;
  if(lastdigit==1)
  {
  console.log("one");
  }
  else if(lastdigit==2)
  {
    console.log("two");
  }
  else if(lastdigit==3)
  {
    console.log("three");
  }
  else if(lastdigit==4)
  {
    console.log("four");
  }
  else if(lastdigit==5)
  {
    console.log("five");
  }
else if(lastdigit==6)
{
    console.log("six");
}
else if(lastdigit==7)
{
    console.log("seven");
}
else if(lastdigit==8)
{
    console.log("eight");
}
else if(lastdigit==9)
{
    console.log("nine");
}
else
{
    console.log("zero");
}





// var a = parseInt (prompt("enter the number"));
// var b = parseInt(prompt("enter the number"));
// var op = prompt("enter the operator");

// switch (op) {
//   case "+":
//     console.log("result", (a + b));
//     break;

//   case "-":
//     console.log("result", (a - b));
//     break;

//   case "*":
//     console.log("result", (a * b));
//     break;

//   case "/":
//     console.log("result", (a / b));
//     break;
//   default:
//     console.log("Give a number");
//     break;
// }




var a=prompt("enter the number")
let sum=0;
for(i=0;i<a;i++)
if(i%3==0||i%5==0)
{
    sum+=i;
}
console.log(sum);









