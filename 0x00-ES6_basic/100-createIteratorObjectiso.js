export default function createIteratorObject(report) {
  let newArray = [];
  for (let x in report.allEmployees) {
    const employees = report.allEmployees[x];
    for (let employee of employees) {
      newArray.push(employee);
    }
  }
  return newArray;
}
