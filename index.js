var course =prompt("which course prefer attendded (Deutsch or English)?");
while(course !== 'Deutsch' && course !== "English"){
    course= prompt('please enter Deutsch or English');
}

var imageNum = prompt('how many level do you want to join?')




var NoLevel =prompt("how many level do you want to join?");
var status
if (NoLevel >1 && NoLevel <=3) {
 status="congrats you gain 15% DISCOUNT"   ;
}else if (NoLevel >3 && NoLevel <=6)  {
    status="congrats you gain 30% DISCOUNT" ;
}else if (NoLevel>6) {
    status="congrats you gain 50% DISCOUNT";
} else {
    status="unfortunatly no disscount";
} 
document.write(status)
document.getElementById(status)







confirm ("Are you happy with us ?");
alert ("THANK YOU FOR VISIT");
