function multiplier(factor) {
    return function(number) {
        return number * factor
    }
}

var twice = multiplier(2);
