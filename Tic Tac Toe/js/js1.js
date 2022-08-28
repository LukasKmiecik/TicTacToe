// ZMIENNE
const bodd = document.querySelector(".bodd");
const info = document.querySelector(".info");
const bord = document.querySelector(".plansza");
const size = document.getElementById("size").value;
const game = document.querySelector(".game");
const round = document.querySelector(".round");
const pox = document.querySelector(".pox");
const poo = document.querySelector(".poo");
const pvp = document.querySelector(".pvp");
const x = 1;
const o = bordSize() + 1;
let n = Math.pow(bordSize(),2);
let a = 0;
let aip = 0;
let pointX = 0;
let pointO = 0;
let oponent = 0;

// FUNKCJE

//pobranie wielkosci planszy
function bordSize() {//return sizeInt
    let sizeInt = parseInt(size);
    if(sizeInt>9)
    {
        sizeInt = 9;
        info.innerHTML = "Nie za duża pa plansza? Sugeruje 9x9 "
    }
    return sizeInt;
}

//grid
function grid() {//return gridPoint
    let gridPoint="";
    for (let i=0;i<bordSize();i++)
    {
        gridPoint += " 50px";
    }
    return gridPoint;
}

//budowa planszy
for (let i=0;i<n;i++)
{
    const po = document.createElement("div");
    po.classList.add("bu");
    po.tabIndex = 0;
    bord.appendChild(po);
}

//wypelnienie pol
const pole = document.querySelectorAll(".bu");

for (let i=0;i<n;i++)
{
    pole[i].addEventListener("click",()=>{
        if(pole[i].tabIndex !=0)
        {
            if(pole[i].tabIndex == 1)
            {
                info.innerHTML = "Pole zajete!!"
            }
            else if(pole[i].tabIndex == 2)
            {
                if(a < n) info.innerHTML = "Koniec, nie ma co klikac!!";
                
            }
        }
        else if(a <= n)
        {
            if(a%2 == 0)
            {
                info.innerHTML = "";
                pole[i].innerHTML = "X";
                pole[i].tabIndex = x;
                if(pvp.tabIndex == -1)
                {
                  a+=1;
                }
                else
                {
                    a=a;
                    AI();
                }
                winner();
            }
            else
            {
                info.innerHTML = "";
                pole[i].innerHTML = "O";
                pole[i].tabIndex = o;
                if(pvp.tabIndex == -1)
                {
                  a+=1;
                }
                else
                {
                    a=a;
                    AI();
                }
                winner();
            }
        }
    });
}
// tablice z wierszami i kolumnani
function fillRows() {
    let rows = [];
    for (let i=0;i<size;i++)
    {
        rows[i] = [];
    }
    for (let i=0;i<size;i++)
    {
        for (let j=0;j<size;j++)
        {
            rows[i][j] = pole[i*size+j].tabIndex;
        }
    } 
    return rows;   
}

// kto wzyciezyl
function winR() {
    let r = [];
    let sum = 0;
    for (let i=0;i<size;i++)
    {
        r[i] = [];
        for (let j=0;j<size;j++)
        {
            sum += fillRows()[i][j];
        }
        r[i].push(sum);
        sum = 0;
    }
return r;
}

function winC() {
    let c =[];
    let sum = 0;
    for (let i=0;i<size;i++)
    {
        c[i] = [];
        for (let j=0;j<size;j++)
        {
            sum += fillRows()[j][i];
        }
        c[i].push(sum);
        sum = 0;
    }
return c;
}

function winP1() {
    let p1 = 0;
    for (let i=0;i<size;i++)
    {
        p1 += fillRows()[i][i];
    }
    return p1;
}

function winP2() {
    let p2 = 0;
    
    for(let i=size-1;i<n-size+1;i+=(size-1)*1)
    {
        p2 += pole[i].tabIndex;
    }
    return p2;
}

function winner() {
    if(bordSize() <= 5)
    {
        for (let i=0;i<size;i++)
        {
            if(winR()[i] == size*x || winC()[i] == size*x || winP1() == size*x ||winP2() == size*x)
            {
                info.innerHTML = "Wygrywa X";
                pole.forEach(el => {el.tabIndex = 2;});
                pointX++;
                pox.innerHTML = "X: " + pointX;
                poo.innerHTML = "O: " + pointO;
                return x;
            }
            else if(winR()[i] == size*o || winC()[i] == size*o || winP1() == size*o || winP2() == size*o)
            {
                info.innerHTML = "Wygrywa O";
                pole.forEach(el => {el.tabIndex = 2;});
                pointO++;
                pox.innerHTML = "X: " + pointX;
                poo.innerHTML = "O: " + pointO;
                return o;
            }
        }
    }
    else
    {
        for (let i=0;i<size;i++)
        {
            if(winR()[i] == 5*x || winC()[i] == 5*x || winP1() == 5*x ||winP2() == 5*x)
            {
                info.innerHTML = "Wygrywa X";
                pole.forEach(el => {el.tabIndex = 2;});
                pointX++;
                pox.innerHTML = "X: " + pointX;
                poo.innerHTML = "O: " + pointO;
                return x;
            }
            else if(winR()[i] == 5*o || winC()[i] == 5*o || winP1() == 5*o || winP2() == 5*o)
            {
                info.innerHTML = "Wygrywa O";
                pole.forEach(el => {el.tabIndex = 2;});
                pointO++;
                pox.innerHTML = "X: " + pointX;
                poo.innerHTML = "O: " + pointO;
                return o;
            }
        }
    }
}

//nowa gra
function newGame() {
    a = 0;
    rows = new Array();
    info.innerHTML = "";
    poo.innerHTML = "";
    pox.innerHTML = "";
    pvp.innerHTML = "PvP";
    pointO = 0;
    pointX = 0;
    oponent = 0;
    move = 0;
    pvp.tabIndex = -1;
    pole.forEach(el => {
        el.tabIndex = null;
        el.innerHTML = "";
    });
}

//nowa runda
function newRound() {
    move = 0;
    a = 0;
    rows = new Array();
    info.innerHTML = "";
    pole.forEach(el => {
        el.tabIndex = null;
        el.innerHTML = "";
    });
}
//AI
function playAi() {
    oponent++;
    if(oponent %2 != 0)
    {
        pvp.tabIndex = 0;
        pvp.innerHTML = "AI";
    }
    else
    {
        pvp.tabIndex = -1;;
        pvp.innerHTML = "PvP";
    }
    
    return pvp.tabIndex;
}
// STYLE
bord.style.gridTemplateColumns = grid();
bord.style.gridTemplateRows = grid();


for (let i=0;i<n;i++)
{
    pole[i].style.boxShadow = "black 0px 6px 10px -10px, black 6px 0px 10px -10px";
}

for (let i=bordSize()-1;i<n;i=i+bordSize())
{
    pole[i].style.boxShadow = "black 0px 6px 10px -10px, black 0px 0px 0px 0px";
}
for (let i=bordSize()*bordSize()-bordSize();i<n;i++)
{
    pole[i].style.boxShadow = "black 0px 0px 0px 0px, black 6px 0px 10px -10px";
}
for (let i=n-1;i<=n;)
{
    pole[i].style.boxShadow = "none";
    break;
}

// EVENTS
document.addEventListener("keypress", (e)=>{//wyczyscic plansze ???
    if (e.keyCode===13) document.location.reload();
});
game.addEventListener("click", newGame);
round.addEventListener("click", newRound);
pvp.addEventListener("click", playAi);
