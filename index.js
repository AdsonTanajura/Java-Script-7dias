const carLoan = ({loan, rate = 2.9, years = 5}) => {
    return (loan * rate / 100 * years) + loan;
};

const loan = carLoan({loan: 20000})

console.log(loan)