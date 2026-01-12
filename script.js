// Camera Access (QR Scanner Placeholder)
const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => video.srcObject = stream)
.catch(() => console.log("Camera permission denied"));
// ===== ADMIN UPDATES USING LOCAL STORAGE =====

const updatesList = document.getElementById("updatesList");

// Load updates on page load
document.addEventListener("DOMContentLoaded", loadUpdates);

function addUpdate() {
    const title = document.getElementById("updateTitle").value;
    const text = document.getElementById("updateText").value;

    if (title === "" || text === "") {
        alert("Please fill all fields");
        return;
    }

    const update = {
        title: title,
        text: text,
        date: new Date().toLocaleDateString()
    };

    let updates = JSON.parse(localStorage.getItem("ngoUpdates")) || [];
    updates.unshift(update); // newest first
    localStorage.setItem("ngoUpdates", JSON.stringify(updates));

    document.getElementById("updateTitle").value = "";
    document.getElementById("updateText").value = "";

    loadUpdates();
}

function loadUpdates() {
    let updates = JSON.parse(localStorage.getItem("ngoUpdates")) || [];
    updatesList.innerHTML = "";

    updates.forEach(u => {
        updatesList.innerHTML += `
            <div class="update-card">
                <h4>${u.title}</h4>
                <p class="update-date">${u.date}</p>
                <p>${u.text}</p>
            </div>
        `;
    });
}
const password = prompt("Enter admin password:");
if (password !== "admin123") {
    document.querySelector(".admin-panel").style.display = "none";
}
