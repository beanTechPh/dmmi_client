class Message {
  constructor(id, userType, userId, body){
    this.id = id 
    this.userType = userType
    this.userId = userId
    this.body = body
  }

  static rawDataToMessage(rawData){
    return new Message(rawData['id'], rawData['user_type'], rawData['user_id'], rawData['body'])
  }

  static rawDataToMessages(rawData){
    return rawData.map(raw => Message.rawDataToInquiry(raw))
  }
}

export default Message;