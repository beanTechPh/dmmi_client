import Message from "./message"

class Inquiry {
  constructor(id, subject, lastMessage, numUnread, date){
    this.id = id 
    this.subject = subject
    this.lastMessage = lastMessage
    this.numUnread = numUnread
    this.date = date
  }

  static rawDataToInquiry(rawData){
    return new Inquiry(rawData['id'], rawData['subject'], Message.rawDataToMessage(rawData['last_message']), rawData['num_unread'], rawData['date'])
  }

  static rawDataToInquiries(rawData){
    return rawData.map(raw => Inquiry.rawDataToInquiry(raw))
  }
}

export default Inquiry;