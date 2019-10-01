class GuessingGame {
    constructor() {
        this.range = {
            min: 0,
            max: 0
        }
        this.result;
    }

    setRange(min, max) {
        this.range.min = min;
        this.range.max = max;
    }

    guess() {
        const { min, max } = this.range; 
        this.result = Math.ceil((min + max) / 2);
        return this.result; 
    }

    lower() {
        this.range.max = this.result;
    }

    greater() {
        this.range.min = this.result;
    }   
}

module.exports = GuessingGame;
