// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield" ];

const copyOfDrivers = drivers.slice();

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

const copyOfDrivers = drivers.slice();

  drivers.push('Broom');
};
