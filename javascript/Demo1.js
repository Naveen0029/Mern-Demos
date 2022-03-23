//Mutation 
//https://daveceddia.com/react-redux-immutability-guide/
//https://daveceddia.com/react-redux-immutability-guide/#what-is-immutability
let person = {
	firstName: "Bob",
	lastName: "Loblaw",
	address: {
		street: "123 Fake St",
		city: "Emberton",
		state: "NJ"
	}
}

function giveAwesomePowers(person) {
	person.specialPower = "invisibility";
	return person;
}

// // Initially, Bob has no powers :(
//     console.log(person);

//     // Then we call our function...
//     let samePerson = giveAwesomePowers(person);
    
//     // Now Bob has powers!
//     console.log(person);
//     console.log(samePerson);
    
//     // He's the same person in every other respect, though.
//     console.log('Are they the same?', person === samePerson); // true
    
    

    // Initially, Bob has no powers :(
console.log(person);

// Then we call our function...
var newPerson = giveAwesomePowers(person);

// Now Bob's clone has powers!
console.log(person);
console.log(newPerson);

// The newPerson is a clone
console.log('Are they the same?', person === newPerson); // false

