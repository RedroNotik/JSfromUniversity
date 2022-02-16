let b = [];
let min = [9999999999,0];
let max = [0,0];
let sum = 0;

for (f=0; f<20; f++){
	b[f] = Math.round(Math.random()*100);
	if (b[f]<min[0]){
     min[0] = b[f];
     min[1] = f+1;

  }
  if (b[f]>max[0]){
     max[0]= b[f];
     max[1] = f+1;
  }
  sum+=b[f];
  document.write(b[f]+"; ")
}
document.write("<br>");
document.write("<div class=\"answer\">R(общ)="+sum+"<br>"+"Min: "+"R"+min[1]+"="+min[0]+"<br>"+"Max: "+"R"+max[1]+"="+max[0]+"</div>");

