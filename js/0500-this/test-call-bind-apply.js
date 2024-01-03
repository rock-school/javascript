function contextCall(arg1, arg2) {
  console.log(this.name, arg1, arg2);
}

new contextCall(); // undefined

contextCall.apply({ name: 'Apply'}, ['arg1', 'arg2']) // Apply
contextCall.call({ name: 'Call'}, 'arg1', 'arg2') // Call


const savedFunction = contextCall.bind({ name: 'Saved'}, 'arg10', 'arg11');

new savedFunction()

savedFunction();

const savedFunction2 = savedFunction.bind({ name: 'Saved1'}, 'arg101', 'arg111');
savedFunction2(); // the same as savedFunction
