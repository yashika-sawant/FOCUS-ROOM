// Load saved notes when page opens
window.onload = function () {
    const savedNotes = localStorage.getItem("studyNotes");
    if (savedNotes) {
        document.getElementById("notesArea").value = savedNotes;
    }
};

// Save notes
function saveNotes() {
    const notes = document.getElementById("notesArea").value;
    localStorage.setItem("studyNotes", notes);
    alert("Notes saved!");
}

// Clear notes
function clearNotes() {
    document.getElementById("notesArea").value = "";
    localStorage.removeItem("studyNotes");
}
