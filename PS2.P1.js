const fibonacciGenerator = function*() {
    let a1 = 0;
    let a2 = 1;

    while(true) {
        yield a1;
        [a1, a2] = [a2, a1 + a2];
    }
}

const evenFibonacciGenerator = function*() {
    let fibonacciGen = fibonacciGenerator();
    let counter = 0;

    while(true) {
        let num = fibonacciGen.next().value;
        counter++;


        if (counter % 3 === 0) {
            yield num;
        }
    }
}

let gen = evenFibonacciGenerator();
Array.from({length: 6}, () => console.log(gen.next().value));

