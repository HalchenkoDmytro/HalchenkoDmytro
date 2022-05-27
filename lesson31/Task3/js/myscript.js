class Employee {
  constructor(name, surname, position, salary) {
    this.name = name;
    this.surname = surname;
    this.position = position;
    this.salary = salary;
  }
}

const employers = [
  new Employee('Alex', 'Smith', 'department head', '5.000'),
  new Employee('Jason', 'Morgan', 'teller', '2.500'),
  new Employee('Patrick', 'Stuart', 'manager-consultant', '4.540'),
  new Employee('Lisa', 'Pain', 'manager-consultant', '4.600'),
  new Employee('Erica', 'Larsson', 'teller', '2.800')
];

class EmplTable {
  constructor(arr) {
    this.arr = arr;
  }

  getHtml() {
    let list = '<div>';
    for (let i = 0; i < this.arr.length; i++) {
      list += '<div>';
      for (let key in this.arr[i]) {
        list += '<span>' + this.arr[i][key] + '</span>' + ' ' + '<span>' + '</span>';
      }
      list += '</div>';
    }
    list += '</div>';
    return list;
  }
}

class StyledEmplTable extends EmplTable {
  getStyles() {
    return '<style> div{width: 400px; padding: 15px; margin: auto; text-align:center} span{border-bottom: 1px solid grey} </style>';
  }
  getHtml() {
    return this.getStyles() + super.getHtml();
  }
}

let newList = new StyledEmplTable(employers);
document.write(newList.getHtml());