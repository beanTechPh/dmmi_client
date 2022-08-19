import React from 'react';
import { useContext } from 'react';
import Modal from '../../../../core/utils/modal';
import PDFViewer from '../../../../core/utils/pdfViewer';
import { OrdersContext } from '../../contexts/ordersContext';

const OrderDetailsModal = () => {
  const context = useContext( OrdersContext );
  const { showOrder } = context;

  if(showOrder !== null){
    return (
      <Modal id="order-details-modal" title="Order Details" isHide={false}>
        <div className="group d-flex">
          <div className="label">Order No:</div>
          <div className="value">{showOrder.idNo}</div>
        </div>
        <div className="group d-flex">
          <div className="label">Date:</div>
          <div className="value">{showOrder.date}</div>
        </div>
        <div className="group d-flex">
          <div className="label">Price:</div>
          <div className="value">{showOrder.price}</div>
        </div>
        <div className="group d-flex">
          <div className="label">Status:</div>
          <div className={"value " + showOrder.status.toLowerCase().replace(/\s/g, '-')}>{showOrder.status}</div>
        </div>
        <div className="group mt-15">
          <div className="label">Description</div>
          <div className="value">{showOrder.description}</div>
        </div>
        <div className="group mt-15 d-flex">
          <div className="label">PDF File:</div>
          <div className="value">Purchased Order.pdf</div>
        </div>
        <PDFViewer url={require('../../../../core/files/test.pdf')} />
      </Modal>
    )
  }else{
    return('')
  }
}

export default OrderDetailsModal;