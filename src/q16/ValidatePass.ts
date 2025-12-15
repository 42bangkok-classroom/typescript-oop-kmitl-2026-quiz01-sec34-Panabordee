const password = process.argv[2]
if (!password){
   console.log("Invalid");
   process.exit(0);
}

const long: boolean=password.length >= 8
const number: boolean = "[0-9]".test(password)
const uppercasr:coolean = 

