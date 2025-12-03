document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // AI Conversation Simulation
  const textarea = document.getElementById("first-conversation-prompt-textarea");
  const button = document.getElementById("first-conversation-send-button");
  const responseContainer = document.getElementById("first-conversation-response-container");
  const responseText = document.getElementById("first-conversation-response-text");

  if (textarea && button && responseContainer && responseText) {
    const sampleResponses = {
      "default": "That's a great question! For a newcomer to Park City, I'd recommend starting with a visit to the Park City Museum on Main Street to get a feel for our rich mining history. After that, a scenic drive up to Guardsman Pass (in the summer) offers breathtaking views. What aspects of Park City are you most interested in exploring?",
      "history": "You've come to the right place! Park City's history is fascinating. It was a silver mining boomtown. I recommend starting at the Park City Museum. They have fantastic exhibits. Would you like me to create a mini walking tour of historic Main Street for you?",
      "hike": "Wonderful! For a beautiful and relatively easy hike, I suggest the Armstrong Trail. It's shaded and offers great views of the town. If you want something a bit more challenging, Lost Prospector is a local favorite. Do either of those sound good?",
      "food": "You're in for a treat! For a classic Park City experience, you can't go wrong with High West Distillery for its unique atmosphere. If you're looking for something more casual, Vinto Pizzeria is excellent. What kind of food are you in the mood for?",
    };

    button.addEventListener("click", function() {
      const userInput = textarea.value.trim().toLowerCase();

      if (userInput === "") {
        alert("Please enter a prompt!");
        return;
      }

      let response = sampleResponses.default;
      if (userInput.includes("history")) {
        response = sampleResponses.history;
      } else if (userInput.includes("hike") || userInput.includes("trail")) {
        response = sampleResponses.hike;
      } else if (userInput.includes("food") || userInput.includes("restaurant")) {
        response = sampleResponses.food;
      }

      // Simulate AI "thinking"
      responseText.textContent = "Thinking...";
      responseContainer.classList.remove("hidden");

      setTimeout(() => {
        responseText.textContent = response;
        responseText.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1200);
    });

    textarea.addEventListener("keydown", function(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        button.click();
      }
    });
  }
});