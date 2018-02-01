// Un ejemplo del profesor:

let Hangman;
(() => {
    const word = Symbol()
    const attempts = Symbol()
    const w = Symbol()
    const _ = Symbol()
    const endGame = Symbol()

    Hangman = class {
        constructor(_word, _attempts) {
            this[word] = _word
            this[attempts] = _attempts

            this[w] = this[word].split('')
    
            this[_] = new Array(this[w].length)
            this[endGame] = false;
     
            for (let i = 0; i < this[_].length; i++)
                this[_][i] = '_'
     }

     _wins(charOrWord) { 
         return charOrWord === this[word] || this[_].join('') === this[word].toUpperCase()
     }

     _loses(charOrWord) {
        return this[attempts] === 0 || charOrWord.length > 1 && charOrWord !== this[word]
     }

     try(charOrWord) {
        if (this[endGame] === false) {
            let check = false
            
            for (let i = 0; i < this[w].length; i++) {
                if (charOrWord === this[w][i]) {
                    this[_][i] = this[w][i].toUpperCase()

                    check = true
                }
            }

            if (check === true) {
                check = false
            
                if (this._wins(charOrWord)) {
                    this[endGame] = true
            
                    return 'You have guessed the word, well done!'
                } else {
                    return `${this[attempts]} ${this[_].join(' ')}`
                    // return attempts +' '+ this[_].join(' ');
                }
            } else if (this._wins(charOrWord)) {
                this[endGame] = true;

                return 'You have guessed the word, well done!'
            } else {
                this[attempts]--

                if (this._loses(charOrWord)) {
                    if (charOrWord.length > 1) {
                        this[endGame] = true

                        return `Sorry, you have not guessed... the correct word is ${this[word].toUpperCase()}.`
                    } else {
                        this[endGame] = true
                        
                        return `Sorry, you have not guessed... the correct word is ${this[word].toUpperCase()}.`
                    }
                } else {
                    return `${this[attempts]} ${this[_].join(' ')}`
                }
            }
        } else {
            return 'GAME OVER.'
        }
    }
}
})();
