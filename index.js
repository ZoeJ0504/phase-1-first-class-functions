const receivesAFunction = (callback) => callback()
const returnsANamedFunction = () => {
    function help() {

    }
    return help
}
const returnsAnAnonymousFunction = () => function () { }