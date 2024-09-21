document.getElementById("all").onclick=function(){
    document.getElementById("appetizer").style.display='block';
    document.getElementById("rice").style.display='block';
    document.getElementById("drink").style.display='block';
    document.getElementById("dessert").style.display='block';

}


document.getElementById("appetizerBtn").onclick=function(){
    document.getElementById("appetizer").style.display='block';
    document.getElementById("rice").style.display='none';
    document.getElementById("drink").style.display='none';
    document.getElementById("dessert").style.display='none';

}

document.getElementById("riceBtn").onclick=function(){
    document.getElementById("rice").style.display='block';
    document.getElementById("appetizer").style.display='none';
    document.getElementById("drink").style.display='none';
    document.getElementById("dessert").style.display='none';

}
document.getElementById("drinkBtn").onclick=function(){
    document.getElementById("drink").style.display='block';
    document.getElementById("appetizer").style.display='none';
    document.getElementById("rice").style.display='none';
    document.getElementById("dessert").style.display='none';

}
document.getElementById("dessertBtn").onclick=function(){
    document.getElementById("dessert").style.display='block';
    document.getElementById("appetizer").style.display='none';
    document.getElementById("rice").style.display='none';
    document.getElementById("drink").style.display='none';

}