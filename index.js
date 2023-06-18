// Write your solution in this file!
// employee, key, value;
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to create a new object with all the properties of the original employee object
    return {
      ...employee,
      // Update the value of the specified key in the new object
      [key]: value,
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the value of the specified key in the original employee object
    employee[key] = value;
    // Return the updated employee object
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    // Use the spread operator to create a new object with all the properties of the original employee object
    let newEmployee = { ...employee };
    // Delete the property with the specified key from the new object
    delete newEmployee[key];
    // Return the updated new object
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the property with the specified key from the original employee object
    delete employee[key];
    // Return the updated employee object
    return employee;
  }
