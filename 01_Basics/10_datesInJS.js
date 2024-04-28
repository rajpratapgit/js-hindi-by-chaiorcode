// Date and Time

let date = new Date();
console.log(date.toString()); //Sun Apr 28 2024 13:00:22 GMT+0530 (India Standard Time)
console.log(date.toDateString()); //Sun Apr 28 2024
console.log(date.toISOString()); //2024-04-28T07:30:22.176Z
console.log(date.toJSON()); //2024-04-28T07:30:22.176Z
console.log(date.toLocaleString()); //4/28/2024, 1:00:22 PM
console.log(date.toLocaleDateString()); //4/28/2024

console.log(typeof date); //object

let createdDate = new Date(2000, 0, 15); // the 1 in middle is Feb, if it was 0 then Jan
// months in JavaScript are 0 to 11 if you write 12 then it will again start from Jan
console.log(createdDate.toDateString()); // Tue Feb 15 2000

let myCreatedDate = new Date(2000, 0, 15, 1, 20);
console.log(myCreatedDate.toLocaleString()); // 1/15/2000, 1:20:00 AM

let differentDateFormat = new Date("2024-04-28"); // in this format month start from 01 not 00
console.log(differentDateFormat.toLocaleString()); // 4/28/2024, 5:30:00 AM

let timeStamp = Date.now();
console.log(timeStamp); // time in millisecond
console.log(differentDateFormat.getTime()); // time in millisecond
console.log(Math.floor(Date.now() / 1000)); // value in second used Math.floor to remove decimal

let dateAgain = new Date();
console.log(dateAgain.getMonth()); // 3 remeber 3 means april because in JavaScript months are started from 0
console.log(dateAgain.getMonth() + 1); // use +1 so end user do not get confuse

console.log(
  dateAgain.toLocaleString("default", {
    weekday: "long",
  })
);
// this will show sun and sunday there are various more available try yourself