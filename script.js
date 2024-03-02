console.log("Version 1.3.1a");

var currentURL = window.location.href;

// Extract the level number from the URL
var levelMatch = currentURL.match(/level(\d+)\.html/i)[1];
console.log(levelMatch);

class Game {
    constructor() {
        this.totalCookies = 0;
        this.passiveCookies = 0;
        this.clickPerCookie = 1;
        this.multiplier = 1;
        this.time = 0;
        this.level = levelMatch;
        if (this.level == null) {
            this.level = 0;
        }

        this.goal = [25000,500000000,10000000000000000000000][levelMatch-1];
        this.BuildingList = [];
        this.UpgradeList = [];

    }
}

const game = new Game();

class Building {
    constructor(n, c, m, a, glu) {
        this.name = n;
        this.level = 0;
        this.cost = c;
        this.costMultiplier = 1+m;
        this.gameLevelUnlock = glu;

        this.passiveCookiesPerSecond = 0;
        this.pCPsAddition = a;
        this.pCPsMultiplier = 1;
    }

    checkBuildingUpgrades() {
        if (this.level == 5 && this.name == "Woman") {
            game.UpgradeList.push(new Upgrade("Woman Ultra Pro+", "Woman production +50 %", 300, 0, 1, [0.50,0,0], -1, 1, "assets/icon_31_1.png")); //2x woman 
        } 
        else if (this.level == 10 && this.name == "Woman") {
            game.UpgradeList.push(new Upgrade("Another Woman", "Woman production +100 %", 666, 0, 1, [1,0,0], -1, 1, "assets/icon_32_1.png")); //2x woman 
        } 
        else if (this.level == 20 && this.name == "Woman") {
            game.UpgradeList.push(new Upgrade("Women union", "Woman production +300 %", 2500, 0, 1, [3,0,0], -1, 1, "assets/icon_30_1.png")); //5x woman 
        }
        else if (this.level == 30 && this.name == "Woman") {
            game.UpgradeList.push(new Upgrade("Pink cookie maker", "Woman production +600 %", 100000, 0, 1, [6,0,0], -1, 2, "assets/icon_34_1.png")); //10x woman 
        }
        else if (this.level == 40 && this.name == "Woman") {
            game.UpgradeList.push(new Upgrade("Female", "Woman production +900 %", 3000000, 0, 1, [9,0,0], -1, 2, "assets/icon_35_1.png")); //20x woman 
        }
        else if (this.level == 50 && this.name == "Woman") {
            game.UpgradeList.push(new Upgrade("Man", "Woman production +500k %", 20000000000, 0, 1, [500,0,0], -1, 3, "assets/icon_36_1.png")); //20x woman 
        }


        if (this.level == 5 && this.name == "Bakery") {
            game.UpgradeList.push(new Upgrade("New Furnace", "Bakery production +50 %", 500000, 0, 1, [0,0.5,0], -1, 2, "assets/icon_31_10.png")); //2x woman 
        } 
        else if (this.level == 10 && this.name == "Bakery") {
            game.UpgradeList.push(new Upgrade("Better Butter", "Bakery production +100 %", 2000000, 0, 1, [0,1,0], -1, 2, "assets/icon_32_10.png")); //2x woman 
        } 
        else if (this.level == 20 && this.name == "Bakery") {
            game.UpgradeList.push(new Upgrade("Bakery Ads", "Bakery production +300 %", 10000000, 0, 1, [0,3,0], -1, 2, "assets/icon_30_10.png")); //5x woman 
        }
        else if (this.level == 30 && this.name == "Bakery") {
            game.UpgradeList.push(new Upgrade("More Branches", "Bakery production +10k %", 6000000000, 0, 1, [0,100,0], -1, 3, "assets/icon_34_10.png")); //10x woman 
        }
        else if (this.level == 40 && this.name == "Bakery") {
            game.UpgradeList.push(new Upgrade("Expansion to Europe", "Bakery production +10k %", 3000000000000, 0, 1, [0,100,0], -1, 3, "assets/icon_35_10.png")); //20x woman 
        }
        else if (this.level == 50 && this.name == "Bakery") {
            game.UpgradeList.push(new Upgrade("Baker Street", "Bakery production +100k %", 10000000000000000, 0, 1, [0,1000,0], -1, 3, "assets/icon_36_10.png")); //20x woman 
        }

        if (this.level == 5 && this.name == "Factory") {
            game.UpgradeList.push(new Upgrade("New Furnace", "Factory production +50 %", 500000000, 0, 1, [0,0,0.5], -1, 2, "assets/icon_31_4.png")); //2x woman 
        } 
        else if (this.level == 10 && this.name == "Factory") {
            game.UpgradeList.push(new Upgrade("More CO2 Emmission", "Factory production +100 %", 2000000000, 0, 1, [0,0,1], -1, 2, "assets/icon_32_4.png")); //2x woman 
        } 
        else if (this.level == 20 && this.name == "Factory") {
            game.UpgradeList.push(new Upgrade("Child labour", "Factory production +300 %", 10000000000, 0, 1, [0,0,3], -1, 2, "assets/icon_30_4.png")); //5x woman 
        }
        else if (this.level == 30 && this.name == "Factory") {
            game.UpgradeList.push(new Upgrade("No regulations", "Factory production +600 %", 150000000000, 0, 1, [0,0,6], -1, 2, "assets/icon_34_4.png")); //10x woman 
        }
        else if (this.level == 40 && this.name == "Factory") {
            game.UpgradeList.push(new Upgrade("Purchase Agrofert into your holding", "Factory production +2k %", 500000000000000, 0, 1, [0,0,20], -1, 3, "assets/icon_35_4.png")); //20x woman 
        }
        else if (this.level == 50 && this.name == "Factory") {
            game.UpgradeList.push(new Upgrade("Willy Wonka's Cookies Factory", "Factory production +131k %", 13100000000000000000, 0, 1, [0,0,1310], -1, 3, "assets/icon_36_4.png")); //20x woman 
        }

        if (woman.level == 131 && bakery.level == 131 && factory.level == 131) {
            game.UpgradeList.push(new Upgrade("Perfect World", "+13.1 % total cookies every second", 131, 0, 0, [0,0,0], 0, 0, "assets/icon_1_26.png")); //20x woman 
        }

    }

    buy(cookies) {
        if (cookies >= this.cost && game.level >= this.gameLevelUnlock) {
            game.totalCookies -= this.cost;
            this.level++;
            this.cost *= this.costMultiplier;
            this.passiveCookiesPerSecond += this.pCPsAddition;

            if (this.level > 50){
                this.passiveCookiesPerSecond *= 1.025;
            }

            this.checkBuildingUpgrades();
            updatePassiveCookies();
            updateBuildingButtonsOutside();
            updateUpgradeButtonsOutside();
            createNewBuilding(this.gameLevelUnlock, this.level);
            return true;
        } else {
            return false;
        }
    }
}


async function inf131() {
    while (true) {
        game.totalCookies = game.totalCookies * 1.131;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

class Upgrade {
    constructor(n, d, c, m, cp, mpb, prevupgr, glu, icon) {
        this.name = n;
        this.desc = d;
        this.cost = c;
        this.multiplier = m;
        this.clickPoints = cp;
        this.gameLevelUnlock = glu;
        this.iconImagePos = icon;
        this.multiplierPerBuilding = mpb;

        this.isPurchased = false;
        this.prevUpgradeNeeded = prevupgr
    }

    applyUpgrade() {
        game.totalCookies -= this.cost;
        game.multiplier += this.multiplier;
        game.clickPerCookie += this.clickPoints;
        
        game.BuildingList[0].passiveCookiesPerSecond *= (1+this.multiplierPerBuilding[0]);
        game.BuildingList[1].passiveCookiesPerSecond *= (1+this.multiplierPerBuilding[1]);
        game.BuildingList[2].passiveCookiesPerSecond *= (1+this.multiplierPerBuilding[2]);

        game.BuildingList[0].pCPsMultiplier += this.multiplierPerBuilding[0];
        game.BuildingList[1].pCPsMultiplier += this.multiplierPerBuilding[1];           
        game.BuildingList[2].pCPsMultiplier += this.multiplierPerBuilding[2];

        this.isPurchased = true;

        if (this.name == "Perfect World") {
            inf131();
        }
    
        updatePassiveCookies();
        updateBuildingButtonsOutside();
        updateUpgradeButtonsOutside();
    }

    buy(cookies,divName) {
        if (cookies >= this.cost && this.isPurchased == false && game.level >= this.gameLevelUnlock && divName == this.name+"\n"+this.desc) { 
            UpgradeSFX();
            cookies -= this.cost;
            this.applyUpgrade();
            return true;
        } else {
            return false;
        }
    }
}


function updatePassiveCookies(){
    game.passiveCookies = game.BuildingList[0].passiveCookiesPerSecond * game.BuildingList[0].pCPsMultiplier + game.BuildingList[1].passiveCookiesPerSecond * game.BuildingList[1].pCPsMultiplier + game.BuildingList[2].passiveCookiesPerSecond * game.BuildingList[2].pCPsMultiplier;
}

function updateUpgradeButtonsOutside(){
    var indexUpgradeButtons = 0;

    // create new list that will take the top 3 elements of game.UpgradeList based on the cost from the lowest to the highest:
    // copy
    var sortedUpgradeList = [...game.UpgradeList];
    sortedUpgradeList = sortedUpgradeList.sort((a, b) => a.cost - b.cost);
    
    sortedUpgradeList.forEach(element => {
        if (indexUpgradeButtons < 3 && element.isPurchased == false && game.level >= element.gameLevelUnlock && (element.prevUpgradeNeeded == -1 || game.UpgradeList[element.prevUpgradeNeeded].isPurchased == true) ) {
            indexUpgradeButtons++;

            var upgrade = document.getElementById("upgrade"+indexUpgradeButtons);
            var upgradeImg = document.getElementById("upgrade"+indexUpgradeButtons+"img");
            var upgradeTxt = document.getElementById("upgrade"+indexUpgradeButtons+"txt");
            var upgradeCost = document.getElementById("upgrade"+indexUpgradeButtons+"cost");

            upgrade.removeEventListener("click", function() {
                element.buy.call(element, game.totalCookies);
            });

            //include text that is under element: div class Text:
            upgrade.addEventListener("click", function() {
                // Get the text of the "Text" element under the upgrade
                var upgradeText = this.querySelector('.Text').innerText;

                // Include the text in your function call
                element.buy.call(element, game.totalCookies, upgradeText);
            });
            // set scr image to transparent:
            upgradeImg.setAttribute("src", element.iconImagePos);

            upgradeImg.setAttribute("class", "image");
            upgradeTxt.innerHTML = "<b>"+element.name+"</b><br>"+element.desc;
            upgradeCost.textContent = formatNumber(Math.ceil(element.cost));

            
        }

    });




for (var i = 1; i <= 3; i++) {
    var upgrade = document.getElementById("upgrade" + i);
    var upgradeImg = document.getElementById("upgrade" + i + "img");
    var upgradeTxt = document.getElementById("upgrade" + i + "txt");
    var upgradeCost = document.getElementById("upgrade" + i + "cost");

    if (indexUpgradeButtons < i) {
        
        upgrade.style.display = "none";
        upgradeImg.style.display = "none";
        upgradeTxt.style.display = "none";
        upgradeCost.style.display = "none";
    }
    else {
        // make the button visible again
        upgrade.style.display = "block";
        upgradeImg.style.display = "block";
        upgradeTxt.style.display = "block";
        upgradeCost.style.display = "block";
    }
}
}


function createNewBuilding(level,count) {
    if (count <= 80){
        // create new buidling div with image that will go into the box Buildings1/2/3 based on level, stuck it from left to right:
        var building = document.createElement("div");
        building.setAttribute("id", "building" + level);
        building.style.width = "5%";
        building.style.height = "23%";
        building.style.background = "url("+["assets/woman.png","assets/bakery.png","assets/factory.png"][level-1]+")";
        building.style.position = "absolute";

        building.style.left = (Math.floor((count-1)/4))*(100/20) + "%";
        building.style.top = ((count-1)%4)*(100/4) + "%";

        building.style.backgroundSize = "cover";
        building.style.backgroundRepeat = "no-repeat";
        building.style.backgroundPosition = "center";
        var box = document.getElementById("Buildings" + level);
        box.appendChild(building);
    }    
}

if (game.level <= 0) {
    var button_ = document.getElementById("building1");
    button_.style.display = "none";
}
if (game.level <= 1) {
    var button_ = document.getElementById("building2");
    button_.style.display = "none";
}
if (game.level <= 2) {
    var button_ = document.getElementById("building3");
    button_.style.display = "none";
}

var building1Div = document.getElementById("building1");
var building1Cost = document.getElementById("building1cost");
var building1Txt = document.getElementById("building1txt");

var building2Div = document.getElementById("building2");
var building2Cost = document.getElementById("building2cost");
var building2Txt = document.getElementById("building2txt");

var building3Div = document.getElementById("building3");
var building3Cost = document.getElementById("building3cost");
var building3Txt = document.getElementById("building3txt");

function updateBuildingButtonsOutside() {
    building1Cost.textContent = formatNumber(Math.ceil(game.BuildingList[0].cost)); ;
    building1Txt.innerHTML = "<b>" + game.BuildingList[0].name + "</b> [" + game.BuildingList[0].level + "]<br> Produces <b>"+ formatNumber(Math.ceil(game.BuildingList[0].passiveCookiesPerSecond * game.BuildingList[0].pCPsMultiplier)) + "</b> cookies per second.";

    building2Cost.textContent = formatNumber(Math.ceil(game.BuildingList[1].cost));
    building2Txt.innerHTML = "<b>" + game.BuildingList[1].name + "</b> [" + game.BuildingList[1].level + "]<br> Produces <b>"+ formatNumber(Math.ceil(game.BuildingList[1].passiveCookiesPerSecond * game.BuildingList[1].pCPsMultiplier)) + "</b> cookies per second.";

    building3Cost.textContent = formatNumber(Math.ceil(game.BuildingList[2].cost));
    building3Txt.innerHTML = "<b>" + game.BuildingList[2].name + "</b> [" + game.BuildingList[2].level + "]<br> Produces <b>"+ formatNumber(Math.ceil(game.BuildingList[2].passiveCookiesPerSecond * game.BuildingList[2].pCPsMultiplier)) + "</b> cookies per second.";
}

var truea = true;
async function passiveIncome() {
    
    const progressBar = document.getElementById('ProgressBar');
    const progressText = document.getElementById('ProgressWindowText');
    while (true) {
        for (var i = 0; i < 40; i++){
            await new Promise(resolve => setTimeout(resolve, 44));
            game.totalCookies += game.passiveCookies / 20;
            updateCookieCount(game.totalCookies);
            if (game.totalCookies >= game.goal && truea == true) {
                progressBar.style.width = 100 + '%'; 
                truea = false;
                RebirthSFX();
                progressText.textContent = "CLICK TO PROCEED TO THE NEXT LEVEL!";
            } else if (truea == true) {
                progressBar.style.width = 100*game.totalCookies/game.goal + '%';
                progressText.textContent = formatNumber(Math.ceil(game.totalCookies)) + " / " + formatNumber(game.goal);
            }
        }
        document.title = "Cookie Clicker 🍪 " + formatNumber(Math.ceil(game.totalCookies));
    }
}





// [Building] name, firstCost, costMultiplier, pCPsAddition, gameLevelUnlock
const woman = new Building("Woman", 10, 0.2, 1, 1);
const bakery = new Building("Bakery", 10000, 0.2, 1000, 2);
const factory = new Building("Factory", 100000000, 0.2, 10000000, 3);

const progressWindow = document.getElementById('ProgressWindow');

progressWindow.addEventListener("click", function() {
    if (game.totalCookies >= game.goal) {
        if (levelMatch == 3) {
            NextSFX();
            window.location.href = "credits.html";
        } else {
            NextSFX();
            window.location.href = "level" + (parseInt(levelMatch) + 1) + ".html";
        }
        
    }
});

building1Div.addEventListener("click", function() {
    BuildingSFX();
    woman.buy.call(woman, game.totalCookies);
});

building2Div.addEventListener("click", function() {
    BuildingSFX();
    bakery.buy.call(bakery, game.totalCookies);
});

building3Div.addEventListener("click", function() {
    BuildingSFX();
    factory.buy.call(factory, game.totalCookies);
});

var allUpgradeButtons = [];
var allBuildingButtons = [];

var bl = [woman,bakery,factory]

var ul = [
    //[Upgrade] name, cost, clickMultiplier, clickPoints, multiplierPerBuilding[1,2,3], previousUpgradeNumber, gameLevelUnlock, icon
    //0
    new Upgrade("Second finger", "Click power +1", 20, 0, 1, [0,0,0], -1, 0, "assets/icon_0_0.png"), //+1 mouse clicks
    new Upgrade("One finger", "Click power +1", 50, 0, 1, [0,0,0], 0, 0, "assets/icon_1_0.png"), //+1 mouse clicks
    new Upgrade("Finger Fishs", "Click power +2", 100, 0, 2, [0,0,0], 1, 0, "assets/icon_2_0.png"), //+2 mouse clicks
    new Upgrade("Three fingers", "Click power +3", 250, 0, 3, [0,0,0], 2, 0, "assets/icon_13_0.png"), //+3 mouse clicks
    new Upgrade("Five fingers", "Click power +5", 500, 0, 5, [0,0,0], 3, 1, "assets/icon_14_0.png"), //+5 mouse clicks
    new Upgrade("Ten fingerss", "Click power +10", 1000, 0, 10, [0,0,0], 4, 1, "assets/icon_15_0.png"), //+10 mouse clicks
    new Upgrade("Fifty fingers", "Click power +20", 500, 0, 50, [0,0,0], 5, 2, "assets/icon_16_0.png"), //+50 mouse clicks
    new Upgrade("Hundered fingerss", "Click power +100", 5000, 0, 100, [0,0,0], 6, 2, "assets/icon_17_0.png"), //+100 mouse clicks
    new Upgrade("Thousand fingerss", "Click power +1k", 50000, 0, 1000, [0,0,0], 7, 2, "assets/icon_18_0.png"), //+1000 mouse clicks
    new Upgrade("10k fingerss", "Click power +10k", 500000, 0, 10000, [0,0,0], 8, 2, "assets/icon_19_0.png"), //+10000 mouse clicks
    new Upgrade("100k fingerss", "Click power +100k", 8000000, 0, 100000, [0,0,0], 9, 2, "assets/icon_20_0.png"), //+100000 mouse clicks
    new Upgrade("Million fingerss", "Click power +1M", 50000000, 0, 1000000, [0,0,0], 10, 3, "assets/icon_21_0.png"), //+1000000 mouse clicks
    new Upgrade("Billion fingerss", "Click power +1B", 100000000000, 0, 1000000000, [0,0,0], 11, 3, "assets/icon_22_0.png"), //+1000000000 mouse clicks
    //13
    new Upgrade("Extra hand", "+50 % click power", 1000, 0.50, 0, [0,0,0], 4, 0, "assets/icon_15_12.png"), //+50% mouse clicks
    new Upgrade("Double Hands", "2x click power", 20000, 1, 0, [0,0,0], 8, 1, "assets/icon_17_12.png"), //+100% mouse clicks
    new Upgrade("Glowes", "+150 % click power", 100000, 1.5, 0, [0,0,0], 9, 1, "assets/icon_18_12.png"), //+100% mouse clicks
    new Upgrade("Feet are hands now", "3x click power", 15000000, 2, 0, [0,0,0], 10, 2, "assets/icon_19_12.png"), //+100% mouse clicks
    new Upgrade("More daddy!", "4x click power", 20000000, 3, 0, [0,0,0], 11, 2, "assets/icon_20_12.png"), //+200% mouse clicks
    new Upgrade("Handy hands", "10x click power", 10000000000000, 9, 0, [0,0,0], 12, 3, "assets/icon_24_12.png"), //+200% mouse clicks
    new Upgrade("Autoclicker's hands", "20x click power", 300000000000000, 19, 0, [0,0,0], 13, 3, "assets/icon_23_12.png"), //+300% mouse clicks
    //20
    new Upgrade("Speed Potion +25 %", "Produce 🍪 faster +25 %", 7500, 0.50, 0, [0.25,0.25,0.25], 5, 1, "assets/icon_16_6.png"), //+25% to all factories
    new Upgrade("Speed Potion +50 %", "Produce 🍪 faster +50 %", 4000000, 0.50, 0,  [0.5,0.5,0.5], 20, 2, "assets/icon_19_6.png"), //+50% to all factories
    new Upgrade("Speed Potion +75 %", "Produce 🍪 faster +75 %", 50000000, 0.50, 0, [0.75,0.75,0.75], 21, 2, "assets/icon_21_6.png"), //+75% to all factories
    new Upgrade("Speed Potion +100 %", "Produce 🍪 faster +100 %", 100000000000, 0.50, 0, [1,1,1], 22, 3, "assets/icon_22_6.png"), //+100% to all factories
    new Upgrade("Speed Potion +150 %", "Produce 🍪 faster +150 %", 40000000000000, 0.50, 0, [1.5,1.5,1.5], 23, 3, "assets/icon_23_6.png"), //+150% to all factories
    new Upgrade("Speed Potion +200 %", "Produce 🍪 faster +200 %", 200000000000000, 0.50, 0, [2,2,2], 24, 3, "assets/icon_24_6.png"), //+200% to all factories
    //26
    new Upgrade("[Rebirth] Level 1 Bonus", "Prestige Boost (lvl 1)", -5000, 3, 3, [1,1,1], -1, 2, "assets/icon_10_0.png"), //2x everything
    new Upgrade("[Rebirth] Level 2 Bonus", "Prestige Boost (lvl 2)", -50000000, 6, 6, [2,2,2], 26, 3, "assets/icon_10_1.png"), //2x everything
    //28
    new Upgrade("Click 1/10 of passive income", "+10 % of passive 🍪/s per click", 666666666666666, 0, 0, [0,0,0], 10, 0, "assets/icon_0_12.png"), //2x everything
    
    
    
    
    
    
    
    //new Upgrade("Super", 0, 0, 0, [0,0,0], 0, 0, "assets/icon__.png"), //
]

game.BuildingList = bl;
game.UpgradeList = ul;


// Call the function
passiveIncome();
updateUpgradeButtonsOutside();
updateBuildingButtonsOutside();

function formatNumber(number) {
    if (number < -1000000) {
        return (number / 1000000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'M';
    } else if (number < -1000) {
        return (number / 1000).toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }) + 'k';    
    } else if (number < 1000) {
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

function updateCookieCount(amount) {
    var cookieCountElement = document.getElementById("cookieCount");
    cookieCountElement.innerHTML = formatNumber(Math.floor(amount)) + "🍪";
}


function clickCookie() {
    game.totalCookies += game.clickPerCookie;
    if (ul[28].isPurchased == true) {
        game.totalCookies += game.passiveCookies / 10;
    }
    ClickSFX()
    //updateCookieCount(game.totalCookies);
}
