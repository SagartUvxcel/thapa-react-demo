
// for date and time
const dateValue = new Date();

// fetch value 
const serverUrl = "https://data.covid19india.org/data.json";

// calculator function
function add(a, b) {
    let ans = a + b
    return ans
}
function sub(a, b) {
    let ans = a - b
    return ans
}
function div(a, b) {
    let ans = a / b
    return ans
}
function mul(a, b) {
    let ans = a * b
    return ans
}

export default dateValue;
export { serverUrl, add, sub, mul, div }