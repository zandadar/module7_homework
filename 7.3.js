// Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObject() {
    const employee = Object.create(null);
    console.log (employee);
  };
  
  emptyObject();