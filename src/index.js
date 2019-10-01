const str = '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())';
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

function check(str, bracketsConfig) {
    if(str.length % 2 !== 0 ) {
        return false;
    }

    let openBrackets = [];
    let closeBrackets = [];
    let stuck = [];
    let isSimilarBrackets = true;

    bracketsConfig.forEach((brackets) => {
        openBrackets.push(brackets[0]);
        closeBrackets.push(brackets[1]);
    });

    for (let i = 0; i < str.length; i++) {
        if (closeBrackets.indexOf(str[i]) !== -1) {
            if (closeBrackets.indexOf(str[i]) !== -1 && openBrackets.indexOf(str[i]) !== -1) {
                if (isSimilarBrackets) {
                    isSimilarBrackets = false;
                    stuck.push(str[i]);
                    continue;
                }
                isSimilarBrackets = true;
            }
            let matchBrakets = openBrackets[closeBrackets.indexOf(str[i])];
            if (stuck.length === 0) {
                return false;
            }
            if (stuck.pop() !== matchBrakets) {
                return false;
            }
            continue;
        }
        stuck.push(str[i]);
    }

    return stuck.length === 0;
}

module.exports = check;
