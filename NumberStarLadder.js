// Using n as a parameter in the function pattern, where n > 0, complete the code to get the pattern:

// 1
// 1*2
// 1**3
// 1***4
// ... and so on...
// Note: There is no newline in the end (after the pattern ends).

function pattern(n) {
    let arr = [1]
    const ast = '*'
    const newL = '\n'
    for (let i = 2; i <= n; i++) {
        let str = 1 + ast.repeat(i - 1) + i
        arr.push(str)
    }
    return arr.join('\n')
}