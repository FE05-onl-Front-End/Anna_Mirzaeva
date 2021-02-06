let usersAge = {
    ivanov: '19',
    petrov: '17',
    sidorov: '21'
 }

 let overeighteen = [];
 let undereighteen = [];

 let keys = Object.keys(usersAge);
 keys.forEach ((key) => {
    usersAge[key] > 18 ? overeighteen.push({name: key, age: usersAge[key]}) : undereighteen.push({name: key, age: usersAge[key]})
})

console.log(overeighteen)
console.log(undereighteen)