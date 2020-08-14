//v
var name;
//v=
var name = value;
//l
let name
//l=
let name = value;
//la
let name = await value;
//ly
let name = yield value;
//co
const name
//co=
const name = value;
//ca
const name = await value;
//cy
const name = yield value;
//iife1
(function (params) {
    statement
})(params);
//iife2
(async (${1:arguments}) => {
    ${0}
})(${2});
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
//asf1
async function (${1:arguments}) {
    ${0}
};
//asf2
async (${1:arguments}) => {
    ${0}
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
for (let i = 0, len = ar.length; i < len; i++) {
    statement
}
//for (let ${1:i} = 0, ${2:len} = ${3:iterable}.length ${1:i} < ${2:len}; ${1:i}++) {
//    ${0}
//}
//for2
for(const e of ar) {
    statement
}
//for3
for (let ${1:key} in ${2:source}) {
    if (Object.prototype.hasOwnProperty(${2:source}, ${1:key})) {
        ${0}
    }
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
//te
( condition ) ? expression1 : expression2;
//te=
const name = ( condition ) ? expression1 : expression2;
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
//every
1:arr.find(2:ele => 3:condition)
//some
1:arr.find(2:ele => 3:condition)
//sort
arr.sort((a, b) => a - b);
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
element.addEventListener(event, handler)
//gi
${1:document}.getElementById('${2:id}')
//gc
Array.from(${1:document}.getElementsByClassName('${2:class}'))
//gt
Array.from(${1:document}.getElementsByTagName('${2:tag}'))
//qs
element = document.querySelector(selectores);
//qsa
Array.from(${1:document}.querySelectorAll('${2:selector}'))
//addc
element.classList.add("mystyle");
//togc
${1:document}.classList.toggle('${2:class}');
//rmc
element.classList.remove("mystyle");
//cdf
${1:document}.createDocumentFragment(${2:elem});
//cel
${1:document}.createElement(${2:elem});
//ac
${1:document}.appendChild(${2:elem});
//rmch
${1:document}.removeChild(${2:elem});
//ga
${1:document}.getAttribute('${2:attr}');
//sa
${1:document}.setAttribute('${2:attr}', ${3:value});
//rma
${1:document}.removeAttribute('${2:attr}');
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
//sti
setInterval((params) => {
    statement
}, interval);
//sto
setTimeout((params) => {
    statement
}, time);
//inf1
for(;;);
//inf2
while(true);
//ol
{ key: value }
//of
${1:functionName}: function(${2:arguments}) {
	${3:// body}
}
//cb
(err, ${1:response}) => {
    if (err) throw err
    ${0}
}
//ok
Object.keys(${1:obj})
//ov
Object.values(${1:obj})
//oe
Object.entries(${1:obj})
//oc
Object.create(${1:obj})
//oa
Object.assign(${1:dest}, ${2:source})
//opd
Object.getOwnPropertyDescriptor(${1:dest}, '${2:prop}')
//od
Object.defineProperty(${1:dest}, '${2:prop}', {
    ${0}
})
//pa
Promise.all(${1:value})
//apa
await Promise.all(${1:value})
//apm
await Promise.all(${1:array}.map((async ${2:value}) => {\n\t${0}\n}))
//epsr
ev.preventDefault()
ev.stopPropagation()
return false
//de
debugger;
//ih
${1:document}.innerHTML = '${2:elem}';
//f&g1
const ${1:functionName} = async () => {
    const response = await fetch('${2:URL}');
    const data = await response.json();
    console.log(data);
};$0
//f&g2
const ${1:functionName} = async () => {
    const response = await fetch('${2:URL}', {
        method: '${3:*GET/POST/PUT/DELETE}',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data);${0}
};$0
//f&g3
const ${1:functionName} = async () => {
    const response = await fetch('${2:URL}', {
        method: '${3:*GET/POST/PUT/DELETE}',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data);${0}
};$0


































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