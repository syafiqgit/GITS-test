function balanceBracket(input) {
    const stack = [];
    const openToCloseMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of input) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || openToCloseMap[stack.pop()] !== char) {
                return "TIDAK";
            }
        }
    }

    return stack.length === 0 ? "YA" : "TIDAK";
}

console.log(balanceBracket("{ [ ( ) ] }"));
console.log(balanceBracket("{ [ ( ] ) }"));
console.log(balanceBracket("{ ( ( [ ] ) [ ] ) [ ] }")); 