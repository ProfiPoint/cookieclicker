console.log("Version 1.3.1a");

const progressBar = document.getElementById('ProgressBar');
const progressText = document.getElementById('ProgressWindowText');
const progressWindow = document.getElementById('ProgressWindow');
var truea = true;

  var strings = [
    "*Credits of Cookie Clicker:", // title
    "*[Hardly inspired by the original game Cookie Clicker (2013)]$# Orteil (DashNet)", // credits
    "*[Design, CSS]$#Jan Fila##*[Artwork, Graphics]$#Jan Fila#Ondřej Čopák",
    "*[JavaScript, Code]$#Ondřej Čopák##*[Testing, Debugging]$#Ondřej Čopák#Jan Fila",
    "*[Assets, Resources]$#Orteil (DashNet - CookieClicker)#(FamousCookies)",
    "Thank you for playing!#We love you <3#WE NEED YOU SO MUCH!# COOK COOKIES WITH US!#COOK MORE# COOOOK FASTER!!!!!!# YESSSSSSSS# YOU ARE HIRED!"
  ];

  // get all number of chgaracters in strings:
  var totalCharacters = 0;
    strings.forEach(function (str) {
        totalCharacters += str.length;
    });

  var htmlBoxes = [
    document.getElementById("cookieCount"),
    document.getElementById("Buildings1"),
    document.getElementById("Buildings2"),
    document.getElementById("Buildings3"),
    document.getElementById("UpgradesClicking"),
    document.getElementById("UpgradesBuildings"),
  ];

  var numberOfStringCharacters = [0];
  var totalStringCharacters = 0;

  // Calculate totalStringCharacters and avoid modifying the original 'strings' array
  var processedStrings = strings.map(function (str) {
    return str + " ";
  });

  processedStrings.forEach(function (str) {
    
    numberOfStringCharacters.push(str.length + totalStringCharacters);
    totalStringCharacters += str.length;
    console.log(str.length)
  });

  var currentString = 0;

  function showNextString() {
    for (var i = 0; i < numberOfStringCharacters.length; i++) {
      if (currentString < numberOfStringCharacters[i+1]) {
        htmlBoxes[i].innerHTML = strings[i].slice(0, currentString-numberOfStringCharacters[i]).replace(/#/g, '<br>').replace(/\*/g, '<b>').replace(/\$/g, '</b>');
        var currChar = strings[i][currentString - numberOfStringCharacters[i] - 1];
        if (currChar === " " || currChar === "#" || currChar === "$" || currChar === "*") {
          clickCookie()
        }
        if (currentString - numberOfStringCharacters[i] === 0) {
          clickCookie()
        }
        break;
      }
    }
  }

    function displayProgress() {
        if (truea == true && currentString >= totalCharacters) {
            progressBar.style.width = 100 + '%'; 
            truea = false;
            RebirthSFX();
            
            progressText.textContent = "THANKS FOR PLAYING! CLICK TO RETURN TO MENU!";
        } else if (truea == true) {
            progressBar.style.width = 100*currentString/totalCharacters + '%';
            progressText.textContent = formatNumber(Math.ceil(currentString)) + " / " + formatNumber(totalCharacters);
        }
    }



  function clickCookie() {
    ClickSFX();
    currentString++;
    showNextString();
    displayProgress();
  }
  displayProgress();

  progressWindow.addEventListener("click", function() {
    if (truea == false) {
        NextSFX();
        window.location.href = "Menu.html";
    }
});

  function formatNumber(number) {
    if (number < 1000) {
        return number.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    } else if (number < 1000000) {
        return (number / 1000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'k';
    } else if (number < 1000000000) {
        return (number / 1000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'M';
    } else if (number < 1000000000000) {
        return (number / 1000000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'B';
    } else if (number < 1000000000000000) {
        return (number / 1000000000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'T';
    } else if (number < 1000000000000000000) {
        return (number / 1000000000000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'Qa';
    } else if (number < 1000000000000000000000) {
        return (number / 1000000000000000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'Qn';
    } else if (number < 1000000000000000000000000) {
        return (number / 1000000000000000000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'Sx';
    } else if (number < 1000000000000000000000000000) {
        return (number / 1000000000000000000000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'Sp';
    }
}


function ClickSFX() {
  var randomSFXNumber = Math.floor(Math.random() * 7) + 1; // Generate a random number between 1 and 8
  var randomSFXFileName = 'sfx/clickb' + randomSFXNumber + '.mp3'; // Concatenate with the file name

  // Create an audio element dynamically
  var audioElement = new Audio(randomSFXFileName);

  // Play the audio
  audioElement.play();
}

function UpgradeSFX(){
  var randomSFXNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 8
  var randomSFXFileName = 'sfx/sell' + randomSFXNumber + '.mp3'; // Concatenate with the file name

  // Create an audio element dynamically
  var audioElement = new Audio(randomSFXFileName);

  // Play the audio
  audioElement.play();
}

function BuildingSFX(){
  var randomSFXNumber = Math.floor(Math.random() * 4) + 1; // Generate a random number between 1 and 8
  var randomSFXFileName = 'sfx/buy' + randomSFXNumber + '.mp3'; // Concatenate with the file name

  // Create an audio element dynamically
  var audioElement = new Audio(randomSFXFileName);

  // Play the audio
  audioElement.play();
}

function RebirthSFX(){
  var randomSFXFileName = 'sfx/choir.mp3'; // Concatenate with the file name

  // Create an audio element dynamically
  var audioElement = new Audio(randomSFXFileName);

  // Play the audio
  audioElement.play();
}

function NextSFX(){
  var randomSFXFileName = 'sfx/thud.mp3'; // Concatenate with the file name

  // Create an audio element dynamically
  var audioElement = new Audio(randomSFXFileName);

  // Play the audio
  audioElement.play();
}