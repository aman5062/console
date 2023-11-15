function changed() {
    htmlchanged();
    debugger;
}

function htmlchanged() {
    const htmlpart = document.getElementById("html_input").value;
    csschanged(htmlpart);
}

function csschanged(htmlpart) {
    const csspart = document.getElementById("css_input").value;
    const styleTag = document.getElementsByTagName("style")[0];

    // Clear existing styles
    styleTag.innerHTML = "";

    // Append new styles
    styleTag.appendChild(document.createTextNode(csspart));

    const mix = "<style>" + csspart + "</style>" + htmlpart;
    document.getElementById("output").innerHTML = mix;
}