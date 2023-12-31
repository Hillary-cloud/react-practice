import { useState } from "react";
import "../App.css";
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";
import {v4 as uuidv4  } from "uuid";
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header";

function Employees() {
  const showEmployee = true;
  const [role, setRole] = useState("dev");

  const [employees, setEmployees] = useState([
    {id: 1, name: 'Hillary', role: 'frontend', age: '20', img: "/images/img1.png"},
    {id: 2, name: 'James', role: 'backend', age: '22', img: "/images/img2.jpg"},
    {id: 3, name: 'Mike', role: 'fullstack', age: '24', img: "/images/img3.jpg"},
    {id: 4, name: 'Philip', role: 'frontend', age: '26', img: "/images/img4.jpg"},
    {id: 5, name: 'Mario', role: 'backend', age: '25', img: "/images/img5.JPG"},
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updateEmployees = employees.map((employee)=>{
      if (id == employee.id) {
        return {...employee, name: newName, role: newRole};        
      }
      return employee;
  });
    setEmployees(updateEmployees);
  };

  const newEmployee = (name,role,img,age) => {
    const newEmployees = {
      id: uuidv4(),
      name: name,
      role: role,
      age: age,
      img: img,
    };
    setEmployees([...employees, newEmployees])
  }
  return (
    <>
    <div>
      {showEmployee ? (
        <div>
          <input type="text" onChange={(e) => setRole(e.target.value)} />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (<EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee} />);
              return (<Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} age={employee.age} img={employee.img} editEmployee={editEmployee} />)
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </div>
      ) : (
        <p>no employee</p>
      )}
      
    </div>
    </>
  );
}

export default Employees;
