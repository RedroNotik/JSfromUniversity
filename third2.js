 let k = [];
 document.write("<table>");
for (i=0; i<15; i++){
  if (i%5==0){
    document.write("<tr>");
  }
	k[i] = Math.round(Math.random()*100);
  if (i%2!=0){
      k[i]*=k[i];
      document.write("<td class=\"need\">"+k[i]+"</rd>");
  }
  else 	document.write("<td>"+k[i]+"</td>");
}