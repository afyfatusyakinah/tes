function updateClock() {
    let now = new Date();
    document.getElementById("jakarta") .innerText = now.toLocaleString ("id-ID",{timeZone: "Asia/Jakarta"})
}
setInterval(updateClock, 1000);
updateClock();

