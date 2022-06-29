let player = 1;
let turns = 0;
let gameover = false;
const modeui = document.getElementById("start");
const board = document.getElementById("main");
function gamemode(type){
    modeui.style.display = "none";
    board.style.display = "flex";
}



function play(cord){
   
    let lookfor = document.getElementById(cord);
    if(lookfor.innerText=="" && gameover==false){
        turns++;
        if(player==1){
            lookfor.innerText = "X";
        }else{
            lookfor.innerHTML ="O";
        }
    //Switchs Turns After This 
    if(player==1){
        conditions("X");
        player=2;
        document.getElementById("turn").innerHTML = "Player 2 Turn"
        console.log(player);
    }else{
        conditions("O")
        player=1;
        console.log(player);
        document.getElementById("turn").innerHTML = "Player 1 Turn"
    }
  
    }
  
    if(turns==9){}  

}

function conditions(symbol){
    for(let ax =0; ax<=6; ax=ax+3){
        if(document.getElementById(ax).innerText==symbol && document.getElementById(ax+1).innerText==symbol && document.getElementById(ax+2).innerText==symbol){
            alert("4K");
            }
    }






}