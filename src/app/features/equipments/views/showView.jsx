import React, { Component } from 'react';
import EquipmentsContextProvider, { EquipmentsContext } from '../contexts/equipmentsContext';
import '../stylesheets/show.scss';
import Carousel from 'react-bootstrap/Carousel';
import ComponentCard from './components/componentCard';

class EquipmentsShowView extends Component {
  state = {  } 
  render() { 
    return (
      <EquipmentsContextProvider>
        <EquipmentsContext.Consumer>{ context => {
          const { showEquipment } = context
          const equipment = showEquipment

          if(equipment === null) return

          return (
            <div id="equipments-show-page" className='page-container'>
              <div className="d-flex justify-content-between">
                <h1 className="title">{equipment.name}</h1>
                <div className="action-btns">
                  <button className="btn btn-primary btn-sm">Tech Support</button>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="equipment d-flex">
                  <Carousel variant="dark">
                    {equipment.images.length > 0 ?
                      equipment.images.map(image => 
                        <Carousel.Item key={image}>
                          <img src={image} alt="" />
                        </Carousel.Item>
                      )
                      :
                      <Carousel.Item>
                        <div className="not-available">
                          <i className="bi bi-file-earmark-image"></i>
                          <div className="label">IMAGE NOT AVAILABLE</div>
                        </div>
                      </Carousel.Item>
                    }
                  </Carousel>
                  <div className="details">
                    <div className="group d-flex">
                      <div className="label">Name:</div>
                      <div className="value">{equipment.name}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Type:</div>
                      <div className="value">{equipment.type}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Serial No:</div>
                      <div className="value">{equipment.serialNo}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Branch:</div>
                      <div className="value">{equipment.branch}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Brand:</div>
                      <div className="value">{equipment.brand}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Descirption:</div>
                      <div className="value">{equipment.description}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Installed Date:</div>
                      <div className="value">{equipment.installedDate}</div>
                    </div>
                    <div className="group d-flex">
                      <div className="label">Age:</div>
                      <div className="value">{equipment.age}</div>
                    </div>
                  </div>
                </div>
                <div className="qr-code">
                  <img src={equipment.qrCode} alt="" />
                </div>
              </div>
              <hr />
              <div className="components">
                <h3 className='sub-title'>Components</h3>
                <div className="content d-flex">
                  {equipment.components.map(component => 
                    <ComponentCard key={component.id} component={component} />
                  )}
                </div>
              </div>
              <hr />
              <div className="schematics">
                <h3 className='sub-title'>Schematics</h3>
                <Carousel variant="dark">
                  {equipment.schematics.length > 0 ?
                    equipment.schematics.map(schematic => 
                      <Carousel.Item key={schematic}>
                        <img src={schematic} alt="" />
                      </Carousel.Item>
                    )
                    :
                    <Carousel.Item>
                      <img src={require("../../../core/images/free-standing-panel.jpg")} alt="" />
                    </Carousel.Item>
                  }
                </Carousel>
              </div>
              <hr />
              <div className="pms-content">
                <h3 className='sub-title'>PMS / Test Report</h3>
              </div>
              <div className="documentation">

              </div>
            </div>
          )
        }}</EquipmentsContext.Consumer>
      </EquipmentsContextProvider>
    );
  }
}
 
export default EquipmentsShowView;