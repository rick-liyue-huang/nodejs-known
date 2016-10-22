

"use strict";

/*
 Buffer is a global object in the current file (module), so no need require

 the following code will create a memory space of 10 bytes
 if assign to the space size, will initialize some value defaultly

*/

const but = new Buffer(10);

// butter is a look like array, and can assign the value by the index

console.log(but); // <Buffer 48 4b 0f 01 01 00 00 00 70 81>

but[0] = 0;
but[1] = 1;

console.log(but);  // <Buffer 00 01 80 02 01 00 00 00 10 00> the first two elements is changed to 000 and 01

