// Camera Access (QR Scanner Placeholder)
const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => video.srcObject = stream)
.catch(() => console.log("Camera permission denied"));
