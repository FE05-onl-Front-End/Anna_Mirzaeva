function figureChanged() {
    draw(document.getElementById("figure").value);
  }
  
  function draw(elementName) {
    let { element, emptyElement } = getElements();
  
    removeStyles(element, emptyElement);
    element.setAttribute('class', elementName);
  
    elementName === 'triangle' 
      ? setTriangleStyle(element, 'white') 
      : setElementStyle(element, 'white');
  }
  
  function setBackground(elementColor) {
    let element = document.getElementById('element');
  
    if (element.className === 'triangle') {
      setTriangleStyle(element, elementColor);
      return;
    }
  
    setElementStyle(element, elementColor);
  }
  
  function setElementStyle(element, elementColor) {
    element.style.background = elementColor;
    (elementColor === 'white') 
      ? element.style.border = '1px solid black'
      : element.style.border = '1px solid ' + elementColor;
  }
  
  function setTriangleStyle(element, elementColor) {
    let { emptyElement } = getElements();
  
    emptyElement.classList.remove("empty");
  
    if (elementColor === 'white') {
      element.style.borderBottom = '50px solid black';
      emptyElement.setAttribute('class', 'empty');
      return;
    }
  
    element.style.borderBottom = '50px solid ' + elementColor;
  }
  
  function removeStyles(element, emptyElement) {
    element.removeAttribute('class');
    element.removeAttribute('style');
  
    if (emptyElement.classList !== undefined)
      emptyElement.classList.remove("empty");
  }
  
  function getElements() {
    return { 
        element: document.getElementById('element'),
        emptyElement: document.getElementById('empty')
      }
  }