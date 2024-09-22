import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import { arabicLocaleText } from '../../../utils/arabic-settings';

// Define static data with images
const rows = [
  { id: 1, productName: 'Product A', quantity: 2, price: 50, discount: 5, total: 90, imageUrl: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-35708,resizemode-75,msid-98897903/top-trending-products/mobile-phones/6-latest-mobile-phones-with-12gb-ram-in-india-in-2023-starting-at-rs-29999.jpg' },
  { id: 2, productName: 'Product B', quantity: 1, price: 100, discount: 10, total: 90, imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/iphone_15_0-three_four.jpg?VersionId=en5ekH9Vu4bG8.Ji1ViYw6J2IwoglqEz' },
  { id: 3, productName: 'Product C', quantity: 3, price: 30, discount: 0, total: 90, imageUrl: 'https://marketplace.canva.com/print-mockup/bundle/E9Me4jcyzMX/fit%3Afemale%2Cpages%3Adouble-sided%2Csurface%3Amarketplace/product%3A171618%2Csurface%3Amarketplace/EAFam5QLuIc/1/0/933w/canva-black-white-typography-motivation-tshirt-WKRZLU21i2c.png?sig=bc03703936ce8090247068bcf3a44f0e&width=800' },
  { id: 4, productName: 'Product D', quantity: 5, price: 20, discount: 10, total: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MeEJfXCzjMFf5CWZidfRVVjCN6rP1wV7Pw&s' },
  { id: 5, productName: 'Product E', quantity: 2, price: 40, discount: 5, total: 75, imageUrl: 'https://post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg' },
  // Add more rows as needed
];

// Define columns with image column
const columns = [
  {
    field: 'imageUrl',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => (
      <img src={params.value} alt={params.row.productName} style={{ margin: "auto" ,width: '3rem', height: '3rem',objectFit: "cover", borderRadius: "7px" }} />
    ),
  },
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
        <div style={{ height: 355, width: '100%', marginTop:"1rem" }}>
          <DataGrid
            rows={rows}   
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{
              Toolbar: GridToolbar,
            }}
            hideFooterPagination={true}
            localeText={arabicLocaleText}
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
