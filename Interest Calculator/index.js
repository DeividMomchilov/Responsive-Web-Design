function calculateInterest() {
    const principal = Number(document.getElementById('principal').value);
    const rate = Number(document.getElementById('rate').value) / 100;
    const years = Number(document.getElementById('years').value);
    const totalAmount = document.getElementById('total-interest');
    

    const interest = (principal * Math.pow((1 + rate/1),1 * years) * years) / 100;

    totalAmount.textContent = interest.toLocaleString(undefined,{style:"currency",currency:"EUR"});
}