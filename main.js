

function bold() {
    var b = document.getElementById("text").style.fontWeight;
        if (b == 'normal' ) {
        document.getElementById("text").style.fontWeight = 'bold';
    } else {
        document.getElementById("text").style.fontWeight = 'normal';
    }
}
function italic(){
    var  b =document.getElementById("text").style.fontStyle;
    if (b=='normal') {
        document.getElementById("text").style.fontStyle ='italic';
    }else {
        document.getElementById("text").style.fontStyle ='normal';  
    }
}
function underline (){
    var  b =document.getElementById("text").style.textDecoration;
    
    if (b!='none' ) {
        document.getElementById("text").style.textDecoration ='none';
    }
    else {
        document.getElementById("text").style.textDecoration ='underline';  
    } 
}
function changesize(){
    var userInput = document.getElementById('fontsize').value;
    document.getElementById('text').style.fontSize = userInput;

}
function changefamily(){
    var userInput = document.getElementById('fontfamily').value;
    document.getElementById('text').style.fontSize = userInput;

}
