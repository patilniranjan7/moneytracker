import React from 'react'
import CardUI from '../UI/CardUI'
import LabelUI from '../UI/LabelUI'
import { paymentColors } from '../../constant/CssClasses'
import { C_time } from '../../constant/InvoicesData'

export default function RenderInvoice({ label, data, ClearPageName }) {
    const Current_time = C_time()
    return (
        <>
            <LabelUI heading={'All ' + (label && ` > ${label}`)} onClickEvent={ClearPageName} />
            <div className="flex flex-wrap">
                {
                    (data || []).map(invoice => {
                        console.log(invoice.dueDate > C_time())
                        const color = invoice.status === 'unpaid' ? invoice.dueDate > Current_time ? 'unpaid' : 'late' : invoice.status
                        if (color === label || label === '')
                            return (
                                <CardUI key={invoice.dueDate + invoice.name}>
                                    <div className='px-2'>
                                        {invoice?.name}
                                        <br />
                                        {invoice.remaining && `Need to Pay:-${invoice.remaining}`}
                                        <br />
                                        {invoice.status === 'unpaid' && `Last Date:-${new Date(invoice.dueDate)}`}
                                        <div className={`bg-${paymentColors[color]}-700 h-[10px] w-[10px] rounded-md absolute top-4 right-4`} />
                                    </div>
                                </CardUI>
                            )
                    }
                    )
                }
            </div>
        </>
    )
}
