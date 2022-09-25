import React from 'react';
import Modal from '../../../../core/utils/modal';
import QrReader from 'react-qr-scanner'

const ScanEquipmentModal = () => {
  // const context = useContext( CompanyContext );
  // const { submitCreateStorefront } = context;

  var handleScan = (data) => {
    console.error(data)
  }

  var handleError = (err) => {
    console.error(err)
  }

  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (
    <Modal id="equipment-scan-modal" title="Scan Equipment">
      {/* <QrReader
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        />
      <p>{''}</p> */}
    </Modal>
  )
}

export default ScanEquipmentModal;