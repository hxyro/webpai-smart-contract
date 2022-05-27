import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'

async function deploy() {
  const Contract = await ethers.getContractFactory('Webpai')
  const contract = await Contract.deploy()
  await contract.deployed()

  await (
    await contract.addNewMessage(
      'hello',
      'konnichiwa',
      'bafkreibhw6uomzonibacpvsk2xjeutorksbgodkyoh5u6lya4ad2gedj4e'
    )
  ).wait()
  await (
    await contract.addNewMessage(
      'cat',
      'cat',
      'bafkreie4u4lvfggmd7nzowebsvwjwvebzofc7dhuqaeco2jlcwckhli6ju'
    )
  ).wait()
  await (await contract.addNewMessage('polygon', 'polygon', '')).wait()

  console.log('Deployed to:', contract.address)
}

deploy()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
