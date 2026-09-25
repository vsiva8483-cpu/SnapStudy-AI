const button = document.getElementById("summarizeBtn");
const input = document.getElementById("studyText");
const output = document.getElementById("summary");

button.addEventListener("click", async () => {
    const text = input.value.trim();

    if (!text) {
        output.textContent = "Please enter some study material.";
        return;
    }

    output.textContent = "Generating summary...";

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/summarize",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        output.textContent = data.summary;
    } catch (error) {
        output.textContent =
            "Backend is not connected. Please start the backend.";
    }
});
