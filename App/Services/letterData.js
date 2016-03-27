app.service('LetterData', function ($http) {
    this.getLetters = () => {
        return $http.get('https://my-mail.firebaseio.com/letters.json')
          .then(response => normalizeToArray(response.data));
    }
    this.setLetters = (letter) => {
        return $http.post('https://my-mail.firebaseio.com/letters.json', letter)
          .then(response => {
              letter.id = response.data.name;
              return letter;
          });
    }

    function normalizeToArray(object) {
        if (!object) return [];
        return Object.keys(object).map(key => {
            let normalizedObject = object[key];
            normalizedObject.id = key;
            return normalizedObject;
        });
    }
})