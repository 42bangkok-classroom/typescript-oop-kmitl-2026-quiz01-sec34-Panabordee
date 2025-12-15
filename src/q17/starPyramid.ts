const loop1 = Number(process.argv[2])
let str = ""
if (isNaN(loop1)){
   console.log("Plese Enter the Number");}
else{
for (i=1;i <= loop1;i++){
    str += "*";
  console.log(str)}
   return 0;
}
