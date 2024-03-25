function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const term = parseInt(document.getElementById('loan-term').value);

    const monthlyInterest = amount * rate / 12;
    const monthlyPayment = (amount / term) + monthlyInterest;
    const totalPayment = monthlyPayment * term;

    document.getElementById('result').innerHTML = `
        <p>Cuota mensual: <strong>$${monthlyPayment.toFixed(2)}</strong></p>
        <p>Pago total: <strong>$${totalPayment.toFixed(2)}</strong></p>
    `;
}