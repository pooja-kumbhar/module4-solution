
var names=new Array();

names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jason";
names[4]="Paul";
names[5]="Frank";
names[6]="Larry";
names[7]="Paula";
names[8]="Laura";
names[9]="jim";




(function(window){
    var byeSpeaker={};
  byeSpeaker.goodbye=function() {
    for(var i=0; i<names.length; i++)
{
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
    {
console.log("Goodbye "+names[i]);
    } 
}}
window.byeSpeaker=byeSpeaker;
})(window);


(function(window){
    var helloSpeaker={};
  helloSpeaker.hello=function() {
    for(var i=0; i<names.length; i++)
{
    if(names[i].charAt(0)!=='J' && names[i].charAt(0)!=='j')
    {
console.log("Hello "+names[i]);
    } 
}}
window.helloSpeaker=helloSpeaker;
})(window);


helloSpeaker.hello();
byeSpeaker.goodbye();
