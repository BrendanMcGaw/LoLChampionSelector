//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const request = require("request");
const fs = require("fs");
const chromeLauncher = require("chrome-launcher");

var app = express();

var lockfileArray = [];
var username = 'riot';
var champion;
var championIDNumber;
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

console.log(port);

function makeArrayFromLockfile() {
  var contents = fs.readFileSync("P:/Riot Games/League of Legends/lockfile").toString('utf-8');
  lockfileArray = contents.split(":");
}

makeArrayFromLockfile();

var port = lockfileArray[2];
var password = lockfileArray[3];
var lolClientUrl = ("https://127.0.0.1:" + port + "/lol-champ-select/v1/current-champion");
var getAuthencationLogin = { // My basic authorization key object.
  'url': lolClientUrl,
  'content-type': 'application/json',
  'auth': {
    'username': username,
    'password': password
  }
};

console.log('Username is: ' + username);
console.log('Password is: ' + password);
console.log("URL is: " + lolClientUrl);
console.log("port is: " + port);
//Reports confirming my variable definitions.

app.use(bodyParser.urlencoded({
  extended: true
}));

function getDataForChampion() { // Gets the data from the LoL API Client giving back an ID Number of the character locked in by the user.
  request(getAuthencationLogin, function(error, response, body) {
    championIDNumber = body; // body returns the ID number of the selected champion.
    champion = championName(championIDNumber); // Uses the championName function to compare the ID number to the correct name and then returns the name of the champion to our champion variable.
    if (error) {
      console.log(error); // if the data comes back  null it will report an error.
    }
    if (champion == undefined) {
      console.log('Champion is undefined.'); // Same deal as above I guess?
    }
  });
}
checkChampionChosen();

function checkChampionChosen() {
  console.log('Checking for champion...');
  console.log(champion); // Will SHOW CHAMPION NAME

  if (typeof champion === 'undefined' || champion === '0') {
    setTimeout(function() {
      getDataForChampion(); // Checks the API for the champion-selected screen.
      checkChampionChosen(); // Sets up a loop to recheck the data for the champion selected ID number every 2 seconds.
    }, 2000);
  } else { // Google Chrome launches to the address of OP.GG/Champion/championName.
    chromeLauncher.launch({
      startingUrl: 'https://op.gg/champion/' + champion
    });
    setTimeout(function() { // Upon successfully finding the champion selected this will reset the champion name and ID number and after 10 minutes will restart the function.
      champion = '0';
      championIDNumber = '0';
      checkChampionChosen(); // Starts the whole process again in 10 minutes.
    }, 600000);
  }
}

function championName(championIDNumber) { // Takes the Champions ID Number and compares it to the name of the champion.
  console.log("The id number is: " + championIDNumber);

  switch (championIDNumber) {
    case '266':
      return "Aatrox";
    case '412':
      return "Thresh";
    case '23':
      return "Tryndamere";
    case '79':
      return "Gragas";
    case '69':
      return "Cassiopeia";
    case '136':
      return "AurelionSol";
    case '13':
      return "Ryze";
    case '78':
      return "Poppy";
    case '14':
      return "Sion";
    case '1':
      return "Annie";
    case '202':
      return "Jhin";
    case '43':
      return "Karma";
    case '111':
      return "Nautilus";
    case '240':
      return "Kled";
    case '99':
      return "Lux";
    case '103':
      return "Ahri";
    case '2':
      return "Olaf";
    case '112':
      return "Viktor";
    case '34':
      return "Anivia";
    case '27':
      return "Singed";
    case '86':
      return "Garen";
    case '127':
      return "Lissandra";
    case '57':
      return "Maokai";
    case '25':
      return "Morgana";
    case '28':
      return "Evelynn";
    case '105':
      return "Fizz";
    case '74':
      return "Heimerdinger";
    case '238':
      return "Zed";
    case '68':
      return "Rumble";
    case '82':
      return "Mordekaiser";
    case '37':
      return "Sona";
    case '96':
      return "KogMaw";
    case '55':
      return "Katarina";
    case '117':
      return "Lulu";
    case '22':
      return "Ashe";
    case '30':
      return "Karthus";
    case '12':
      return "Alistar";
    case '122':
      return "Darius";
    case '67':
      return "Vayne";
    case '110':
      return "Varus";
    case '77':
      return "Udyr";
    case '89':
      return "Leona";
    case '126':
      return "Jayce";
    case '134':
      return "Syndra";
    case '80':
      return "Pantheon";
    case '92':
      return "Riven";
    case '121':
      return "KhaZix";
    case '42':
      return "Corki";
    case '268':
      return "Azir";
    case '51':
      return "Caitlyn";
    case '76':
      return "Nidalee";
    case '85':
      return "Kennen";
    case '3':
      return "Galio";
    case '45':
      return "Veigar";
    case '432':
      return "Bard";
    case '150':
      return "Gnar";
    case '90':
      return "Malzahar";
    case '104':
      return "Graves";
    case '254':
      return "Vi";
    case '10':
      return "Kayle";
    case '39':
      return "Irelia";
    case '64':
      return "LeeSin";
    case '420':
      return "Illaoi";
    case '60':
      return "Elise";
    case '106':
      return "Volibear";
    case '20':
      return "Nunu";
    case '4':
      return "TwistedFate";
    case '24':
      return "Jax";
    case '102':
      return "Shyvana";
    case '429':
      return "Kalista";
    case '36':
      return "DrMundo";
    case '427':
      return "Ivern";
    case '131':
      return "Diana";
    case '223':
      return "TahmKench";
    case '63':
      return "Brand";
    case '113':
      return "Sejuani";
    case '8':
      return "Vladimir";
    case '154':
      return "Zac";
    case '421':
      return "RekSai";
    case '133':
      return "Quinn";
    case '84':
      return "Akali";
    case '163':
      return "Taliyah";
    case '18':
      return "Tristana";
    case '120':
      return "Hecarim";
    case '15':
      return "Sivir";
    case '236':
      return "Lucian";
    case '107':
      return "Rengar";
    case '19':
      return "Warwick";
    case '72':
      return "Skarner";
    case '54':
      return "Malphite";
    case '157':
      return "Yasuo";
    case '101':
      return "Xerath";
    case '17':
      return "Teemo";
    case '75':
      return "Nasus";
    case '58':
      return "Renekton";
    case '119':
      return "Draven";
    case '35':
      return "Shaco";
    case '50':
      return "Swain";
    case '91':
      return "Talon";
    case '40':
      return "Janna";
    case '115':
      return "Ziggs";
    case '245':
      return "Ekko";
    case '61':
      return "Orianna";
    case '114':
      return "Fiora";
    case '9':
      return "Fiddlesticks";
    case '31':
      return "ChoGath";
    case '33':
      return "Rammus";
    case '7':
      return "LeBlanc";
    case '16':
      return "Soraka";
    case '26':
      return "Zilean";
    case '56':
      return "Nocturne";
    case '222':
      return "Jinx";
    case '83':
      return "Yorick";
    case '6':
      return "Urgot";
    case '203':
      return "Kindred";
    case '21':
      return "MissFortune";
    case '62':
      return "Wukong";
    case '53':
      return "Blitzcrank";
    case '98':
      return "Shen";
    case '201':
      return "Braum";
    case '5':
      return "XinZhao";
    case '29':
      return "Twitch";
    case '11':
      return "MasterYi";
    case '44':
      return "Taric";
    case '32':
      return "Amumu";
    case '41':
      return "Gangplank";
    case '48':
      return "Trundle";
    case '38':
      return "Kassadin";
    case '161':
      return "VelKoz";
    case '143':
      return "Zyra";
    case '267':
      return "Nami";
    case '59':
      return "JarvanIV";
    case '81':
      return "Ezreal";
  }
}

app.listen(3000, function() {
  console.log("Find your port @ 3000");
});
