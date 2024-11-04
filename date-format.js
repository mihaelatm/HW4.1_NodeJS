import moment from "moment";

const now = moment();

const formatDate1 = now.format("DD-MM-YYYY h:mm:ss");
const formatDate2 = now.format("MMM Do YY h:mm:ss");
const formatDate3 = now.format("dddd h:mm:ss");

console.log("Current Date: ", formatDate1);
console.log("Current Date: ", formatDate2);
console.log("Current Day: ", formatDate3);
