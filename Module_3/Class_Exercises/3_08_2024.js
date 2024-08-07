/*
   const companyData = {
     "company": {
      "name": "Tech Innovators Inc.",
      "departments": [
        {
          "name": "Engineering",
          "employees": [
            {
              "name": "Alice Johnson",
              "position": "Software Engineer",
              "projects": [
                {
                  "name": "Project Alpha",
                  "deadline": "2024-12-01"
                },
                {
                  "name": "Project Beta",
                  "deadline": "2025-03-15"
                }
              ]
            },
            {
              "name": "Bob Smith",
              "position": "DevOps Engineer",
              "projects": [
                {
                  "name": "Infrastructure Upgrade",
                  "deadline": "2024-10-20"
                }
              ]
            }
          ]
        },
        {
          "name": "Marketing",
          "employees": [
            {
              "name": "Carol White",
              "position": "Marketing Manager",
              "projects": [
                {
                  "name": "Product Launch Campaign",
                  "deadline": "2024-09-30"
                }
              ]
            },
            {
              "name": "David Brown",
              "position": "SEO Specialist",
              "projects": [
                {
                  "name": "Website SEO Optimization",
                  "deadline": "2024-08-15"
                }
              ]
            }
          ]
        },
        {
          "name": "Sales",
          "employees": [
            {
              "name": "Eve Black",
              "position": "Sales Representative",
              "projects": [
                {
                  "name": "Client Outreach Program",
                  "deadline": "2024-11-05"
                }
              ]
            }
          ]
        }
      ]
    }
  }
companyData?.company?.departments?.forEach(department => {
  console.log(`Department: ${department.name}`);
  department?.employees?.forEach(employee => {
    employee?.projects?.forEach(project => {
      console.log(`  Project Name: ${project.name}, Deadline: ${project.deadline}`);
    });
  });
});
const company = companyData?.company ? companyData.company : null;
const departments = company?.departments ? company.departments : [];
departments.forEach((department) => {
  console.log(`Department: ${department.name}`);
  const employeeArr = department?.employees ? department?.employees : [];
  employeeArr.forEach((employee) => {
    const projectArr = employee?.projects ? employee.projects : [];
    projectArr.forEach((project) => {
      console.log(`  Project Name: ${project.name}, Deadline: ${project.deadline}`);
    });
  });
});
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'David', age: 30 }
];

//Let's group an array of user objects by their age.
//i would iterate through the array to compare ages, create temporary arrays to store each new age and add existing ages to those arrays

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'David', age: 30 }
];


//Let's group an array of user objects by their age.

// Output: 
// {
//   '25': [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 3, name: 'Charlie', age: 25 }
//   ],
//   '30': [
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 4, name: 'David', age: 30 }
//   ]
// }

let result = {};
for(let i = 0; i < users.length ; i++)
{
  //Check if the property exist in the object result or not
  //if the key/property doesn't exist so we need to set the key and empty array
  if(!result[users[i]?.age])
  {
    result[users[i]?.age] = [];
  } 
  result[users[i]?.age].push(users[i]);
}


const groupByAge = users.reduce((acc, user) => {
  if(!acc[user?.age]){
    acc[user?.age] = [];
  }
  acc[user?.age].push(user);
  return acc; 
}, {});

console.log(groupByAge);

*/

const bookstore = [
  {
    category: "Fiction",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.99,
      },
      { title: "1984", author: "George Orwell", price: 8.99 },
    ],
  },
  {
    category: "Non-Fiction",
    books: [
      { title: "Sapiens", author: "Yuval Noah Harari", price: 14.99 },
      { title: "Educated", author: "Tara Westover", price: 12.99 },
    ],
  },
  {
    category: "Science Fiction",
    books: [
      { title: "Dune", author: "Frank Herbert", price: 9.99 },
      { title: "Neuromancer", author: "William Gibson", price: 11.99 },
    ],
  },
];

//Extract Book Titles: Create a flat array of book titles from all categories.

let bookTitlesArr = [];

bookstore.forEach((category) => {
  const bookset = category?.books ? category.books : [];
  bookset.forEach((bookset) => {
    const bookTitle = bookset?.title ? bookset.title : null;
    bookTitlesArr.push(bookset.title);
  });
});

//console.log(bookTitlesArr);

//Calculate Average Price per Category: Create an array where each element represents a category with its name and the average price of books in that category.

function averagePrice() {
  bookstore.forEach((category) => {
    let catArr = [];
    const bookset = category?.books ? category.books : [];
    bookset.forEach((bookset) => {
      const bookPrice = bookset?.price ? bookset.price : null;
      catArr.push(bookPrice);
    });
    const sum = catArr.reduce(getSum);
    console.log(`${category.category} average price at ${sum}`);
  });
}

function getSum(acc, element) {
  return acc + element;
}

//console.log(averagePrice());

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 4 },
    ],
  },
];

let ttlOrders = 0;
orders.forEach((entry) => {
  const itemsArr = entry?.items ? entry.items : null;
  let quantityArr = itemsArr.map(getQuant)
  let totalQuant = quantityArr.reduce(getSum);
  console.log(`total quantity of id ${entry.id} is ${totalQuant}`);
  ttlOrders = ttlOrders + totalQuant;
  });

  console.log(`total orders are ${ttlOrders}`);

  function getQuant(entry){
    return entry?.quantity ? entry.quantity : null;
  }

//console.log(quantityByOrder);
//: Combining map and reduce
// You have an array of orders, each containing a list of items. You need to calculate the total quantity of all items across all orders.
//wanted outcome is 8


const company = [
  {
    department: 'Engineering',
    employees: [
      { name: 'Alice', salary: 120000 },
      { name: 'Bob', salary: 110000 }
    ]
  },
  {
    department: 'Sales',
    employees: [
      { name: 'Charlie', salary: 90000 },
      { name: 'Dave', salary: 95000 }
    ]
  },
  {
    department: 'HR',
    employees: [
      { name: 'Eve', salary: 70000 },
      { name: 'Frank', salary: 75000 }
    ]
  }
];

//Find the department with the highest total salary.
//Extract all employee names from that department.
//Calculate the average salary of employees in that department.

let salaries = [];
company.forEach((entry)=> {
  employeesArr=entry?.employees ?? null;
  employeesArr.forEach((entry)=> {
    salaries.push(entry.salary);
  })
})
console.log(salaries);
