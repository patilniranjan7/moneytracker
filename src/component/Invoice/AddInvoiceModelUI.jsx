import { TextField, Typography } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';
import { isNumber } from '../../constant/Common';
import { alignCenter } from '../../constant/CssClasses';
import { CreateInvoiceValue } from '../../constant/InvoicesData';
import ModalLayout from '../../layout/ModalLayout';

const AddInvoiceModelUI = ({ show, setShow, addInvoice }) => {
    const [value, setValue] = useState(CreateInvoiceValue)

    const handleChange = (e) => {
        if (isNumber(e.target.value) || e.target.id === 'name' || e.target.id === 'note')
            setValue({ ...value, [e.target.id]: e.target.value })
    }
    const handleSubmit = () => {
        const { rate, payment, expenses, totalhours, materials, name } = value
        const total = parseInt(rate) * parseInt(totalhours) + parseInt(expenses) + parseInt(materials)
        if (total !== 0 && total > payment && name) {
            addInvoice({ ...value, total: total, remaining: total - parseInt(payment) })
            setValue({ ...value, total: total })
        }
    }
    return (
        <ModalLayout show={show} setShow={setShow}>
            <Typography id="transition-modal-title" variant="h6" component="h5" className='text-center'>
                Create New Invoice
            </Typography>
            <div className="border mb-4" />
            <div className="flex flex-wrap">
                {value?.total ?
                    <form action={`mailto:${value.name}@gmail.com`} method="post" encType="text/plain">
                        Name:<br />
                        <input type="text" name="Name " value={value.name} /><br /><br />
                        Labor Charges : <input type="text" name="Charges " value={value.rate * value.totalhours} /> <br />
                        Last Date : <input type="text" name="Last Date " value={new Date(value.dueDate)} /> <br />
                        Materials and travelling : <input type="text" name="Expenses " value={parseInt(value.materials) + parseInt(value.expenses)} /><br /><br />
                        Note:<br />
                        <input type="text" name="Comment " value={value.note} /><br /><br />
                        <label className={alignCenter + ' w-full p-2'}>
                            <input type="submit" value="Send" id="sendMainBtn" className="hidden" onClick={setShow} />
                            <button htmlFor='sendMainBtn' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-[-2rem] mt-4">
                                Send Mail
                            </button>
                        </label>
                    </form>
                    :
                    <>
                        <div className='w-full p-2'>
                            <TextField id="name" label="Name" variant="standard" className='w-full' value={value.name} onChange={handleChange} />
                        </div>
                        <div className='md:w-1/2 w-full p-2'>
                            <TextField id="rate" label="Rate per Hour" variant="standard" value={value.rate} onChange={handleChange} />
                        </div>
                        <div className='md:w-1/2 w-full p-2'>
                            <TextField id="totalhours" label="Total Hours" variant="standard" value={value.totalhours} onChange={handleChange} />
                        </div>
                        <div className='md:w-1/2 w-full p-2'>
                            <TextField id="materials" label="Materials Cost" variant="standard" value={value.materials} onChange={handleChange} />
                        </div>
                        <div className='md:w-1/2 w-full p-2'>
                            <TextField id="expenses" label="Expenses" variant="standard" value={value.expenses} onChange={handleChange} />
                        </div>
                        <div className='md:w-1/2 w-full p-2'>
                            <TextField id="payment" label="Paid Amount" variant="standard" value={value.payment} onChange={handleChange} />
                        </div>
                        <div className='md:w-1/2 w-full p-2'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDatePicker
                                    label="Final Payment Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={value.dueDate}
                                    onChange={(params) => { const newDate = new Date(params).getTime(); setValue({ ...value, dueDate: newDate }) }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='w-full p-2'>
                            <TextField id="note" label="Add Note" variant="standard" className='w-full' value={value.note} onChange={handleChange} />
                        </div>
                        <div className={alignCenter + ' w-full p-2'}>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-[-2rem] mt-4" onClick={handleSubmit}>
                                Next
                            </button>
                        </div>
                    </>
                }
            </div>
        </ModalLayout >
    );
}

export default AddInvoiceModelUI;
