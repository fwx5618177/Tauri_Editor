import esprima from 'esprima'

export const handleInput = (value: string) => {
    const ast = esprima.tokenize(value)
    console.log(JSON.stringify(ast))
}
