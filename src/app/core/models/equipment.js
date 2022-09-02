class Equipment {
  constructor(id, name, type, serialNo, origin, description, age, branch){
    this.id = id
    this.name = name 
    this.type = type 
    this.serialNo = serialNo
    this.origin = origin
    this.description = description
    this.age = age
    this.branch = branch
  }

  static rawDataToEquipment(rawData){
    return new Equipment(rawData['id'], rawData['name'], rawData['type'], rawData['serial_no'], rawData['origin'], rawData['description'], rawData['age'], rawData['branch'])
  }

  static rawDataToEquipments(rawData){
    return rawData.map( raw => Equipment.rawDataToEquipment(raw))
  }

  static sampleData(){
    var data = [
      {
        'id': 1,
        'name': "Low Voltage Switch Gear",
        'type': "All Types Of Free Standing Panels",
        'serial_no': "22001",
        'origin': "Order",
        'description': "4000A, 3P, 400V, Schnieder",
        'age': "6 years",
        'branch': 'City Mall Cotabato'
      },
      {
        'id': 2,
        'name': "Enclosed Panel Board",
        'type': "Distribution Panel Board",
        'serial_no': "22002",
        'origin': "Scan",
        'description': "4000A, 3P, 400V, Schnieder",
        'age': "6 years",
        'branch': 'City Mall Danao'
      }
    ]

    return Equipment.rawDataToEquipments(data)
  }

}

export default Equipment;