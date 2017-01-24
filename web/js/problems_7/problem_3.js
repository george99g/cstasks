/* ??? */
//js also has primitive and refernece types! 
//Deep and shallow copies are functions that return you a copy of the instance 

Object.prototype.ShallowClone = function () { 
    var clone = {};
	
	for (var prop in this) { 
		if (Object.prototype[prop] == undefined) { 
			clone[prop] = this[prop]; //this will transfer the reference => shallow copy
		}
	}
	
	return clone;
}

Object.prototype.DeepClone = function () { 
	var clone = {};
	
	for (var prop in this) { 
		if (Object.prototype[prop] == undefined) { 
			if (typeof this[prop] == "object") { 
				clone[prop] = this[prop].DeepClone(); //if reference => deep clone it recursively
			}
			else { 
				clone[prop] = this[prop]; //if primitive just copy
			}
		}
	}
	
	return clone;
}

var obj1 = { a: 1, b: 2};
var obj2 = obj1;

obj1.a = 5;
console.log(obj2.a); //see how it changed too

//now lets clone it
var obj3 = obj1.ShallowClone();
console.log(obj3);

obj1.a = 7;
console.log(obj3); //no change this time = a different object not a reference to the first

//however
var objWithInnerRef = { a: 1, b: 2, innerObj: { c: 1, d: 2 }};
var shallowClone = objWithInnerRef.ShallowClone();
var deepClone = objWithInnerRef.DeepClone();

objWithInnerRef.a = 5;
objWithInnerRef.innerObj.c = 9;

console.log(shallowClone);
console.log(deepClone);
//notice how the deepClone innerObj.c has not changed! This is the difference between shallow and deeps