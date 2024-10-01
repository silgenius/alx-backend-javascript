export default function createIteratorObject(report) {
  const text = ''
  for (const x in report.allEmployees) {
    // Check if the property belongs to the report.allEmployees object itself
    if (report.allEmployees[x]) {
      const employees = report.allEmployees[x];
      for (const employee of employees) {
        text += employee + ' ' + '|' + ' ';
      }
    }
  }

  return text.slice(0, text.length - 3);
}
