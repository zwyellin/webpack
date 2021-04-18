module.exports = {
    entry:() => {
        return {
        'app':'./app.js'
        }
    },
    output: {
        filename:'[name].[hash:5].js'
    }
}