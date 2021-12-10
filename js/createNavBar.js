var navBarHtml = `
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog.html">Blog</a></li>
    <li><a href="/projects.html">Projects</a></li>
    <li><a href="/contactMe.html">Contact Me</a></li>
    <li><a href="/Resume.pdf">Resume</a></li>
    <li><a href="/p5jsProjects.html">p5js Projects</a></li>
</ul>`;

window.onload = function(){
    var navBarElement = document.getElementById("navBar");
    navBarElement.innerHTML += navBarHtml;
};
