
function updateChart() {
    const green = parseInt(document.getElementById("green").value) || 0;
    const orange = parseInt(document.getElementById("orange").value) || 0;
    const total = green + orange;
    if(total > 100){
        alert("more than 100")
        return
    }
    const red = 100 - total;
    document.documentElement.style.setProperty("--green",`${green}%`);
    document.documentElement.style.setProperty("--orange",`${orange}%`);

    
}