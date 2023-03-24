let QRInput = document.getElementById("QRInput");
let imgbox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrImg");

function generate() {
    if(QRInput.value.length > 0) {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRInput.value;
    imgbox.classList.add("show-img");
    } else {
        QRInput.classList.add("error");
        setTimeout(() => {
            QRInput.classList.remove("error");
        },1000);
    }
}