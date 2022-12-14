import React from 'react'
import { useToggle } from 'react-use'
import axios from 'axios'
import { notify } from 'react-notify-toast';
import AddInvoiceModelUI from './AddInvoiceModelUI';
import { Button } from '@mui/material';
import { Endpoint } from '../../constant/Common';
import { C_time } from '../../constant/InvoicesData';

export default function AddInvoice({ addNewInvoice }) {
    const [show, setShow] = useToggle(false)

    const addInvoice = (invoice) => {
        notify.show('Adding Invoice...', 'warning');
        invoice.status = invoice.total - invoice.payment <= 0 ? 'paid' : 'unpaid';
        notify.show('Invoice Added', 'success');
        addNewInvoice(invoice)
        // const time = C_time()
        // const url = `${Endpoint.API_URL}${time}`
        // axios
        //     .post(url, {
        //         ...invoice
        //     })
        //     .then(res => {
        //         console.log(res)
        //         notify.show('Invoice Added', 'success');
        //         addNewInvoice(invoice)
        //     })
        //     .catch(function (error) {
        //         notify.show('Please try again later', 'error');
        //         console.log(error);
        //     })
        //     .finally(function () {
        //     });
    }
    return (
        <div className={'absolute bottom-8 right-8'}>
            <div className='flex-column' onClick={setShow}>
                {/* <img src={plusIcon} width={20} className='mx-auto my-2' /> */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Add New Invoice
                </button>
            </div>
            {show && <AddInvoiceModelUI show={show} setShow={setShow} addInvoice={addInvoice} />}
        </div>
    )
}
