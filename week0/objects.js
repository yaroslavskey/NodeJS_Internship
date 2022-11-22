const invoice = {
    firstName: 'Node',
    lastName: 'Developer',
    createdAt: '2022-10-31T22:50:59.305Z',
    amount: 150,
    currency: 'USD',
};

/**
 * 1. Log firstName and lastName in dot notation and bracket notation
 */

console.log(`First name: ${invoice.firstName}`);
console.log(`Last name:`, invoice[`lastName`]);

/**
 * 2. Log Object Keys
 */

const keys = Object.keys(invoice);

console.log({
    keys,
});

/**
 * 3. Log Object values
 */

const values = Object.values(invoice);

console.log({
    values,
});

/**
 * 4. Log Object entries
 */

const entries = Object.entries(invoice);

console.log({
    entries,
});

/**
 * 5. Create second variable invoce from original
 * Please, use more than one solution 
 */

const copiedInvoice =  JSON.parse(JSON.stringify(invoice));//глубокое копирование
const copiedInvoiceTwo = Object.assign({}, invoice);//поверхностное копирование
const copiedInvoiceThree = {...invoice};

console.log({
    copiedInvoice,
    copiedInvoiceTwo,
    copiedInvoiceThree,
});

/**
 * 6. Modify copiedInvoice amount value
 * Important: original invoice amount shouldnt be modifiedнхб
 */

copiedInvoice.amount = 300;

console.log({
    invoice,
    copiedInvoiceTwo,
});

/**
 * 7. Loop through object and log key-values
 */

// eslint-disable-next-line no-const-assign
for (keys in invoice) {
    console.log(keys + " -> " + invoice[keys]);
}