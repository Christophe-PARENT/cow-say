const myIdentity = require("./information.js");

let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `I'm ${myIdentity.name} from ${myIdentity.campus}`,
	e : "oO",
	T : "U ",
}));