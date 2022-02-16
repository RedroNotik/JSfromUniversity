let c = [];
c[0] = Math.round(Math.random()*120-20)
document.write("<table>")
for (i=0; i<15; i++){
  if (i%5==0){
    document.write("<tr>");
  }
	c[i] = Math.round(Math.random()*120-20)/c[0];
	document.write("<td>"+c[i].toFixed(2)+"</td>");
}
document.write("</table>");