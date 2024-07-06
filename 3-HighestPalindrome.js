function highestPalindrome(s, k) {
    function findMaxPalindrome(s, k, left, right) {
        if (left >= right) {
            return s;
        }

        if (s[left] === s[right]) {
            return findMaxPalindrome(s, k, left + 1, right - 1);
        }

        const maxChar = String.fromCharCode(
            Math.max(s.charCodeAt(left), s.charCodeAt(right))
        );

        if (k > 0) {
            const leftString =
                s.slice(0, left) + maxChar + s.slice(left + 1);
            const rightString =
                s.slice(0, right) + maxChar + s.slice(right + 1);

            const leftPalindrome = findMaxPalindrome(
                leftString,
                k - 1,
                left + 1,
                right - 1
            );
            const rightPalindrome = findMaxPalindrome(
                rightString,
                k - 1,
                left + 1,
                right - 1
            );

            return leftPalindrome.length >= rightPalindrome.length
                ? leftPalindrome
                : rightPalindrome;
        }

        return -1;
    }

    return findMaxPalindrome(s, k, 0, s.length - 1);
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2)); 