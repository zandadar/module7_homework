// Реализуйте следующее консольное приложение подобно примеру, 
// который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. 
// Посчитайте потребляемую мощность (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, 
// настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами 
//он обладает.

function Electronics(name, power){
    this.name = name;
    this.guarantee = "3 years"
  }
  
  Electronics.prototype.getStatus = function(name, status){
    console.log(`${name} status: ${status}`)
  }
  
  function DevisesForHome(name, size, power){
    this.name = name;
    this.size = size;
    this.power= power
  }
  
  function ElectronicTool(name, weight, power){
    this.name = name;
    this.weight = weight;
    this.power= power
  }
  
  DevisesForHome.prototype = new Electronics()
  ElectronicTool.prototype = new Electronics()
  
  const oven = new DevisesForHome("oven", "70x70x60", "1500VA");
  const drill = new ElectronicTool("drill", "3kg", "2000VA");
  
  oven.getStatus("oven", "off")
  drill.getStatus("drill", "on")
  
  console.log(oven)
  console.log(drill)