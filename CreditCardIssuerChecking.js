// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |

function getIssuer(number) {
    const str = String(number)

    return str[0] === '4' && (str.length === 13 || str.length === 16) ? 'VISA'
        : str[0] === '3' && (str[1] === '4' || '7') && str.length === 15 ? 'AMEX'
            : str[0] === '6' && str[1] === '0' && str[2] === '1' && str[3] === '1' && str.length === 16 ? 'Discover'
                : str[0] === '5' && (str[1] === '1' || str[1] === '2' || str[1] === '3' || str[1] === '4' || str[1] === '5') && str.length === 16 ? 'Mastercard'
                    : 'Unknown'
}