let player = 1;
let turns = 0;
const modeui = document.getElementById("start");
const board = document.getElementById("main");
function gamemode(type){
    modeui.style.display = "none";
    board.style.display = "flex";
}



function play(cord){
    turns++;
    let lookfor = document.getElementById(cord);
    if(player==1){
        lookfor.innerText = "X";
    }else{
        lookfor.innerHTML ="O";
    }
    
//Switchs Turns After This 
    if(player==1){
    player=2;
    console.log(player);
}else{
    player=1;
    console.log(player);
}
}