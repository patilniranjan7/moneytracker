export const InvoicesType = [
    'paid', 'unpaid', 'late'
]

export function C_time() {
    const time = (new Date()).getTime();
    return time;
}

export const CreateInvoiceValue = { name: '', rate: 0, totalhours: 0, materials: 0, expenses: 0, status: '', payment: 0, dueDate: C_time(), remaining: 0 }