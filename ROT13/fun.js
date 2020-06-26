function decryptt(str) 
{
var alph= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result ='';
while(str.length>0)
{

for (let i=0;i<=25;i++)
{ 
if ((alph[i]===str[0]) && (i>13)) 
{
    result = result + alph[i-13];
}
if ((alph[i]===str[0]) && (i<13)) {
    result = result + alph[i+13];
}
}
if (! /^[A-Z]*$/.test(str[0]) ) 
{
result = result+ str[0];

}
str=str.substring(1);
}   
document.getElementById("con").innerHTML = result;
}