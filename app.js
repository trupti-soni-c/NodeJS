const tutorial=require('./tutorial');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
//console.log(tutorial(2,2));
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    //console.log('tutorial event has occurrd');
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);