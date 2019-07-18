function loadSizmekScript(relativeUrl) {
    document.write("<script src='" + (document.location.protocol === "https:" ? "https://secure-" : "http://") + "code.jquery.com//" + relativeUrl + "'><\/script>");
}
loadSizmekScript("jquery-3.4.1.min.js");
