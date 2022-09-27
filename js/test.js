
var names=new Array();

names[0]="Jay";
names[1]="Tim";
names[2]="jim";
names[3]="kim";
names[4]="sim";

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