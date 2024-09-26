const update = () => {
    const bill = Number(document.getElementById('yourBill').value);
    const tipPercent = document.getElementById('tipInput').value;
    const split = document.getElementById('splitInput').value;

    const tipValue = bill * (tipPercent / 100);
    const billTotal = bill + tipValue;
    const billEach = billTotal / split;

    document.getElementById('tipPercent') .innerHTML = tipPercent + '%';
    document.getElementById('splitValue') .innerHTML = split + ' Person';

    document.getElementById('tipValue').innerHTML = tipValue.toFixed(2) + '$';
    document.getElementById('totalWithTip').innerHTML = billTotal.toFixed(2) + '$';
    document.getElementById('billEach').innerHTML = billEach.toFixed(2) + '$';

};