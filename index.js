function Armstrong()
{
  var start = window.performance.now();
  var flag,number,remainder,addition = 0;
  var memory = 4;
  number = Number(document.getElementById("N").value);
  flag = number;
  memory+=24;
  var l=number.toString().length;
  var lower=number,higher=number;
  memory+=12;
  while(number > 0)
  {
    remainder = number%10;
    addition = addition + remainder**l;
    number = parseInt(number/10);
  }

  if(addition == flag)
  {
    document.getElementById("result").innerHTML=flag + "  is an Armstrong Number.";
    var end = window.performance.now();
    var tt=end-start;
    memory+=16;
    document.getElementById("time").innerHTML="Execution Time  :  "+ tt.toFixed(5)+ "  ms";
    //document.getElementById("memory").innerHTML="Memmory Usage   :  "+ memory + "  bytes";
    }
  else
  {
    //low();
    while(lower>0)
    {
      var n=lower,rem,add=0;
      var len=lower.toString().length;
      memory+=16;
      while(n > 0)
      {
        rem = n%10;
        add = add + rem**len;
        n = parseInt(n/10);
      }

      if(add == lower)
      {
        document.getElementById("result").innerHTML="The closest lower Armstrong number is  :  "+lower;
        break;
      }
      else {
        lower=lower-1;
      }

    }
    //high(higher);
    while(higher>0)
    {
      var h=higher,r,sum=0;
      var len=higher.toString().length;
      memory+=16;
      while(h > 0)
      {
        r = h%10;
        sum = sum + r**len;
        h = parseInt(h/10);
      }

      if(sum == higher)
      {
        document.getElementById("r").innerHTML="The closest higher Armstrong number is  :  "+higher;
        var end = window.performance.now();
        var t = end-start;
        memory+=16;
        document.getElementById("time").innerHTML="Execution Time  : "+ t.toFixed(5) + "  ms";
        //document.getElementById("memory").innerHTML="Memmory Usage   :  "+memory+ "  bytes";
        break;
      }
      else {
        higher=higher+1;
      }

    }

}
}
