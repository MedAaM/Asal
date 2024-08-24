import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './orders.css';
import { arabicLocaleText } from '../../utils/arabic-settings';
import { TbClock12, TbEyeDollar, TbLayoutAlignCenter } from 'react-icons/tb';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useFetchData } from '../../hooks/useFetchData';
import Menu from '../../components/menu/Menu';

function Orders() {
  const { data } = useFetchData("orders", false);
  const [columns, setColumns] = useState([]);
  const [productsMenu, showProductsMenu] = useState(false);
  const [rows, setRows] = useState([]);
const [selected, setSelected] = useState("");
  const [opened, setOpened] = useState(false);

  const handleSelectChange = (event) => {
    setSelected(event.target.value);
    console.log("Selected platform:", event.target.value);
  };
  const handleOpenChange = () => {
    setOpened(!opened);
    console.log(opened);
    
  };
  
  useEffect(() => {
    if (data && data.orders) {
      const staticColumns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { 
          field: 'products', 
          headerName: 'Products', 
          width: 300,
          renderCell: (params) => {
            const products = params.value;
      
            // Check if params.value is an array
            if (Array.isArray(products)) {
              return (
                <Menu products={products} />
              );
            }
      
            // Fallback for non-array values
            return <div>{products || 'N/A'}</div>;
          }
        },
        { field: 'billingAddress_firstName', headerName: 'Billing First Name', width: 150 },
        { field: 'billingAddress_lastName', headerName: 'Billing Last Name', width: 150 },
        { field: 'billingAddress_address', headerName: 'Billing Address', width: 200 },
        { field: 'billingAddress_city', headerName: 'Billing City', width: 150 },
        { field: 'billingAddress_state', headerName: 'Billing State', width: 150 },
        { field: 'billingAddress_postalCode', headerName: 'Billing Postal Code', width: 150 },
        { field: 'billingAddress_country', headerName: 'Billing Country', width: 150 },
        { field: 'shippingAddress_firstName', headerName: 'Shipping First Name', width: 150 },
        { field: 'shippingAddress_lastName', headerName: 'Shipping Last Name', width: 150 },
        { field: 'shippingAddress_address', headerName: 'Shipping Address', width: 200 },
        { field: 'shippingAddress_city', headerName: 'Shipping City', width: 150 },
        { field: 'shippingAddress_state', headerName: 'Shipping State', width: 150 },
        { field: 'shippingAddress_postalCode', headerName: 'Shipping Postal Code', width: 150 },
        { field: 'shippingAddress_country', headerName: 'Shipping Country', width: 150 },
        { field: 'user', headerName: 'User ID', width: 150 },
        { field: 'subtotal', headerName: 'Subtotal', width: 150 },
        { field: 'discount', headerName: 'Discount', width: 150 },
        { field: 'shippingCost', headerName: 'Shipping Cost', width: 150 },
        { field: 'tax', headerName: 'Tax', width: 150 },
        { field: 'total', headerName: 'Total', width: 150 },
        { field: 'paymentMethod', headerName: 'Payment Method', width: 150 },
        { field: 'paymentStatus', headerName: 'Payment Status', width: 150 },
        { field: 'orderStatus', headerName: 'Order Status', width: 150 },
        { field: 'createdAt', headerName: 'Created At', width: 200 },
        { field: 'updatedAt', headerName: 'Updated At', width: 200 },
      ];

      setColumns(staticColumns);
      const transformedRows = data.orders.map(order => {
        const products = Array.isArray(order.products) ? order.products.map(product => ({
          productId: product.productId,
          quantity: product.quantity,
          refundRequest: product.refundRequest
        })) : [];
        return {
          id: order._id,
          products: products.length ? products : 'N/A',
          billingAddress_firstName: order.billingAddress.firstName || 'N/A',
          billingAddress_lastName: order.billingAddress.lastName || 'N/A',
          billingAddress_address: order.billingAddress.address || 'N/A',
          billingAddress_city: order.billingAddress.city || 'N/A',
          billingAddress_state: order.billingAddress.state || 'N/A',
          billingAddress_postalCode: order.billingAddress.postalCode || 'N/A',
          billingAddress_country: order.billingAddress.country || 'N/A',
          shippingAddress_firstName: order.shippingAddress?.firstName || 'N/A',
          shippingAddress_lastName: order.shippingAddress?.lastName || 'N/A',
          shippingAddress_address: order.shippingAddress?.address || 'N/A',
          shippingAddress_city: order.shippingAddress?.city || 'N/A',
          shippingAddress_state: order.shippingAddress?.state || 'N/A',
          shippingAddress_postalCode: order.shippingAddress?.postalCode || 'N/A',
          shippingAddress_country: order.shippingAddress?.country || 'N/A',
          user: order.user || 'N/A',
          subtotal: order.subtotal || 0,
          discount: order.discount || 0,
          shippingCost: order.shippingCost || 0,
          tax: order.tax || 0,
          total: order.total || 0,
          paymentMethod: order.paymentMethod || 'N/A',
          paymentStatus: order.paymentStatus || 'N/A',
          orderStatus: order.orderStatus || 'N/A',
          createdAt: order.createdAt ? new Date(order.createdAt).toLocaleString() : 'N/A',
          updatedAt: order.updatedAt ? new Date(order.updatedAt).toLocaleString() : 'N/A',
        };
      });

      setRows(transformedRows);
    }
  }, [data]);

  return (
    <div className="orders df-c">
      <ul className="df box-info">
        <li>
          <TbLayoutAlignCenter className="bx bxs-calendar-check" />
          <span className="text">
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <TbClock12 className="bx bxs-group" />
          <span className="text">
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <TbEyeDollar className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>


      <div className="orders-table" style={{ height: "100vh", width: '100%' }}>
        <DataGrid 
          rows={rows} 
          columns={columns} 
          pageSize={5} 
          slots={{ toolbar: GridToolbar }}
          localeText={arabicLocaleText} 
        />
      </div>

      <div className="section">
        <h3>Make a Transaction</h3>
        <div className="df jc-sa ai-stretch">
          <div className="df-c">
            <div className="df-c">
              <div className="df-c g0">
                <label htmlFor="name">الاسم</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="df-c g0">
                <label htmlFor="fname">اللقب</label>
                <input type="text" name="fname" id="fname" />
              </div>
            </div>
            <div className="df-c g0">
              <label htmlFor="address">العنوان</label>
              <input type="text" name="address" id="address" />
            </div>
          </div>
          <div className="df-c jc-sa ">
            <div className="df-c g0">
            select honey type
          <div id="select-box">
            <input type="checkbox" onChange={handleOpenChange} id="options-view-button" />
            <div id="select-button" className="brd">
              <div id="selected-value">
                <span>{selected ? selected : "Select a platform"}</span>
              </div>
              <div id="chevrons">
              {!opened && <MdKeyboardArrowDown className="fas fa-chevron-up" />}
              {opened && <MdKeyboardArrowUp className="fas fa-chevron-down" />}
                
              </div>
            </div>
            <div id="options">
              <div className="option">
                <input 
                  className="s-c top" 
                  type="radio" 
                  name="platform" 
                  value="CodePen" 
                  onChange={handleSelectChange} 
                />
                <input 
                  className="s-c bottom" 
                  type="radio" 
                  name="platform" 
                  value="CodePen" 
                  onChange={handleSelectChange} 
                />
                <i className="fab fa-codepen"></i>
                <span className="label">CodePen</span>
                
              </div>
              <div className="option">
                <input 
                  className="s-c top" 
                  type="radio" 
                  name="platform" 
                  value="Dribbble" 
                  onChange={handleSelectChange} 
                />
                <input 
                  className="s-c bottom" 
                  type="radio" 
                  name="platform" 
                  value="Dribbble" 
                  onChange={handleSelectChange} 
                />
                <i className="fab fa-dribbble"></i>
                <span className="label">Dribbble</span>
             
              </div>
              <div className="option">
                <input 
                  className="s-c top" 
                  type="radio" 
                  name="platform" 
                  value="Behance" 
                  onChange={handleSelectChange} 
                />
                <input 
                  className="s-c bottom" 
                  type="radio" 
                  name="platform" 
                  value="Behance" 
                  onChange={handleSelectChange} 
                />
                <i className="fab fa-behance"></i>
                <span className="label">Behance</span>
             
              </div>
              <div className="option">
                <input 
                  className="s-c top" 
                  type="radio" 
                  name="platform" 
                  value="HackerRank" 
                  onChange={handleSelectChange} 
                />
                <input 
                  className="s-c bottom" 
                  type="radio" 
                  name="platform" 
                  value="HackerRank" 
                  onChange={handleSelectChange} 
                />
                <i className="fab fa-hackerrank"></i>
                <span className="label">HackerRank</span>
               
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
            </div>
          <div className="df-c g0">
            <label htmlFor="">quantity</label>
            <input type="number" name="" id="" />
          </div>

          <div className="btn">confirm transaction</div>

          </div>

          <div className="actions">
            <div className="df">
              <span>صمرة</span>
              <div className="progress-container">
                <div className="progress-bar" style={{width: `${30.23}%`}}>
                  <div className="progress-label">30.23%</div>
                </div>
              </div>
            </div>
            <div className="df">
              <span>سدر</span>
              <div className="progress-container cyan">
                <div className="progress-bar cyan" style={{width: `${58.23}%`}}>
                  <div className="progress-label">58.23%</div>
                </div>
              </div>
            </div>
            <div className="df">
              <span>عسل أبيض</span>
              <div className="progress-container pink">
                <div className="progress-bar pink" style={{width: `${60.73}%`}}>
                  <div className="progress-label">60.73%</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Orders;
