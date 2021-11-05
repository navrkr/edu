var coll=document.getElementsByClassName("collapsible");

for(let i=0;i<coll.length;i++){
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");

        var content =this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }
        else{
            content.style.maxHeight=content.scrollHeight+"px";
        }
    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botstartermsg").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let text = userText.toLowerCase().replace(/[^\w\s\d]/gi, "");
    let botResponse = getBotResponse(text);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


const hi = ["hi", "hey", "hello", "good morning", "good afternoon"];
const how = ["how are you", "how is life", "how are things"];
const doing = ["what are you doing", "what is going on", "what is up"];
const age = ["how old are you","what is your age"];
const who = ["who are you", "are you human", "are you bot", "are you human or bot"];
const creator = ["who created you", "who made you"];
const name = [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ];
  const love =  ["i love you"];
  const good = ["happy", "good", "fun", "wonderful", "fantastic", "cool"];
  const bad = ["bad", "bored", "tired"];
  const help = ["help me", "Help", "help!", "need help"];
  const ok = ["ah", "yes", "ok", "okay", "nice"];
  const bye = ["bye", "good bye", "goodbye", "see you later"];
  const eat = ["what should i eat today"];
  const hir = ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"];
  const howr = ["I am good!", "Great!", "Thanks for asking!", "Crazy!",];
  const doingr = [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ];
  const whor = ["I am just a bot", "I am a bot. What are you?"];
  const creatorrr = ["The one true God", "JavaScript"];
  const namer = ["I am nameless", "I don't have a name"];
  const lover = ["I love you too", "Me too"];
  const goodr = ["Have you ever felt bad?", "Glad to hear it"];
  const badr = ["Why?", "Why? You shouldn't!", "Try watching TV"];
  const helpr = ["What about?", "Please contact develpoer"];
  const okr = ["Tell me a story", "Tell me a joke", "Tell me about yourself"];
  const byer = ["Bye", "Goodbye", "See you later"];
  const eatr = ["Sushi", "Pizza"];

 const alternative = [
    "Contact Us: 9xxxx xxxx1"
  ];
  
function getBotResponse(input) {
  // Simple responses
  if (hi.includes(input)) {
      return "Hello there!";
  } else if (how.includes(input)) {
  return howr[Math.floor(Math.random() * howr.length)];
} else if (doing.includes(input)) {
  return doingr[Math.floor(Math.random() * doingr.length)];
} else if (age.includes(input)) {
  return "Its infinite!";
} else if (who.includes(input)) {
  return whor[Math.floor(Math.random() * whor.length)];
} else if (creator.includes(input)) {
  return creatorrr[Math.floor(Math.random() * creatorrr.length)];
} else if (name.includes(input)) {
  return namer[Math.floor(Math.random() * namer.length)];
} else if (how.includes(input)) {
  return howr[Math.floor(Math.random() * howr.length)];
} else if (love.includes(input)) {
  return lover[Math.floor(Math.random() * lover.length)];
} else if (good.includes(input)) {
  return goodr[Math.floor(Math.random() * goodr.length)];
} else if (bad.includes(input)) {
  return badr[Math.floor(Math.random() * badr.length)];
} else if (help.includes(input)) {
  return helpr[Math.floor(Math.random() * helpr.length)];
} else if (ok.includes(input)) {
  return okr[Math.floor(Math.random() * okr.length)];
} else if (bye.includes(input)) {
  return byer[Math.floor(Math.random() * byer.length)];
} else if (eat.includes(input)) {
  return eatr[Math.floor(Math.random() * eatr.length)];
  } else {
    return alternative[Math.floor(Math.random() * alternative.length)];
  }
}
