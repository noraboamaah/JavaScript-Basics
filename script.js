
//////////////////////////////
//BEGINNING OF CODIING CHALLENGE!!!!!!
//variables for heights
// var heightJohn = 40;
// var heightAlex = 30;
// var heightMary = 25;


// //variables for ages
// var ageJohn = 20;
// var ageAlex = 28;
// var ageMary = 30;

// //variables for scores
// var scoreJohn = heightJohn + (5 * ageJohn);
// var scoreAlex = heightAlex + (5 * ageAlex);
// var scoreMary = heightMary + (5 * ageMary);
//END OF CODING CHALLENGE




////if statements
// if(scoreAlex > scoreJohn && scoreAlex > scoreMary){
// 	console.log("Alex won with " + scoreAlex + " points!");
// }else if (scoreJohn > scoreAlex && scoreJohn > scoreMary){
// 	console.log("John won with " + scoreJohn + " points!");
// }else if( scoreMary > scoreJohn && scoreMary > scoreAlex){
// 	console.log("Mary won with " + scoreMary);
// }else{
// 	console.log("It was a draw!");
// }
//////////END OF CODING CHALLENGE


//////////////////////////////////////////
//////////FUNCTIONS
// //function for calculating age
// function calculateAge(yearOfBirth){
// 	var age = 2018 - yearOfBirth;
// 	return age;
// }

// //function for calcalating years until retirememt
// function yearsUntilRetirement(name, yearOfBirth){
// 	var age = calculateAge(yearOfBirth);

// 	var retirememt = 65 - age;
// 	return retirememt;
// }

// console.log(yearsUntilRetirement("nora", 1997));
/////END OF FUNCTIONS



///////////////////////////
////////ARRAYS
// var john = ["john", "smith", false];
// john.push("teacher");

// john.unshift("Mr.")
// john.shift();
// console.log(john);
//END OF ARRAYS




/////////////////////// 
///////OBJECTS 
 // var alex = {
 // 	name : "Alex",
 // 	lastName : "Nkrumah",
 // 	age : 40,
 // 	job : "Senior Prorammer"
 // };

 // alex.name = "Nora";

 // var frank = new Object();

 // frank.name = "frank";
 // frank.lastName = "Nuamah";
 // frank.age = "50";
 // frank.job = "Enterprenuer";

 // console.log(frank, alex);

  
 //METHODS IN AN OBJECT 

 // var martin = {
 // 	firstName : "Martin",
 // 	lastName : "Maanu",
 // 	family: ["Grace", "Trudy", "Benjamin"],
 // 	yearOfBirth : 1997,
 // 	calculateAge : function(){
 // 		 this.age = 2018 - this.yearOfBirth;
 
 // 	}
 // };

 // martin.calculateAge();

 // console.log(martin.age);

 //end of objects


 ///////////////////////////////////
 //LOOPS!

 // for(var i = 0; i < 10; i++){
 // 	console.log(i);
 // }

 // var names = ["Nora", "Maggie", "Frank", "Faiba"];

 // for(var i = names.length - 1; i >= 0 ; i--){
 // 	console.log(names[i]);
 // }




 ////////////////////////////////////
 ////////////SECOND CODING CHALLENGE!!!!!!!


 function printFullAge(){

var ages = [];
var fullAge = [];
for(var i=0; i <years.length; i++){
	ages[i] = 2018 - years[i];

};

for(var i=0; i<years.length; i++){
	if (ages[i] >= 18){
		console.log( " Is " + ages[i] + " years old and is of age!");
		fullAge.push(true);
	}else{
		console.log( " Is " + ages[i] + " years old and  is NOT of age!!");
		fullAge.push(false);
	}
};

};

var years = [1997, 1993, 2000, 1992];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);