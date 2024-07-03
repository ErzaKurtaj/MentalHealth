document.addEventListener("DOMContentLoaded", function() {
  const bubbleText = document.querySelector(".bubble p");

  // Alternate the bubble text between "Just Breathe In" and "Breathe Out"
  setInterval(() => {
    if (bubbleText.textContent === " Breathe In") {
      bubbleText.textContent = "Breathe Out";
    } else {
      bubbleText.textContent = " Breathe In";
    }
  }, 3000); // Change every 2 seconds to match the animation duration

 // Dropdown functionality for "How Are You Feeling" section
 document.querySelectorAll('.dropdown-button').forEach(button => {
  button.addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      if (content.classList.contains('show')) {
        content.classList.remove('show');
      }
    });
  }
};
});



function showFeelings() {
  document.getElementById('feelings').style.display = 'block';
  document.getElementById('experiences').style.display = 'none';
}

function showExperiences() {
  document.getElementById('feelings').style.display = 'none';
  document.getElementById('experiences').style.display = 'block';
}


// Function to handle the click event and toggle the message visibility
function handleItemClick(itemId, messageId) {
  var item = document.getElementById(itemId);
  var message = document.getElementById(messageId);

  item.addEventListener("click", function() {
      message.classList.toggle("hidden");
  });
}

// Call the function for each list item and its corresponding message
handleItemClick("angryItem", "angryMessage");
handleItemClick("anxiousItem", "anxiousMessage");
handleItemClick("sadItem", "sadMessage");
handleItemClick("hopelessItem", "hopelessMessage");
handleItemClick("lonelyItem", "lonelyMessage");
handleItemClick("weirdItem", "weirdMessage");
handleItemClick("stressedItem", "stressedMessage");
handleItemClick("unfittingItem", "unfittingMessage");
handleItemClick("abuseItem", "abuseMessage");
handleItemClick("breakupItem", "breakupMessage");
handleItemClick("lossItem", "lossMessage");
handleItemClick("socialMediaItem", "socialMediaMessage");
handleItemClick("discriminationItem", "discriminationMessage");
handleItemClick("suicidalThoughtsItem", "suicidalThoughtsMessage");
handleItemClick("selfInjuryItem", "selfInjuryMessage");
handleItemClick("traumaItem", "traumaMessage");
handleItemClick("moneyProblemsItem", "moneyProblemsMessage");




document.getElementById('anxiety-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  console.log("Anxiety link clicked"); // Log that the link is clicked
  // Hide all other messages
  hideAllMessages();
  // Show the message for Anxiety Disorders
  document.getElementById('anxietyMessage').classList.remove('hidden');
});

// Function to hide all messages
function hideAllMessages() {
  var messages = document.querySelectorAll('.message');
  messages.forEach(function(message) {
    console.log("Hiding message:", message.id); // Log the message ID for debugging
    message.classList.add('hidden');
  });
}


// Select the anxiety link and its corresponding message
const anxietyLink = document.getElementById('anxiety-link');
const anxietyMessage = document.getElementById('anxietyMessage');

// Add a click event listener to the anxiety link
anxietyLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  console.log("Anxiety link clicked"); // Log that the link is clicked
  
  // Toggle the visibility of the anxiety message
  anxietyMessage.classList.toggle('hidden');
});




