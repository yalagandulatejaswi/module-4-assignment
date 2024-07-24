var names=new Array();
names[0]="Teju";
names[1]="Jhansi";
names[2]="kavi";
names[3]="jani";
names[4]="Aruna";
names[5]="Srii";
names[6]="Ajay";
names[7]="Jhon";
names[8]="Jheen";
names[9]="Abhi";
for(var i=0;i<names.length;i++){
   if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j')
   {
    console.log("Goodbye"+names[i])
   }
   else{
    console.log("Hello"+names[i])
   }
}