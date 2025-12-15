const password = process.argv[2]
if (!password){
   console.log("Invalid");
   process.exit(0);
}

let Islon =password.length >= 8;
let number= password.includes("0-9");
let uppercasr=password.includes("A-Z"); 

if (Islon && number && uppercasr){
   console.log("valid");}
else{
   console.log("Invalid");
}
