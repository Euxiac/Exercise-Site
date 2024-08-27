//What are the results of these expressions? (answer first, then use console.log() to check)

console.log(`["" + 1 + 0] guess was ' 10'. result is ${"" + 1 + 0}`); //string first so it will contpfrfsf first
console.log(`["" - 1 + 0] guess was '-1'. result is ${"" - 1 + 0}`); //- operand auto converts? (0-(-1)=-1)-0=-1
console.log(`[true + false]guess was ' truefalse'. result is ${true + false}`); //+ operand strings? (looks like it takes bools as numeric first)
console.log(`[!true] guess was ' false'. result is ${!true}`); //surely this would still return false though bc no operand is transforming it
console.log(`[6 / "3"] guess was '2'. result is ${6 / "3"}`); //will convert string bc its number first
console.log(`["2" * "3"] guess was '6'. result is ${"2" * "3"}`); // i think it will still attempt the conversion? or NaN bc * has no string func
console.log(`[4 + 5 + "px"] guess was ' 9px'. result is ${4 + 5 + "px"}`); //converts to string when it hits the string
console.log(`["$" + 4 + 5] guess was '$45'. result is ${"$" + 4 + 5}`); //bc its string first the whole thing will be a string?
console.log(`["4" - 2] guess was '2'. result is ${"4" - 2}`);
console.log(`["4px" - 2] guess was 'Some sort of error. NaN?'. result is ${"4px" - 2}`); //can't - a string so this will error out, maybe a NaN
console.log(`[" -9 " + 5] guess was '-3'. result is ${" -9 " + 5}`); //didn't see the spaces at first
console.log(`[" -9 " - 5] guess was 'NaN'. result is ${" -9 " - 5}`); //ah i see bc - auto converts, it will try force the issue anyway.
console.log(`[null + 1] guess was ' 1'. result is ${null + 1}`); //null defs to 0 i think
console.log(`[undefined + 1] guess was 'NaN'. result is ${undefined + 1}`); //unsure if undeclared defaults to a number but maybe NaN
console.log(`[undefined == null] guess was 'true'. result is ${undefined == null}`); //checks if undefined == null regardless of type... so maybe yes?
console.log(`[undefined === null] guess was 'false'. result is ${undefined === null}`); //checks considering type so false.
console.log(`[" \t \n" - 2] guess was 'NaN'. result is ${" \t \n" - 2}`); //I don't understand this
//console.log(`[] guess was '--'. result is ${}`);
