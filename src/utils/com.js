const list = [
	{
		id: 1,
		name: '测试11',
		age: 20,
		data: {
			pkID: 11,
			pkName: '测试11-11'
		}
	},
	{
		id: 2,
		name: '测试22',
		age: 18,
		data: {
			pkID: 22,
			pkName: '测试22-11'
		}
	},
	{
		id: 3,
		name: '测试33',
		age: 23,
		data: {
			pkID: 33,
			pkName: '测试33-11'
		}
	},
	{
		id: 4,
		name: '测试44',
		age: 18,
		data: {
			pkID: 44,
			pkName: '测试44-11'
		}
	}
]

function fn(arr, id) {
	return arr.map(item => (item.id == id ? item.name : null))
}

console.log(fn(list, 2))
