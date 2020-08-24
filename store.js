class Store {
    static getEmployees() {
        let employees;
        if(localStorage.getItem('employees') === null) {
            employees = [];
        } else {
            employees = JSON.parse(localStorage.getItem('employees'));
        }
        return employees;
    }

    static addEmployee(employee) {
        const employees = Store.getEmployees();
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
    }

    static removeEmployee(mobileno) {
        const employees = Store.getEmployees();
        employees.forEach((emp, index) => {
            if(emp.mobileno === mobileno) {
                employees.splice(index, 1);
            }
        });
        localStorage.setItem('employees', JSON.stringify(employees));
    }
}