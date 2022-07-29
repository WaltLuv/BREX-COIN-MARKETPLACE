const hre = require('hardhat')

async function main() {
  const brexCoinFactory = await hre.ethers.getContractFactory('BREXCoin')
  const brexCoin = await brexCoinFactory.deploy()

  await brexCoin.deployed()

  console.log('BREX Coin deployed to:', brexCoin.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
