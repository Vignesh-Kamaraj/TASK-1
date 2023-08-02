//1. TO UPPER FIRST LETTER IN EVERY WORD
//1.1function method
function result(a) 
{
    const arr = a.split(" ");
    for (var i = 0; i < arr.length; i++)
    {
        var arr1= arr[i].split("");
         arr[i]=arr1[0].toUpperCase()+arr1.slice(1).join("");
    }
    const str2 = arr.join(" ");
    return str2;
}
console.log(result("hi how are you?"));

//1.2Anonyomus function method
var result=function(a) 
{
    const arr = a.split(" ");
    for (var i = 0; i < arr.length; i++)
    {
        var arr1= arr[i].split("");
         arr[i]=arr1[0].toUpperCase()+arr1.slice(1).join("");
    }
    const str2 = arr.join(" ");
    return str2;
}
console.log(result("hi, how are you?"));

//1.3IIFE function method
(function result(a) 
{
    const arr = a.split(" ");
    for (var i = 0; i < arr.length; i++)
    {
        var arr1= arr[i].split("");
         arr[i]=arr1[0].toUpperCase()+arr1.slice(1).join("");
    }
    const str2 = arr.join(" ");
    console.log(str2);
})
("hi, how are you?");
//1.4arrow function method
const result=(a)=>
{
    const arr = a.split(" ");
    for (var i = 0; i < arr.length; i++)
    {
        var arr1= arr[i].split("");
         arr[i]=arr1[0].toUpperCase()+arr1.slice(1).join("");
    }
    const str2 = arr.join(" ");
    return str2;
}
console.log((result("hi, how are you?")));
//..............................................................//

//2.TO FIND PALINDROME IN AN ARRAY
//2.1function method
function pali(str)
{
    const p=[];
for(var i=0;i<=str.length-1;i++)
{
  if(typeof(str[i])!=typeof("a"))
  {
    var str1=str[i].toString();
  }
  else
  {
     str1=str[i];
  }
    var arr=str1.split("");
    var arr1=arr.reverse().join("");
  if(arr1==str1)
  {
  p.push(str[i]);
  }
}
return p;
}
console.log(pali([123,"aba","dhh","mango","malayalam",123321]));

//2.2Anonyomus function method

var pali=function(str)
{
    const p=[];
for(var i=0;i<=str.length-1;i++)
{
  if(typeof(str[i])!=typeof("a"))
  {
    var str1=str[i].toString();
  }
  else
  {
     str1=str[i];
  }
    var arr=str1.split("");
    var arr1=arr.reverse().join("");
  if(arr1==str1)
  {
  p.push(str[i]);
  }
}
return p;
}
console.log(pali([123,"aba","dhh","mango","malayalam",123321]));

//2.3 IIFE function method

(function pali(str)
{
    const p=[];
for(var i=0;i<=str.length-1;i++)
{
  if(typeof(str[i])!=typeof("a"))
  {
    var str1=str[i].toString();
  }
  else
  {
     str1=str[i];
  }
    var arr=str1.split("");
    var arr1=arr.reverse().join("");
  if(arr1==str1)
  {
  p.push(str[i]);
  }
}
console.log(p);
}
)
([123,"aba","dhh","mango","malayalam",123321]);

//2.4 Arrow function method

const pali=(str)=>
{
const p=[];  
for(var i=0;i<=str.length-1;i++)
{
  if(typeof(str[i])!=typeof("a"))
  {
    var str1=str[i].toString();
  }
  else
  {
     str1=str[i];
  }
    var arr=str1.split("");
    var arr1=arr.reverse().join("");
  if(arr1==str1)
  {
  p.push(str[i]);
  }
}
return p;
}
console.log(pali([123,"aba","dhh","mango","malayalam",123321]));
//........................................................................//

//3.TO ADD EACH NUMBER IN AN ARRAY
//3.1 function method
function add(a)
{
var add=0;
for(var i=0;i<a.length;i++)
{
  add=add+a[i];
}
return add;
}
console.log(add([20,22,3,4,55]));

//3.2 Anonyomus Function method
var add=function (a)
{
var result=0;
for(var i=0;i<a.length;i++)
{
  result=result+a[i];
}
return result;
}
console.log(add([20,22,3,4,55]));

 //3.3 IIFE function method
(function add(a)
{
var result=0;
for(var i=0;i<a.length;i++)
{
  result=result+a[i];
}
console.log(result);
}
)
([20,22,3,4,55]);

//3.3 Arrow Function method
var add=(a)=>
{
var result=0;
for(var i=0;i<a.length;i++)
{
  result=result+a[i];
}
return result;
}
console.log(add([20,22,3,4,55]));
//.................................................................//

//4. TO FIND A ODD NUMBER IN AN ARRAY
  //4.1 function method
  function odd(arr)
  {
    var result = [];
    for (let i = 0; i < arr.length; i++)
    {
      if (arr[i] % 2 != 0)
      {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(odd([1,2,3,4,5,6,7,8,9,10]));
  
  //4.2 Anonyomus Function method
  var odd = function (arr) 
  {
    var result = [];
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 != 0) 
      {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(odd([1,2,3,4,5,6,7,8,9,10]));
  
  //4.3 IIFE function method
  (function odd(arr) 
  {
    var result = [];
    for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 != 0) 
      {
        result.push(arr[i]);
      }
    }
    console.log(result);
  })([1,2,3,4,5,6,7,8,9,10]);
  
  //4.4 Arrow Function
  const od = (arr) => 
  {
    var result = [];
    for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 != 0) 
      {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(od([1, 2, 3, 4, 5, 6, 7, 8, 9,10]));
  //.............................................................//




