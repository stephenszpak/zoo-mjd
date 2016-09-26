function Animal () {
	this.name = null;
};
Animal.prototype.setName = function(name) {
	this.name = null;
};

function Tenodera () {
  this.genusName = null;
}
Tenodera.prototype = new Animal();

function TenoderaSinensis () {
  this.speciesName = null;
}
TenoderaSinensis.prototype = new Tenodera();

let wolf = new Animal();
wolf.name = "Wolf";
wolf.genusName = "Doggie";
wolf.speciesName = "Dog";

let bear = new TenoderaSinensis();
bear.genusName = "Ursavus";
bear.name = "Bear";
bear.speciesName = "Ursine";

let lion = new TenoderaSinensis();
lion.name = "Lion";
lion.genusName = "Panthera";
lion.speciesName = "cat";

// console.log("lion", wolf);
