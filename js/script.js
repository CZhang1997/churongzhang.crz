
var urls = ["https://github.com/CZhang1997", "graphic.html", "profile.html", "index.html", "projects.html", "other.html", "https://www.linkedin.com/in/churong-zhang-87027615b"]
var names= ["Github", "Graphics", "Profile", "Home", "Projects", "Others", "LinkedIn"]

var i = 0;
var text ="";//"<ul>";
for(i = 0; i < urls.length; i++)
{
  text+="<li><a href=\""+urls[i]+\">+names[i]+"</a></li>";
}
//text += "</ul>";
document.getElementById("nav").innerHTML = text;
