
function openPdf(){
    window.open('media/cvnizar.pdf','_blank');

}
function openProj(){
    window.open('https://example.com','_blank');

}

 if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    // This is Safari
    console.log("Safari detected");
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0"; // Adjust if needed
    document.head.appendChild(meta);
