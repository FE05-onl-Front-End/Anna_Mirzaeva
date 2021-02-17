document.getElementById('addUser').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('modal').style.display = 'block';
})

let closeForm = (e) => {
    if (e.target.className === 'popap-head'
    || e.target.className === 'popap-main'
    || e.target.className === 'popap-btn'
    || e.target.className === 'popap-form'
    || e.target.tagName === 'SPAN'
    || e.target.tagName === 'INPUT'
    || e.target.tagName === 'LABEL') {
        return;
    }

    document.getElementById('modal').style.display = 'none';
}

let submit = (e) => {
    e.stopPropagation();
    let info = document.getElementsByTagName('input');
    let firstName = info['first-name'];
    let lastName = info['last-name'];
    let age = info['age'];

    let validation = true;

    for (let element of info) {
        if (!validateInput(element)) {
          validation = false;
        }
    }
    
    if (validation) {
      let user = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value
    };

    addFormValueToTable(user);
    document.getElementById('modal').style.display = 'none';
    makeInputValueEmpty(info);
  }
}

let validateInputHandler = (e) => {
    validateInput(e.target);
}

let validateInput = (element) => {
    // element.value - значение
    if(document.getElementById(element.name) !== null)
      deleteErorLabel(element.name);

    if (element.value === '') {
        createErrorLabel(element, 'Неверное значение');
        return false;
    }

    if (element.value.length > 10) {
        createErrorLabel(element, 'Неверное значение');
        return false;
    }

    if (element.name === 'age' 
    && (!Number.isInteger(+element.value) 
    || +element.value < 0 
    || +element.value > 135)) {
        createErrorLabel(element, 'Неверное значение');
        return false;
    }

    return true;
}

let createErrorLabel = (element, message) => {
    let label = document.createElement('label');
    label.setAttribute("id", element.name);
    label.innerText = message;
    element.after(label);
}

let deleteErorLabel = (elementName) => {
    document.getElementById(elementName).remove();
}

let makeInputValueEmpty = (info) => {
    for (let element of info) {
      element.value = "";
    }
}

let addFormValueToTable = (user) => {
    addTableRowToTable(user);
}

let returnNameIfEmpty = (element) => {
    return element.value === '' ? `${element.name} ` : ''
}

let returnNameIfTooManySymbols = (element) => {
    return element.value.length > 10 ? `${element.name} ` : ''
}

const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }, {
        firstName: 'Hanna',
        lastName: 'Ruter',
        age: 15
    }
]

let addValuesToTable = (data) => {
    data.forEach((item) => {
        addTableRowToTable(item)
    })
}

let addTableRowToTable = (row) => {
    let table = document.getElementById('item');
    let element = document.createElement('tr');
    addCellToTableRow(element, row.firstName);
    addCellToTableRow(element, row.lastName);
    addCellToTableRow(element, row.age);
    table.append(element);
}

let addCellToTableRow = (element, elementValue = "") => {
    let tableRow = document.createElement('td');
    tableRow.innerHTML = elementValue;
    tableRow.style.textAlign = 'center';
    tableRow.style.padding = '30px';
    element.append(tableRow)
}

addValuesToTable(data);