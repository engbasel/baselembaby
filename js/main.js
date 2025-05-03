// Function to download CV
function downloadCV() {
    const cvUrl = "images/basel-Embaby-CV.pdf";
    const fileName = "Basel_Embaby_CV.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to load HTML components
function loadComponent(containerId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading ${componentPath}:`, error);
        });
}