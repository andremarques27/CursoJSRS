let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450]
}

function sum(array) {
    let total = 0;
    
    for(let value of array) {
        total += value
    }
    
    return total
}

function CalculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculatesExpenses = sum(family.expenses)

    const total = calculateIncomes - calculatesExpenses

    const itsOk = total >= 0

    let balanceText = 'Negativo'

    if (itsOk) {
        balanceText = 'Positivo'
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}

CalculateBalance()