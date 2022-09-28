
var names=new Array();

names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jason";
names[4]="Paul";
names[4]="Frank";
names[4]="Larry";
names[4]="Paula";
names[4]="Laura";
names[4]="jim";

for(var i=0; i<names.length; i++)
{
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
    {
console.log("Goodbye "+names[i]);
    }else
    {
console.log("Hello "+names[i]);
    }
}