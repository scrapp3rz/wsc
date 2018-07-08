/*
Compléter la fonction display() afin d'afficher la ville ainsi que les 2 listes de sports
*/


const address = {
	city: "Anglet",
	state: "FR",
	zip: 64600
};

const sportList = [' running', ' fitness']
const otherSportList = [' bodysurf', ' ballade en vélo']

function display({ city }, sportList, otherSportList = [], ...rest){
	let sports = [...sportList, ...otherSportList, ...rest];
	
	console.log(`Si comme moi tu habites à  ${city}, on pourra pratiquer ensemble quelques sports comme ${sports}.`);
}

display(address, sportList, otherSportList);