let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;//player x,player o
let count =0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,8],
    [6,7,8],
   ];
   boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){//player0
            box.innerText ="0";
            turn0= false;
        } else{
            box.innerText="x";
            turn0 = true;
        }
        box.disabled=true;
        count++;
        let iswinne =checkwinner();
        // function on check winner
        if(count===9&& !iswinner) {
            gamedraw();
        }
    });
   });
   const gamedraw=()=>{
    msg.innerText=`Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disablboxes();   //call by disablebox
   };

   //diable button
   const disablboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
   };
//enable button
   const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box .innerText="";
    }
   };



//const function
   const showwinnwer=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
  disablboxes();//disablebox
   };

 
   //check function
   const checkwinner =()=>{
    for( let pattern of winpatterns){
       
    let post1val=boxes[pattern[0]].innerText;
    let post2val=boxes[pattern[1]].innerText;
    let post3val=boxes[pattern[2]].innerText;
    
    if(post1val !="" && post2val !="" && post3val !=""){
    if(post1val===post2val && post2val===post3val){
        showwinnwer(post1val);//function on winner
    }
   }

  }
   };

   //reset game
   const resetgame=()=>{
    turn0=true;
    count=0;
  enableboxes(); //call fuction
  msgcontainer.classList.add("hide");
   };

   newgamebtn.addEventListener("click",resetgame);
   resetbtn.addEventListener("click",resetgame);