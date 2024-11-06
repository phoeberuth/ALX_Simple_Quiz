// Define the function to check the answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected answer from the radio buttons
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // If an answer was selected, proceed with the check
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        
        // Display feedback based on whether the answer is correct or incorrect
        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // If no answer was selected, prompt the user to choose one
        alert("Please select an answer.");
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);