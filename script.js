// Function for the introductory speech
function introSpeech() {
    const speech = new SpeechSynthesisUtterance("I am a text-to-voice speaking robot. Can you enter your name please?");
    speech.rate = 0.7;
    speech.pitch = 0.5;
    window.speechSynthesis.speak(speech);
  }
  
  // Function to ask for the user's name
  function askName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
      const speech = new SpeechSynthesisUtterance(`Hello ${nameInput}, what would you like me to say?`);
      speech.rate = 0.7;
      speech.pitch = 0.5;
      window.speechSynthesis.speak(speech);
  
      // Hide the name input and show the speaking input
      document.getElementById('name-box').style.display = 'none';
      document.getElementById('speak-box').style.display = 'block';
    }
  }
  
  // Function to make the robot speak the input text
  function makeRobotSpeak() {
    const inputText = document.getElementById('inputText').value;
    const spokenText = document.getElementById('spokenText');
    const mouth = document.querySelector('.mouth-shape');
  
    // Display the text on the screen
    spokenText.textContent = inputText;
  
    // Trigger the speaking animation
    mouth.style.transform = 'scaleY(0.1)';
  
    // Use Web Speech API to convert text to speech
    const speech = new SpeechSynthesisUtterance(inputText);
    speech.rate = 0.7;    // Slow down the voice for a robotic effect
    speech.pitch = 0.5;   // Lower pitch for a robotic sound
    window.speechSynthesis.speak(speech);
  
    // Reset the mouth animation after a short delay
    setTimeout(() => {
      mouth.style.transform = 'scaleY(1)';
    }, 300);
  
    // Keep the mouth moving while the speech is ongoing
    speech.onstart = () => {
      mouth.style.transform = 'scaleY(0.1)';
    };
  
    // Reset mouth animation when the speech ends
    speech.onend = () => {
      mouth.style.transform = 'scaleY(1)';
    };
  }
  