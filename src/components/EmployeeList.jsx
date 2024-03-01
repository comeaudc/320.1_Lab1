import EmployeeListItem from './EmployeeListItem';

export default function EmployeeList() {
  const employees = [
    { name: 'James King', job: 'Prez' },
    { name: 'Julie Taylor', job: 'VP' },
    { name: 'Eugene Lee', job: 'CFO' },
    { name: 'John Williams', job: 'VP of Engineering' },
    { name: 'Ray Monroe', job: 'VP of Sales' },
    { name: 'Paul Jones', job: 'QA Manager' },
  ];

  const populatedList = employees.map((el) => {
    return <EmployeeListItem name={el.name} job={el.job} />;
  });

  return <ul>{populatedList}</ul>;
}
