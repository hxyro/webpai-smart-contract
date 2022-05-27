import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
require('dotenv').config()

module.exports = {
  solidity: '0.8.4',
  networks: {
    polygon: {
      url: 'https://polygon-rpc.com',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}
