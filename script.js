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
//If you want add so that the array thats correct gets a color change
function conditions(symbol){
    for(let ax =0; ax<=6; ax=ax+3){
        if(document.getElementById(ax).innerText==symbol && document.getElementById(ax+1).innerText==symbol && document.getElementById(ax+2).innerText==symbol){
            gameover = true;
            document.getElementById(ax).style.backgroundColor = "green";
            document.getElementById(ax+1).style.backgroundColor ="green";
            document.getElementById(ax+2).style.backgroundColor = "green";
            
            }
    }
    for(let ay=0; ay<=2;ay=ay+1){
        if(document.getElementById(ay).innerText==symbol && document.getElementById(ay+3).innerText==symbol && document.getElementById(ay+6).innerText==symbol){
            gameover = true;
          
            document.getElementById(ay).style.backgroundColor = "green";
            document.getElementById(ay+3).style.backgroundColor ="green";
            document.getElementById(ay+6).style.backgroundColor = "green";
            
            }
    }

    if(document.getElementById(0).innerText==symbol && document.getElementById(4).innerText==symbol && document.getElementById(8).innerText==symbol){
        gameover = true;
        document.getElementById(0).style.backgroundColor = "green";
            document.getElementById(4).style.backgroundColor ="green";
            document.getElementById(8).style.backgroundColor = "green";
           
        }else if(document.getElementById(2).innerText==symbol && document.getElementById(4).innerText==symbol && document.getElementById(6).innerText==symbol){
            gameover = true;
            document.getElementById(2).style.backgroundColor = "green";
            document.getElementById(4).style.backgroundColor ="green";
            document.getElementById(6).style.backgroundColor = "green";
           
        }

}


