


var name1 = (prompt('Enter your Name'));
var Biology = Number(prompt("Biology number"));
var English = Number(prompt('English number'));
var Mathmematice = Number(prompt('Mathmematice number'));
var PakStudies = Number(prompt('Pak Studies number'));
var Chemitey = Number(prompt('Chemitey number'));
var Physics = Number(prompt('Physics number'));
var Sindhi = Number(prompt('Sindhi number'));


var totle = (Biology + English + Mathmematice + PakStudies + Chemitey + Physics + Sindhi);

var percentage = (totle / 700) * 100

if (percentage >= 80 && percentage < 101) {
    document.write( name1 + " "+ 'A+')
}
else if (percentage >= 70 && percentage < 80) {
    document.write( name1 + " "+  'A')
}
else if (percentage >= 60 && percentage < 70) {
    document.write( name1 + " "+ 'B')
}
else if (percentage >= 50 && percentage < 60) {
    document.write( name1 + " "+ 'C')
}
else if (percentage >= 40 && percentage < 50) {
    document.write( name1 + " "+ 'D')
}
else if (percentage >= 30 && percentage < 40) {
    document.write( name1 + " "+ 'E')
}
else {
    document.write( name1 +" "+  ' your are Fail ')
}














