
class UI {
    static displayEmployees() {
        const employees = Store.getEmployees();
        employees.forEach((employee) => UI.addEmployeeToList(employee));
    }

    static addEmployeeToList(employee) {
        const list = document.querySelector('#emp-list');
        const row = document.createElement('tr');
        row.className = '';
        row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.address}</td>
      <td>${employee.mobileno}</td>
      <td>${employee.department}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">delete</a></td>
    `;
        list.appendChild(row);
    }

    static deleteEmployee(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#emp-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#address').value = '';
        document.querySelector('#mobileno').value = '';
        document.querySelector('#department').value = '';
    }
}