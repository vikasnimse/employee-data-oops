
document.addEventListener('DOMContentLoaded', UI.displayEmployees);
document.querySelector('#emp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const address = document.querySelector('#address').value;
    const mobileno = document.querySelector('#mobileno').value;
    const department = document.querySelector('#department').value;
    if(name === '' || address === '' || mobileno === ''|| department === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        const employee = new Employee(name, address, mobileno, department);
        UI.addEmployeeToList(employee);
        Store.addEmployee(employee);
        UI.showAlert('Employee Added', 'success');
        UI.clearFields();
    }
});

document.querySelector('#emp-list').addEventListener('click', (e) => {
    UI.deleteEmployee(e.target);
    Store.removeEmployee(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Employee Removed', 'success');
});