// written in typescript

// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");

//written in python 2.7

// # this is the class, a blueprint for all objects
// class Plants():
//   name=""
//   color=""
//   size=""
//   # bool statement, put true/false if it has flowers
//   flowers=True
//   housePlant=True

// # this is the constructor for the class
// # "=name" references the above class
//   def __init__(self, name, color, size, flowers, housePlant):
//     self.name=name
//     self.color=color
//     self.size=size
//     self.flowers=flowers
//     self.housePlant=housePlant

// # this method belong to the class
//   def print_self(self):
//     print "The " + self.name +" plant is a beautiful " + self.color + " color."
//     print "It is usually " + self.size + "."

//     while self.flowers ==True:
//       print"The plant has flowers."
//       break



//     while self.housePlant ==True:
//       print "This is a house plant."
//       break

// # This is the creation of the objects from the class
// # Object one
// ZZ = Plants("ZZ", "green", "tall", False, True)
// ZZ.print_self()
// print ""

// print""

// # Object two
// DragonTree = Plants("Dragon", "green and brown", "very tall", True, True)
// DragonTree.print_self()
// print""

// # showing inheritance by creating another class
// # that takes the same attributes as Plants
// class plantFood(Plants):
//   fertilizerType=""
//   sunNeeded=""
//   waterFrequency=""

// # Still need to initialize the class by using a constructor
//   def __init__(self, name, color, size, flowers, housePlant, fertType, sunNeeded, waterFrequency):
//     self.name=name
//     self.color=color
//     self.size=size
//     self.flowers=flowers
//     self.housePlant=housePlant
//     self.fertType= fertType
//     self.sunNeeded=sunNeeded
//     self.waterFrequency=waterFrequency

// # self is still being passed down from the constructor
//   def print_plantFood(self):
//     print self.name + " likes " + self.fertType + " to stay healthy."
//     print self.sunNeeded + " is needed to keep the plant from dying."
//     print "Be sure to water " + self.name + " " + self.waterFrequency + "."

// MoneyTree = plantFood("Money Tree", "light green", "medium", False, True, "egg shells", "low light", "once weekly")

// MoneyTree.print_plantFood()
