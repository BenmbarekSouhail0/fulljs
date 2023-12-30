
function isPalindrome(word) {

    if (word.length <= 1) {
        return true;
    }

    // Compare the characters located at the ends of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively test the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        // If there is a difference, it's not a palindrome
        return false;
    }
}

