document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX);
        revisedMousePosY += (mousePosY - revisedMousePosY); 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

let openIcon = (elementName) => {
    let activeElement = document.getElementsByClassName('active')[0];
    let newElement = document.getElementById(elementName);
    
    if (activeElement !== undefined) {
      activeElement.removeAttribute("style");
      activeElement.classList.remove('active');
    }
    
    newElement.classList.add('active');
    newElement.style.display = 'flex';
}

let removeBlock = (e) => {
    e.stopPropagation();
    let elements = document.getElementById('tabs');
    let elementToDelete = e.target.parentElement;
    let contentToDelete = document.getElementById(elementToDelete.classList[0]);
    
    elementToDelete.remove();
    contentToDelete.remove();

    if (elements.children.length === 1) {
        elements.children[0].children[0].remove();
    }
}