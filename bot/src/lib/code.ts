export function codee() {
    const number = Math.trunc(Math.random() * 900000) + 100000;
    const numArr = String(number).split("");

    if (numArr.length === 5 || numArr.length === 7) {
        return codee();
    }

    return number;
}
