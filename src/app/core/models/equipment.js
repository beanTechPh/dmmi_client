import { ApiUrl } from "../network/url"
import EquipComponent from "./equipComponent"

class Equipment {
  constructor(id, name, type, serialNo, origin, description, age, branch, brand, images, installedDate, schematics, components){
    this.id = id
    this.name = name 
    this.type = type 
    this.serialNo = serialNo
    this.origin = origin
    this.description = description
    this.age = age
    this.branch = branch
    this.brand = brand
    this.images = []
    this.installedDate = installedDate
    this.schematics = []
    this.components = components === null || components === undefined ? [] : EquipComponent.rawDataToEquipComponents(components)

    if(images !== null && images !== undefined){
      images.forEach(image => {
        this.images.push(ApiUrl + image)
      });
    }

    if(schematics !== null && schematics !== undefined){
      schematics.forEach(schematic => {
        this.schematics.push(ApiUrl + schematic)
      });
    }
  }

  static rawDataToEquipment(rawData){
    return new Equipment(rawData['id'], rawData['name'], rawData['type'], rawData['serial_no'], rawData['origin'], rawData['description'], rawData['age'], rawData['branch'], rawData['brand'], rawData['images'], rawData['installed_date'], rawData['schematics'], rawData['components'])
  }

  static rawDataToEquipments(rawData){
    return rawData.map( raw => Equipment.rawDataToEquipment(raw))
  }

}

export default Equipment;