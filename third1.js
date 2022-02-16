let m = [];
document.write("<table>");
for (i=0; i<15; i++){
	m[i] = Math.round(Math.random()*120-20);
  if (i%5==0){
    document.write("<tr>");
  }
  if (m[i]%10==0){
    document.write("<td class=\"need\">"+m[i]+"</td>");
    // m[i] = 0;
    // document.write(m[i]+" стало; ");
  }
	else document.write("<td>"+m[i]+"</td>");
}
document.write("</table>");