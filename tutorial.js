const sum=(num1,num2) => num1 + num2;
PI=3.14;
class SomeMathObject
{
    constructor(){
        console.log('Object created');}
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

module.exports={sum:sum,PI:PI,SomeMathObject:SomeMathObject}
