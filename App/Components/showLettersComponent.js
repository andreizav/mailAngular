'use strict'
app.component('showLetters', {
    bindings: {
        status: "<"
    },
    templateUrl: 'App/Components/showLettersTemplate.html',
    controller: function (LetterData) {
        let letters = [];
        var promise = new Promise(resolve =>{
            resolve(LetterData.getLetters())
        })
        promise.then(result=>letters = result);
        //var self = this;
        //LetterData.getLetters().then(letters => {
        //    self.letters = letters
        //});

        this.toDeleted = (letter) => {
            this.letters[this.letters.indexOf(letter)].status = "Deleted";
        }

        this.remove = (letter) => {
            this.letters[this.letters.indexOf(letter)].status = "Removed";
        }

        this.addLetter = (letter) => {
            letter.personId = this.letters.length + 1;
            letter.avatarUrl = 'https://randomuser.me/api/portraits/thumb/women/' + this.letters.length + 1 + '.jpg';
            this.letters.push(LetterData.setLetters(letter))
        }
    }
})