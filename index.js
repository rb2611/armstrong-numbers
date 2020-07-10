function Armstrong()
{
  var start = window.performance.now();
  var script=document.createElement('script');
  var flag,noo,higher;
  noo = Number(document.getElementById("N").value);
  flag = noo;
  lower = noo;
  higher = noo;
  var aa = arm(noo);
  if(aa == flag)
  {
    document.getElementById("result").innerHTML=flag + "  is an Armstrong Number.";
    var end = window.performance.now();
    var tt=end-start;
    document.getElementById("time").innerHTML="Execution Time  :  "+ tt.toFixed(5)+ "  ms";
    document.getElementById("memory").innerHTML="Memmory Usage   :  "+ mem + "  bytes";
  }
  else
    {
      lower-=1;
      //for lower
      while(lower>0)
      {
        var low = arm(lower);
        if(low == lower)
        {
          document.getElementById("result").innerHTML="The closest lower Armstrong number is  :  "+lower;
          break;
        }
        lower-=1;
      }
      higher+=1;
      //for lower
      while(higher>0)
      {
        var high = arm(higher);
        if(high == higher)
        {
          document.getElementById("r").innerHTML="The closest higher Armstrong number is  :  "+higher;
          var end = window.performance.now();
          var tt=end-start;
          document.getElementById("time").innerHTML="Execution Time  :  "+ tt.toFixed(5)+ "  ms";
          break;
        }
        higher+=1;
      }
    }

}
function arm(n)
{
  this.number=n;
  var l=number.toString().length;
  var remainder,addition=0;
  while(number > 0)
  {
    remainder = number%10;
    addition = addition + remainder**l;
    number = parseInt(number/10);
  }
  return addition;
}
const used = process.memoryUsage();
for (let key in used) {
  console.log(`Memory: ${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
