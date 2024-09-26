const outcome = () => {
    const n1 = Number(document.getElementById('num-one').value);
    const n2 = Number(document.getElementById('num-two').value);
    const result = document.getElementById('resultArea');
    let total = 0;

    if (document.getElementById('box1').checked) {
        total = n1 + n2;
        result.innerHTML = total;
    }
    else if (document.getElementById('box2').checked) {
        total = n1 - n2;
        result.innerHTML = total;
    }
    else if (document.getElementById('box3').checked) {
        total = n1 * n2;
        result.innerHTML = total;
    }
    else if (document.getElementById('box4').checked) {
        total = n1 / n2;
        result.innerHTML = total;
    }
};