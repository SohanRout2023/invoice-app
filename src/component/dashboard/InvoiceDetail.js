import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const InvoiceDetail = () => {
    const location = useLocation()
    const [data,setData] = useState(location.state)
    console.log(location.state)

      //   To download pfd the following code we have to write
    const printInvoice =() => {
            const input = document.getElementById('invoice')
            html2canvas(input)
            .then((canvas) =>{
               const imageData = canvas.toDataURL('image/png',1.0)
               const pdf = new jsPDF({
                  orientation:'portrait',
                  unit:'pt',
                  format:[612,792]
               })
               pdf.internal.scaleFactor = 1
               const imageProps = pdf.getImageProperties(imageData)   // here we will get the image properties 
               const pdfWidth = pdf.internal.pageSize.getWidth()
               const pdfHeight = (imageProps.height * pdfWidth)/imageProps.width

               pdf.addImage(imageData,'PNG',0,0,pdfWidth,pdfHeight)
               pdf.save('invoice'+ new Date())
            })
    }
  return (
     <div>
      <div className='invoice-top-header'>
      <button onClick={printInvoice} className='print-btn'>DownLoad Invoice</button>
      </div>
        <div id = 'invoice'className='invoice-wrapper'>
         <div className='invoice-header'>
            <div className='company-detail'>
               <img  className='company-logo' alt='logo' src={localStorage.getItem('photoURL')}></img>
               <p className='cName'>{localStorage.getItem('cName')}</p>
               <p>{localStorage.getItem('email')}</p>

            </div>
            <div className='customer-detail'>
               <h2>Invoice</h2>
               <p>To:-{data.to}</p>
               <p>Phone:-{data.phone}</p>
               <p>Address:-{data.address}</p>

            </div>
         </div>
         <table className='product-table'>
            <thead>
            <tr>
               <th>S.No</th>
               <th>Product Name</th>
               <th>Price</th>
               <th>Quantity</th>
               <th>Total</th>
            </tr>
            </thead>
            <tbody>
               {
                  // to bring data from concole to real site the following code we have to write
                 data.product.map((product,index)=>(
                  <tr key={product.id}>        
                     <td>{index+1}</td>
                     <td>{product.name}</td>
                     <td>{product.price}</td>
                     <td>{product.qty}</td>
                     <td>{product.qty*product.price}</td>
                  </tr>
                 ))
               }
            </tbody>
            <tfoot>
               <tr>
                  <td colSpan="4">Total</td>
                  <td>{data.total}</td>
               </tr>
            </tfoot>
         </table>

        </div>
     </div>
  )
}

export default InvoiceDetail