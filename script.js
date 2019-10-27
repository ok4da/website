function toggleMenu() {
    var x = document.getElementById("hamburgerlinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
document.getElementById('hamburger').addEventListener('click', toggleMenu);

function toggleForm() {
    var x = document.getElementById("hiddenform");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}
document.getElementById('boekenbtn').addEventListener('click', toggleForm);

