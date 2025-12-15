const color = String(process.argv[2])
let colorlower = color.toLowerCase()
switch(colorlower){
   case "red":
    console.log("Stop");
    break;
   case "yellow":
    console.log("Caution");
    break;
   case "green":
    console.log("Go");
    break;
   default:
    console.log("Unknown");
    break;
}
