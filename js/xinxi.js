

function isMobil() {
    var tel = document.getElementById("iphone").value;
    var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
    if (reg.test(tel)) {
        document.getElementById("warning").style.display = "none";
        window.location.replace("gerenzhongxin.html");
    } else {
        document.getElementById("warning").style.display = "block";
    };
}




