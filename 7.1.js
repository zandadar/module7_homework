// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

const employee = {
    name: "Ivan Ivanov",
    age: 29,
    position: "web-developer"
  };
function getObj(employee) {
    for (let key in employee) {
      if (employee.hasOwnProperty(key))
        console.log (key+ ": " + employee[key])
   }
};
getObj(employee)