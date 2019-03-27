var binomialCoeff = (n, k) => {
    if (n < k) {
        return -1
    }
    var coeff = 1;
    for (var x = n-k+1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    if (!coeff || coeff > 1,000,000,000){
        return -1
    }
    return coeff;
}

console.log(binomialCoeff(5, 3))