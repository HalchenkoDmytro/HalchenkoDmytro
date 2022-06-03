let users = [
	{
		name: 'Alex',
		surname: 'Smith',
		position: 'department head',
    experience: '14',
    salary: '5000'
	},
	{
		name: 'Jason',
		surname: 'Morgan',
		position: 'teller',
    experience: '3',
    salary: '2500'
	},
	{
		name: 'Patrick',
		surname: 'Stuart',
		position: 'manager-consultatnt',
    experience: '7',
    salary: '4540'
	},
  {
		name: 'Lisa',
		surname: 'Pain',
		position: 'manager-consultatnt',
    experience: '6',
    salary: '4600'
	},
  {
		name: 'Erica',
		surname: 'Larsson',
		position: 'teller',
    experience: '1',
    salary: '2800'
	}
];

const getCellValue = function(tr, idx){ return tr.children[idx].innerText || tr.children[idx].textContent; }

const comparer = function(idx, asc) { return function(a, b) { return function(v1, v2) {
  return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
  }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
}};

const buildTable = function buildTable(data) { 
  const table = document.createElement('table');
  table.setAttribute('id', 'grid');  
  let tr = document.createElement('tr');
  const keys = Object.keys(data[0]);
  console.log(keys);
  
  for (let i=0; i<keys.length; i++) {
      let key = keys[i];
      const colHeader = document.createElement('th');
      colHeader.appendChild(document.createTextNode(key));
      if (key == 'name' || key == 'surname' || key == 'position') {
        colHeader.setAttribute('data-type', 'string');
      } else {
        colHeader.setAttribute('data-type', 'number');
      }
      
      tr.appendChild(colHeader);
      
      colHeader.addEventListener('mouseover', function(event) {
        colHeader.style.backgroundColor = 'lightgray';
        colHeader.style.cursor = 'pointer';
      });
      colHeader.addEventListener('mouseout', function(event) {
        colHeader.style.backgroundColor = '';
      });
      colHeader.addEventListener('click', getCellValue);
  }
  
  table.appendChild(tr); 
  
  data.forEach(function (rowData) {    
      tr = document.createElement('tr');
      for (let i=0; i<keys.length; i++) {
          let key = keys[i];
          const colData = document.createElement('td');
          colData.appendChild(document.createTextNode(rowData[key]));
          tr.appendChild(colData);
      }
      table.appendChild(tr); 
  });
     
  return table;  
};

document.body.appendChild(buildTable(users));

Array.from(document.querySelectorAll('th')).forEach(function(th) { th.addEventListener('click', function() {
  const table = th.closest('table');
  Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
    .forEach(function(tr) { table.appendChild(tr) });
  })
});