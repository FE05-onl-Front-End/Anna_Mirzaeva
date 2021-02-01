const animals = [
    {
        isName: 'Emma',
        species: 'tiger',
        age: 5,
        isHealthy: true,
        status: 'walk',
        wardenName: 'Kortny',
    },
    {
        isName: 'Krut',
        species: 'elephant',
        age: 2,
        isHealthy: true,
        status: 'cubicle',
        wardenName: 'Jemma',
    },
    {
        isName: 'Brut',
        species: 'crocodile',
        age: 26,
        isHealthy: true,
        status: 'lake',
        wardenName: 'Kortny',
    },
    {
        isName: 'Jeam',
        species: 'giraffe',
        age: 6,
        isHealthy: true,
        status: 'walk',
        wardenName: 'Jemma',
    },
    {
        isName: 'Optic',
        species: 'lemur',
        age: 1,
        isHealthy: false,
        status: 'cubicle',
        wardenName: 'Kile',
    },
]

function deleteObjectFromArray (animals) {
    let animalName = prompt ('Введите имя животного, которого хотите исключить из списка.');
    let index = getObjectIndexByName(animalName);
    animals.splice (index,1);
}

function addObjectToArray () {
    let name = prompt ('Введите имя животного.');
    let animalSpecies = prompt ('Введите вид животного.');
    let animalAge = prompt ('Введите возраст животного.');
    let animalHealth = prompt ('Если животное в порядке - введите "true", если нет - "false".');
    let animalStatus = prompt ('Где находится животное?');
    let animalWarden = prompt ('Введите имя смотрителя.');
    let newAnimal = {
        isName: name,
        species: animalSpecies,
        age: animalAge,
        isHealthy: animalHealth,
        status: animalStatus,
        wardenName: animalWarden,  
    };
    animals.push(newAnimal)
}

function addFeatureToArray () {
    let animalName = prompt ('Введите имя животного.');
    let propertyName = prompt ('Введите параметр, который хотите добавить.');
    let propertyValue = prompt ('Введите содержание парметра.');
    let index = getObjectIndexByName(animalName);
    animals[index][propertyName] = propertyValue;
}

function getObjectIndexByName (animalName) {
    for (let index = 0; index < animals.length; index++) {
        if (animals[index].isName.toLowerCase() === animalName.toLowerCase()) {
            return index;
        }
        else if (index === animals.length - 1) {
            alert ('Такого животного в списке нет.')
        }
    }
}