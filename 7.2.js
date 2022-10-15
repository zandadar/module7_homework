// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

const employee = {
    name: "Ivan Ivanov",
    age: 29,
    position: "web-developer",
    salary: "4000 USD"
};

const salary = "4000 USD";

function searchProperties(employee, salary){
  let unswer;
  for (let key in employee){
    if (employee.hasOwnProperty("salary"))
      unswer = true
      else unswer = false;
  }
  return console.log(unswer);
}

searchProperties(employee, salary);