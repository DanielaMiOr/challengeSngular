const Calculator = (n) => {
    if (n < 2) {
        return null;
    } else {
        const serie = (2 * fibonacci(n - 2)) + (3 * triangular(n - 2)) - (7 * primaryNumber(n - 1));
        return serie;
    }
}
const fibonacci = (n) => {
    if (n < 2) {
        return n;
    } else {
        const arrayPreviusValues = [0, 1];
        let lastFibonacci = 0;
        for (let i = 2; i <= n; i++) {
            lastFibonacci = arrayPreviusValues[0] + arrayPreviusValues[1];
            arrayPreviusValues.shift();
            arrayPreviusValues.push(lastFibonacci);
        }
        return lastFibonacci
    }
}

const primaryNumber = (n) => {
    if (n === 0) {
        return 0;
    } else {
        let primaryNumberSpot = 1;
        let primeNumbers = [2];
        let checknumber = 3;
        while (primaryNumberSpot < n) {
            let isPrime = true;
            for (let i = 0; i < primeNumbers.length; i++) {
                if (checknumber % primeNumbers[i] === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeNumbers.push(checknumber);
                primaryNumberSpot += 1;
            }
            checknumber += 1;
        }
        return primeNumbers.pop();
    }

}
const triangular = (n) => {
    const result = (n * (n + 1)) / 2;
    return result;
}
export default Calculator;