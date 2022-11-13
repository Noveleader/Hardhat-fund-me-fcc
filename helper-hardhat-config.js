require('hardhat-deploy')
const networkConfig = {
    4: {
        name: 'rinkeby',
        ethUsdPriceFeed: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e'
    },
    137: {
        name: 'polygon',
        ethUsdPriceFeed: '0xF9680D99D6C9589e2a93a78A04A279e509205945'
    },
    5: {
        name: 'goerli',
        ethUsdPriceFeed: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e'
    }
}

const developmentChains = ['hardhat', 'localhost']
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER
}
