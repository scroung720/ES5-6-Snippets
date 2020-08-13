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
//rq1
const { name } = require('packageName');
//rq2
const name = require('packageName');
//rq3
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
//clg
console.log(statement);