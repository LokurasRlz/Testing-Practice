function stringLength(string) {
    if (string.length > 1 && stringLength.length < 10) {
        return string.length;
    }
return false;
}

function reverseString(string) {
    let reversed = string.split("").reverse().join("");
    return reversed;

}

module.exports = {stringLength, reverseString};