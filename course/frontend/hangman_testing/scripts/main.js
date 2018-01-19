function hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).result('9 _ _ _ _ _');
    should(game.try('b')).result('8 _ _ _ _ _');
    should(game.try('c')).result('7 _ _ _ _ _');
    should(game.try('d')).result('6 _ _ _ _ _');
    should(game.try('e')).result('6 _ E _ _ _');
    should(game.try('l')).result('6 _ E L L _');
    should(game.try('hello')).result('You have guessed the word, well done!');
}

test(hangmanResultsWellDoneWhenAssertingWordOnThe7thAttempt);

function hangmanResultsSorryWhenFailingAssertionOfWordOnThe7thAttempt() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).result('9 _ _ _ _ _');
    should(game.try('b')).result('8 _ _ _ _ _');
    should(game.try('c')).result('7 _ _ _ _ _');
    should(game.try('d')).result('6 _ _ _ _ _');
    should(game.try('e')).result('6 _ E _ _ _');
    should(game.try('l')).result('6 _ E L L _');
    should(game.try('bello')).result('Sorry, you have not guessed... the correct word is HELLO.');
}

test(hangmanResultsSorryWhenFailingAssertionOfWordOnThe7thAttempt);

function hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithWellDone() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).result('9 _ _ _ _ _');
    should(game.try('b')).result('8 _ _ _ _ _');
    should(game.try('c')).result('7 _ _ _ _ _');
    should(game.try('d')).result('6 _ _ _ _ _');
    should(game.try('e')).result('6 _ E _ _ _');
    should(game.try('l')).result('6 _ E L L _');
    should(game.try('hello')).result('You have guessed the word, well done!');
    should(game.try('bello')).result('GAME OVER.');
}

test(hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithWellDone);

function hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithSorry() {
    var game = new Hangman('hello', 10);

    should(game.try('a')).result('9 _ _ _ _ _');
    should(game.try('b')).result('8 _ _ _ _ _');
    should(game.try('c')).result('7 _ _ _ _ _');
    should(game.try('d')).result('6 _ _ _ _ _');
    should(game.try('e')).result('6 _ E _ _ _');
    should(game.try('l')).result('6 _ E L L _');
    should(game.try('bello')).result('Sorry, you have not guessed... the correct word is HELLO.');
    should(game.try('hello')).result('GAME OVER.');
}

test(hangmanResultsGameOverWhenTryingToPlayAfterGameEndedWithSorry);

// TODO func to convert camelCase text into normal case and spaces (e.g. "helloWorld" -> "hello world").