//  Первая елка
 let row = prompt('Какой высоты будет ваша елочка?');

 let star = '';

 for(var key = 0; key < row; key++){
     star += '*';
     console.log(star)
 };


// Вторая елка
 let row = prompt('Какой высоты будет ваша елочка?');

while(row > 0){
    let star = '';

    for(let key = 0; key < row; key++){
        star += '*';
    }
    console.log(star);
    row = row - 1;
};