const TronWeb = require('TronWeb')
const log = require('./log')
const tronWeb = new TronWeb({fullHost: 'https://api.trongrid.io'})
    
const main = () => {
    let i = 0
    setInterval(async () => {
        const account = await tronWeb.createAccount()
        const tokenBalance = await tronWeb.trx.getBalance(account.address.base58)
        console.log(`[${i++}]\t${account.privateKey}\t${parseInt(tokenBalance/1e6)}`)
        tokenBalance > 0 ? log(`[${i}]\t${account.privateKey}\t${parseInt(tokenBalance/1e6)}`) : void(0)
    }, 100)
}

main()