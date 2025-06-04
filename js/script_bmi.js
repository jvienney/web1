'use strict';

function computeBMI(weight,size){
  	return (weight/((size/100)**2));
}

let user = {};
user.weight = 70;
user.size = 176;

// alert("Hello world!");
alert("Your BMI is " + (Math.trunc(100*computeBMI(user.weight,user.size)))/100 + ".");

