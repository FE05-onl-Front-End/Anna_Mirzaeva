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

addObjectToArray (animalInfo = { animalName: '', animalSpecies: '', animalAge: '', animalHealth: '', animalStatus: '', animalWarden:''});

function addObjectToArray (animalInfo) {
    const { isName, species, age, status, wardenName } = animalInfo
    animals.push(animalInfo)
    alert(`Животное ${isName} вида ${species} возраста ${age} находтся в состоянии ${status} под наблюдением ${wardenName}`)
}

addPropertyToArray (animalProperty = {animalName: '', propertyName: '', propertyValue:''});

function addPropertyToArray (animalProperty) {
    let index = getObjectIndexByName(animalProperty.animalName);
    animals[index][animalProperty.propertyName] = animalProperty.propertyValue;
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