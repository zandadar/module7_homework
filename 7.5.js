// Переписать консольное приложение из предыдущего юнита на классы.

class Electronics {
    constructor(name, power){
      this.name = name;
      this.guarantee = "3 years"
    }
    getStatus(name, status){
      console.log(`${name} status: ${status}`)
    }
  }
  
  class DevisesForHome extends Electronics{
    constructor(name, size, power){
      super(name, power);
      this.size = size;
      this.power= power;
    }
    getStatus(name, status, size, power){
      console.log(`${name} status: ${status}`)
    }
  }
  
  class ElectronicTool extends Electronics{
    constructor(name, weight, power){
      super(name, power)
      this.weight = weight;
      this.power= power
    }
    getStatus(name, status, weight, power){
      console.log(`${name} status: ${status}`)
    }
  } 
  
  DevisesForHome.prototype = new Electronics()
  ElectronicTool.prototype = new Electronics()
    
  const oven = new DevisesForHome("oven", "70x70x60", "1500VA");
  const drill = new ElectronicTool("drill", "3kg", "2000VA");
    
  oven.getStatus("oven", "off")
  drill.getStatus("drill", "on")
    
  console.log(oven)
  console.log(drill)