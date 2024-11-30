function getFirstElement<T>(arg: T[]): T {
    return arg[0];
}

const el = getFirstElement<number>([1, 2, 3]);
const el2 = getFirstElement<string>(['Hello', 2, 3]);
console.log(el);
console.log(el2);