const drivers = ["Milo", "Otis", "Garfield" ];


function destructivelyAppendDriver(){

    drivers.push('Ralph');

;}

function destructivelyPrependDriver(){
  drivers.unshift('Bob');
};

function destructivelyRemoveLastDriver(){
  drivers.pop('Garfield');
};
function destructivelyRemoveFirstDriver(){
  drivers.shift('Milo');
};



function appendDriver(){
   const newArray = [...drivers,];

  newArray.push('Broom' );

  return newArray;
};

function prependDriver(){
   const newArray = [ ,...drivers];

   newArray.push(Arnold);

   return newArray;
};
