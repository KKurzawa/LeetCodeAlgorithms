function playPass(s, n) {
    const result = []

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i) + n;

        if (charCode > 90) {
            charCode = charCode - 26
        };

        /[0-9]/.test(s[i]) ? result.push(String(9 - Number(s[i]))) :
            /[A-Z]/.test(s[i]) && i % 2 !== 0 ? result.push(String.fromCharCode(charCode).toLowerCase()) :
                /[A-Z]/.test(s[i]) ? result.push(String.fromCharCode(charCode)) :
                    result.push(s[i])
    }

    return result.reverse().join('')
}
