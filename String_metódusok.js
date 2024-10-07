let txt = "egy_ketto_harom_negy_ot_hat_het";
let firstfive = txt.slice(0, 5);
console.log(firstfive);

let to8 = txt.substring(2, 8);
console.log(to8);

let from5toLast = txt.slice(4)
console.log(from5toLast);

let from5for6 = txt.slice(4, 4+6);
console.log(from5for6)

let upper = txt.toUpperCase()
console.log(upper)

let result = "";
for (let i = 0; i < txt.length; i++) {
    if (i % 2 === 1) {
        result += txt[i].toUpperCase();
    } else {
        result += txt[i];
    }
}
console.log(result)

let eE = txt.replace(/e/g, 'E');
console.log(eE);

let resultArray = txt.split('e');
console.log(resultArray);