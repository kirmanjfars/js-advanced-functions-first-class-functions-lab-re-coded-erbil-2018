// Code your solution in this file!

let drivers = ['kirmanj', 'fars', 'web', 'recoded'];


const returnFirstTwoDrivers = function (drivers){
    
    return drivers.slice(0,2);
  }
  
  const returnLastTwoDrivers = function (drivers){
    
    return drivers.slice(drivers.length-2,drivers.length);
  }
  
  
  const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
  

  const createFareMultiplier = function(num){
       return function(){
         return num * num;
       };
  }
   
  // const fareDoubler = function (func){
  //       const num; 
        
  //       return func(num);
        
  // }
   
  
  
  
  // const selectingDrivers= 

