import React from 'react';
import { useContext } from 'react';
import Modal from '../../../../core/utils/modal';
import { InquiriesContext } from '../../contexts/inquiriesContext';

const InquiryCreateModal = () => {
  const context = useContext( InquiriesContext );
  const { submitInquiry } = context;

  return (
    <Modal id="equipment-create-modal" title="Inquiry">
      <form action="#" method="post" id='equipment-create-form'>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type='text' name="subject" className='form-control'/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Description</label>
          <textarea name="body" className='form-control'></textarea>
        </div>
        <center>
          <button className="btn btn-primary btn-sm" onClick={submitInquiry}>Send</button>
        </center>
      </form>
    </Modal>
  )
}

export default InquiryCreateModal;