function cost(id){
    const Cost= document.getElementById(id);
    const CostString = Cost.value;
    const CostNumber = parseFloat(CostString);
    Cost.value ='';
    return CostNumber;

}

document.getElementById('btn').addEventListener('click', function(){
    const income = document.getElementById('income');
    const incomestring = income.value;
    const incomeint = parseFloat(incomestring);
    income.value ='';
    const a = cost('food');
    const b = cost('rent');
    const c = cost('cloth');
    const d = a + b + c;
    const save = incomeint - d;

    const total_expenses = document.getElementById('total-expenses');
    total_expenses.innerText = d;
    const balance = document.getElementById('balance');
    balance.innerText = save;


})