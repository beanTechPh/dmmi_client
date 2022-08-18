class Order {
  constructor(id, idNo, date, description, price, pdf, status){
    this.id = id
    this.idNo = idNo
    this.date = date
    this.description = description
    this.price = price 
    this.pdf = pdf
    this.status = status
  }

  static rawDataToOrder(rawData){
    return new Order(rawData['id'], rawData['id_no'], rawData['date'], rawData['description'], rawData['price'], rawData['pdf'], rawData['status'])
  }
  
  static rawDataToOrders(rawData){
    return rawData.map( raw => Order.rawDataToOrder(raw))
  }

  static sampleData(){
    var data = [
      {
        'id': "1",
        'id_no': "O-00001",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut? Delectus, repellendus eveniet nulla ipsa omnis odit, eligendi facilis labore, dolorum quia provident! Blanditiis iste ducimus veritatis dolore, velit culpa.",
        'price': "Calculating",
        'pdf': null,
        'date': "Jan 1, 2022",
        'status': 'On Process'
      },
      {
        'id': "2",
        'id_no': "O-00002",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut? Delectus, repellendus eveniet nulla ipsa omnis odit, eligendi facilis labore, dolorum quia provident! Blanditiis iste ducimus veritatis dolore, velit culpa.",
        'price': "₱100,000",
        'pdf': null,
        'date': "Jan 2, 2022",
        'status': 'On Progress'
      },
      {
        'id': "3",
        'id_no': "O-00003",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut? Delectus, repellendus eveniet nulla ipsa omnis odit, eligendi facilis labore, dolorum quia provident! Blanditiis iste ducimus veritatis dolore, velit culpa.",
        'price': "₱100,000",
        'pdf': null,
        'date': "Jan 3, 2022",
        'status': 'Mobilized'
      },
      {
        'id': "4",
        'id_no': "O-00004",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut? Delectus, repellendus eveniet nulla ipsa omnis odit, eligendi facilis labore, dolorum quia provident! Blanditiis iste ducimus veritatis dolore, velit culpa.",
        'price': "₱100,000",
        'pdf': null,
        'date': "Jan 4, 2022",
        'status': 'Delivered'
      },
      {
        'id': "5",
        'id_no': "O-00005",
        'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut? Delectus, repellendus eveniet nulla ipsa omnis odit, eligendi facilis labore, dolorum quia provident! Blanditiis iste ducimus veritatis dolore, velit culpa.",
        'price': "₱100,000",
        'pdf': null,
        'date': "Jan 5, 2022",
        'status': 'Canceled'
      },
    ]

    return Order.rawDataToOrders(data)
  }
}

export default Order;