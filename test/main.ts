import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'
import { Contract } from 'ethers'

describe('Test:', () => {
  //deploy function
  async function deploy() {
    const Message = await ethers.getContractFactory('Webpai')
    const message = await Message.deploy()
    await message.deployed()
    return message
  }

  //test1
  it('should fail to fetch initially', async () => {
    //deploy the contract
    const messages: Contract = await deploy()

    expect(await messages.getChatHistory('hello')).to.be.lengthOf(0)
  })

  //test2
  it('should fetch now', async () => {
    //deploy the contract
    const messages: Contract = await deploy()

    //send message
    const sendMessage = await messages.addNewMessage(
      'hello',
      'konnichiwa',
      'ipfsId'
    )
    await sendMessage.wait()

    expect(await messages.getChatHistory('hello')).to.be.lengthOf(1)
  })

  //test3
  it('should fail because of empty message field', async () => {
    //deploy the contract
    const messages: Contract = await deploy()
    //@ts-ignore
    var e: String = ''
    try {
      const sendMessage = await messages.addNewMessage('hello', '', 'ipfsId')
      await sendMessage.wait()
    } catch (err) {
      if (err instanceof Error) {
        e = err.message
      }
    }
    expect(e.includes('Error: empty massage field')).to.equal(true)
  })
})
