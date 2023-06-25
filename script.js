//complete this code
class Animal {
	constructor (species) {
		this._species=species;
	}
	get species() {
		return this._species;
	}
	makeSound() {
        if(this.species=='cat') {this.purr()}
		else {
			this.bark();
		}
	}
}


class Dog extends Animal {
		constructor(species) {
		super(species);
	}

	bark() {
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(species) {
		super(species);
	}

	purr() {
		console.log("purr");
	}
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
