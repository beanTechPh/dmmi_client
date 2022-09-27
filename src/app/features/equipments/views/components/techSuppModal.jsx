import React from 'react';
import { useContext } from 'react';
import Modal from '../../../../core/utils/modal';
import { EquipmentsContext } from '../../contexts/equipmentsContext';

const TechSuppModal = (props) => {
  const context = useContext( EquipmentsContext );
  const { submitTechSupp } = context;
  const { equipment } = props

  return (
    <Modal id="equipment-techsupp-modal" title="Technical Support">
      <p className='caption'>Please list down your concerns and we will get back to you as soon as possible!</p>
      <form action="#" method="post" id='equipment-techsupp-form'>
        <div className="form-group">
          <label htmlFor="body">Concerns</label>
          <textarea name="body" className='form-control'></textarea>
        </div>
        <center>
          <button className="btn btn-primary" onClick={e => submitTechSupp(e, equipment)}>Send</button>
        </center>
      </form>
    </Modal>
  )
}

export default TechSuppModal;