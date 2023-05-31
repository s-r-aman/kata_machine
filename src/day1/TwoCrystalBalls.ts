export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmt = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmt;
    for (; i < breaks.length; i += jumpAmt) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmt;

    for (let j = i; j <= i + jumpAmt; ++j) {
        if (breaks[j]) {
            return j;
        }
    }

    return -1;
}
