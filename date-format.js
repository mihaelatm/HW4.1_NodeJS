import moment from "moment";

const now = moment();

const formatDate1 = now.format("DD-MM-YYYY");
const formatDate2 = now.format("MMM Do YY");
const formatDate3 = now.format("dddd");

console.log("Current Date: ", formatDate1);
console.log("Current Date: ", formatDate2);
console.log("Current Date: ", formatDate3);
