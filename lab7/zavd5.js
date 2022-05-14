function shownewwindowSearch(){
    window1=document.getElementById("mowwindow");
    window1.style.visibility="visible";
    document.getElementById("windowh1").innerHTML="Whoa! You find me!"
    button1=document.getElementById("windowbutton");
    button1.style.visibility="visible";
    black=document.getElementById("blackbox");
    black.style.visibility="visible";    

    button1.textContent="Hide back";


}
function shownewwindowRun(){
    window1=document.getElementById("mowwindow");
    window1.style.visibility="visible";
    document.getElementById("windowh1").innerHTML="Pleace dont run!"
    button1=document.getElementById("windowbutton");
    button1.style.visibility="visible";
    button1.textContent="Close";
    black=document.getElementById("blackbox");
    black.style.visibility="visible";


}
function hiddenblackbox(){
    window1=document.getElementById("mowwindow");
    window1.style.visibility="hidden";
    document.getElementById("windowh1").innerHTML=""
    
    black=document.getElementById("blackbox");
    black.style.visibility="hidden";
    
    button1=document.getElementById("windowbutton");
    button1.style.visibility="hidden";  
}