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
        player=2;
        document.getElementById("turn").innerHTML = "Player 2 Turn"
        console.log(player);
    }else{
        player=1;
        console.log(player);
        document.getElementById("turn").innerHTML = "Player 1 Turn"
    }
    }
  
    if(turns==9){}  

}