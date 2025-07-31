class Hero {
  // add default values here 
    constructor(name='Hero') {
      this.name = name;
      this.position = '00';
      this.health = 100;
      this.damage = 5;
      this.experience = 0;
    }
}
let myhero = new Hero("hema")
console.log(myhero.name);