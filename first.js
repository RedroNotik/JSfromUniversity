let a = [];
let count = 0;
document.write("<table>");
for (i=0; i<4; i++){
  document.write("</tr>");
	a[i] = [];
	for (j=0; j<6; j++){
		a[i][j] =Math.round(Math.random()*120-20);
		if (a[i][j] > 0){
			count+=a[i][j];
      document.write("<td class=\"need\">"+a[i][j]+"</td>")
		}
    else document.write("<td>"+a[i][j]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table><div class=\"answer\">"+count+"</div>");
