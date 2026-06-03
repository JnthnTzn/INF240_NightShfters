
const navbar = document.getElementById("navbar");

if (navbar) {
    fetch("navbar.html")
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            navbar.innerHTML = data;
        });
}

const footer = document.getElementById("footer");

if (footer) {
    fetch("footer.html")
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            footer.innerHTML = data;
        });
}