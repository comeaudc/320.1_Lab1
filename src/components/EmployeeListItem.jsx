export default function EmployeeListItem({name, job}) {
  return (
    <li>
      <h4>{name}</h4>
      <h5>{job}</h5>
    </li>
  );
}
