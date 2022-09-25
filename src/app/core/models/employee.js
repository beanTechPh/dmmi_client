class Employee {
  constructor(id, name, email, mobileNo, address){
    this.id = id 
    this.name = name 
    this.email = email 
    this.mobileNo = mobileNo
    this.address = address
  }

  static rawDataToEmployee(rawData){
    return new Employee(rawData['id'], rawData['name'], rawData['email'], rawData['mobile_no'], rawData['address'])
  }

  static rawDataToEmployees(rawData){
    return rawData.map( raw => Employee.rawDataToEmployee(raw))
  }
}

export default Employee;