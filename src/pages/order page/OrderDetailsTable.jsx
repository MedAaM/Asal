import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { arabicLocaleText } from '../../utils/arabic-settings';

// Define static data
const rows = [
  { id: 1, productName: 'Product A', quantity: 2, price: 50, discount: 5, total: 90 },
  { id: 2, productName: 'Product B', quantity: 1, price: 100, discount: 10, total: 90 },
  { id: 3, productName: 'Product C', quantity: 3, price: 30, discount: 0, total: 90 },
  { id: 4, productName: 'Product D', quantity: 5, price: 20, discount: 10, total: 90 },
  { id: 5, productName: 'Product E', quantity: 2, price: 40, discount: 5, total: 75 },
  { id: 5, productName: 'Product E', quantity: 2, price: 40, discount: 5, total: 75 },
  { id: 5, productName: 'Product E', quantity: 2, price: 40, discount: 5, total: 75 },
  { id: 5, productName: 'Product E', quantity: 2, price: 40, discount: 5, total: 75 },
];

// Define columns
const columns = [
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'quantity', headerName: 'Quantity', width: 150 },
  { field: 'price', headerName: 'Price', width: 150, type: 'number' },
  { field: 'discount', headerName: 'Discount', width: 150, type: 'number' },
  { field: 'total', headerName: 'Total', width: 150, type: 'number' }
];

function OrderDetailsTable() {
  return (
    <div className="df ai-fs">
    <div className="section-card g0">
      <Typography variant='h6' className="mb-4">Order Details</Typography>
      <div style={{ height: 460, width: '100%', marginTop:"1rem" }}>
        <DataGrid
          rows={rows}   
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={{
            Toolbar: GridToolbar,
          }}
          hideFooterPagination={true}
          localeText={arabicLocaleText} // Optional: use Arabic locale settings if needed
        />
      </div>
      <div className="main-details">
          <div className="df jc-sb g4"><div className='text'>Subtotal:</div><div className="bold-1">$2,093</div></div>
          <div className="df jc-sb g4"><div className='text'>Shipping Fee:</div><div className="bold-1">$2,093</div></div>
          <div className="df jc-sb g4"><div className='text'>Tax:</div><div className="bold-1">$2,093</div></div>
          <div className="df jc-sb g4"><div className='text'>Total:</div><div className="bold-1">$2,093</div></div>
        
      </div>
      
    </div>
    
    </div>
  );
}

export default OrderDetailsTable;
