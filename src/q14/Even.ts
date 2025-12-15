const loop6 = Number(process.argv[2])
if (isNaN(loop6)){
   console.log("Plese Enter the Number");}
else{
for (let i=0; i <= loop6 ;i++){
    if(i%2 === 0){
      console.log(i);}
    }
   return 0;
}
