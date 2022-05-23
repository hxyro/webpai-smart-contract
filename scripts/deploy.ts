import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'

async function deploy() {
  const Contract = await ethers.getContractFactory('Webpai')
  const contract = await Contract.deploy()
  await contract.deployed()

  console.log('Deployed to:', contract.address)
}

deploy()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
