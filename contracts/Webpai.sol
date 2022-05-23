//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Webpai{
    struct Message {
        uint32 id;
        string topic;
        address creator_address;
        string ipfsid;
        string message;
        uint created_at;
    }

    uint32 private idCounter;
    mapping(string => Message[]) private MessageByTopic;
        
    event Submitted(Message message);

    function getChatHistory(string calldata topic) public view returns(Message[] memory) {
       return MessageByTopic[topic];
    }

    function addNewMessage(string calldata topic, string calldata message, string calldata ipfsid) public {
        
        require(bytes(message).length > 0, "Error: empty massage field");
        
        Message memory newMessage = Message({
            id: idCounter,
            topic: topic,
            creator_address: msg.sender,
            ipfsid: ipfsid,
            message: message,
            created_at: block.timestamp
        });
        MessageByTopic[topic].push(newMessage);
        idCounter++;
        emit Submitted(newMessage);
    }
}
