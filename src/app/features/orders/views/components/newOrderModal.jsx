import React from 'react';
import { useContext } from 'react';
import Modal from '../../../../core/utils/modal';

const NewOrderModal = () => {
  // const context = useContext( CompanyContext );
  // const { submitCreateStorefront } = context;

  return (
    <Modal id="new-order-modal" title="New Order">
      <p className='caption'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem soluta recusandae numquam amet expedita officia. Eveniet ipsum necessitatibus laboriosam architecto officiis!</p>
      <form action="#" method="post" id='new-order-form'>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" className='form-control'></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pdf">Upload PDF File</label>
          <input type="file" name="pdf" className='form-control' />
        </div>
        <center>
          <button className="btn btn-primary">Place Order</button>
        </center>
      </form>
    </Modal>
  )
}

export default NewOrderModal;