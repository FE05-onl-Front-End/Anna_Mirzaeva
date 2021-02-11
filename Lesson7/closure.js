const randomArray = () => {
    let randomNumbers = [];

    return (newNumber) => {
        if (randomNumbers.indexOf(newNumber) === -1) {
            console.log(newNumber);
            randomNumbers.push(newNumber);
        }
        
        return randomNumbers;
    }  
}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const generateRandomArray = () => {
    let result = [];
    const random = randomArray();

    while (result.length < 100) {
        result = random(generateRandomNumber());
    };

    return result;
}

const x = randomArray();
const y = randomArray();

