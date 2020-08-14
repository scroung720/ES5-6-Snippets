//v
var name;
//v=
var name = value;
//l
let name
//l=
let name = value;
//co
const name
//co=
const name = value;
//fn0
(function (params) {
    statement
})(params);
//fn1
const name = (params) => {
    statement
};
//fn2
(params) => {
    statement
}
//fn3
const name = (params) => statement;
//fn4
(params) => statement
//fn5
const name = (params) => ( statement );
//fn6
(params) => ( statement )
//fn7
function name(params) {
    statement
};
//fn8
function (params) {
    statement
}
//fn9
const name = function name(params) {
    statement
};
//fn10
function* (params) {
    yield statement;
}
//fn11
function* name(params) {
	yield statement;
}
//rq1
const { name } = require('packageName');
//rq2
const name = require('packageName');
//rq3
const { 2:name } = require('./1:module}');
//rq3
const 1:module = require('./1:module}');
//rq4
const name = require('packageName').property;
//do
const { property } = object;
//da
const [ name ] = array;
//so1
const newObj = { ...obj };
//so2
{ ...obj }
//so3
const newObj = {
    ...obj,
    statement
};
//so4
{
    ...obj,
    statement
}
//so5
property: {
    ...object.property,
    newProperty : value
}
//sa1
const newArr = [ ...arr ];
//sa2
[ ...arr ]
//sa3
const newArr = [
    ...arr,
    statement
];
//sa4
[
    ...arr,
    statement
]
//ro
const { first, ...others } = object;
//ra
const [ first, ...others ] = array;
//o
{ property }
//a
[ name ]
//if
if ( condition ) {
	statement
}
//for1
for (let i = 0; i < ar.length; i++) {
    statement
}
//for2
for(const e of ar) {
    statement
}
//for3
for(const e in obj) {
    statement
}
//tn1
${1:promise}.then((${2:value}) => {
	${0}
})
//tn2
.then((res) => { statement })
//tn3
.catch((err) => {});
//clg
console.log(statement);
//clg2
console.log(`${}`);
//ter
${condition} ? expression : expression;
//wl
while ( condition ) {
	statement
}
//tc
try {
	statement
} catch (error) {
    console.log(error);
}
//tcf
try {
	statement
} catch (error) {
    console.log(error);
} finally {
    statement
}
//sw
switch(expression) {
    case value:
    break;
    default:
        console.log('Switch Default');
}
//fa
name.apply(context, [args])
//fb
name.bind(context, arg)
//fc
name.call(context, arg)
//sq1
[...Array(number).keys()]
//sq2
[...Array(number).keys()].map((_, i)=>i+1)
//mp
1:arr.map((2:argument) => 3:statement)
//rd
1:arr.reduce((2:argument) => {
    4:statement
}, 3:initValue);
//fl
1:arr.filter((2:argument) => {
    4:statement
}, 3:initValue);
//fn
1:arr.find(2:ele => 3:condition)
//kv
1:key : 2:value,
//proto
1:Class.prototype.2:method = function(3:arguments) {
    4:statement
};
//ro
return (
    1:statement
);
//rp
return new Promise((resolve, reject) => {
	1:statement
});
//tof
typeof ${1:source} === '${2:undefined}'
//em
exports.1:member = 2:statement;
//me
module.exports = 1:statement;
//adde
selector.addEventListener(event, handler)
//qs
element = document.querySelector(selectores);
//addc
element.classList.add("mystyle");
//rmc
element.classList.remove("mystyle");
//rt
return
//len
length
//inc
string.includes()
//io
array.indexOf()
//tos
variable.toString()
//from
Array.from()
//isa
Array.isArray()
//jo
join()
//po
pop()
//pu
push()
//hop
Object.prototype.hasOwnProperty(object, property)
//benchmark
performance.mark(fromMarker);
//  TODO: HERE YOU PUT WHAT YOU WANT TO MEASURE

performance.mark(toMarker);
performance.measure(`${fromMarker} to ${toMarker}`, fromMarker, toMarker);
console.log(performance.getEntriesByType("mark"));
console.log(performance.getEntriesByName(`${fromMarker} to ${toMarker}`));
performance.clearMarks(fromMarker);
performance.clearMarks(toMarker);
performance.clearMeasures(`${fromMarker} to ${toMarker}`);
//jp
JSON.parse(string)
//js
JSON.stringify(object)
//use
"use strict";
//====
Object.is(value1, value2)




































//doge
MMMMMMMddNMMMMMMMMMMMMMMMMMMMMMMMd+:dMMMMMMMMMMMMM
MMMMMNoo//+dMMMMMMMMMMMMMMMMMMMMh++:/MMMMMMMMMMMMM
MMMMMsyyo+//+hMMMMMMMMMMMMMMMMMs+o+::MMMMMMMMMMMMM
MMMMmossoo+++/+dMMMMMMMMMMMMmy++oo+:-yMMMMMMMMMMMM
MMMMhsosyyso+so++ssssooo++/:::::::/+/:MMMMMMMMMMMM
MMMMhsosdmdhs+syoo+//::::://///::-----+mMMMMMMMMMM
MMMMN+ooymNdoosys+///::/:////++/:--..---:oydNMMMMM
MMMMMoo++ydNmyo/:/::////:::://++:-...---....-sMMMM
MMMMm/osoooso/::::://+//:----/++/:---:::-.....oMMM
MMMN:/syo+/:--::://///:::-----///::::hmdy:.``..NMM
MMMy:+yy+/::::::::///+yddys+/::-----:ommy/`` ``/MM
MMM//+o+/:::::::::::/hNNNd/Ndo/:-------//--.```.NM
MMM-////::------...---+yhysy+//---..--.-...`````+M
MMy::/::---...--....--::::::-:---...-/ossso/.```.m
Md-::::----.........---.....----....yNNMMMNMy``.`+
M/::://::-----...............-------sNMMMMNms.```.
o-:://+/::::-:---............-:---::/sdNNNNds/.```
-:////+//:------:-----------:::::://+ydmmmmds:.```
::///////:----..------:::-::+yyso+/ohmNNNNmd/..``.
s//+++++//::------------:::::+syhhdmdhhhhho:..```h
My/+o++////:::--------::::::::::////////+:--..``oM
MMmyooo++////::---------::::::::::::------.....:NM
MMMMMmyoo+//::::::--------::::::::::------...-oNMM
MMMMMMMNdy+/::::--:::-----:::::::::::------:yMMMMM
MMMMMMMMMMMds+::::::::///////:/:::::::-::/hMMMMMMM
MMMMMMMMMMMMMMMNmhys+//:/:////////:/+syhmMMMMMMMMM