const button = document.getElementById("summarizeBtn");
const textArea = document.getElementById("studyText");
const summary = document.getElementById("summary");

button.addEventListener("click", function () {

    const text = textArea.value.trim();

    if (text === "") {
        summary.textContent = "Please enter some study material first.";
        return;
    }

    summary.textContent =
        "Your study material is ready to be processed by SnapStudy AI.";

});
