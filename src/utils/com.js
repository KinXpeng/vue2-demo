let obj = {
	name: 'tom',
	age: 18
}

function person(val) {
	console.log(this.name, this.age, val)
}
