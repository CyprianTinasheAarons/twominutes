if ('serviceWorker' in navigator) {
    window.addEventListener('load',() =>{
      navigator.serviceWorker.register('../sw.js').then(() =>{
        console.log('Service Worker Registered')
      })
    })
  }

  function openQRCamera(node) {
    var reader = new FileReader();
    reader.onload = function() {
      node.value = "";
      qrcode.callback = function(res) {
        if(res instanceof Error) {
          alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
        } else {
          document.getElementById("qrcode").value = res;
        }
      };
      qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
  }
  
  function showQRIntro() {
    return confirm("Use your camera to take a picture of a QR code.");
  }