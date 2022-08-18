import React from 'react';
import { useContext } from 'react';
import { OrdersContext } from '../../contexts/ordersContext';

const OrderTableRows = () => {
  const context = useContext( OrdersContext );
  const { orders, orderTableRowClick } = context;

  return (
    <React.Fragment>
      {orders.map( order => 
        <tr key={order.id} onClick={e => orderTableRowClick(order)}>
          <td className="date">{order.date}</td>
          <td className="id-no">{order.idNo}</td>
          <td className="price">{order.price}</td>
          <td className="status">
            <div className={order.status.toLowerCase().replace(/\s/g, '-')}>{order.status}</div>
          </td>
        </tr>
      )}
    </React.Fragment>
  )
}

export default OrderTableRows;