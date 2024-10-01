export default function createIteratorObject(report) {
  const parts = []; // Use an array to gather parts
  
  for (const x in report.allEmployees) {
    // Check if the property belongs to the report.allEmployees object itself
    if (report.allEmployees.hasOwnProperty(x)) {
      const employees = report.allEmployees[x];
      for (const employee of employees) {
        parts.push(employee); // Add each employee to the array
      }
    }
  }

  // Join the parts with ' | ' and return the result
  return parts.join(' | ');
}

