import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

const HomePage = () => {
  return (
    <div className="page">
      <Header title={"Employee Directory"}/>
      <SearchBar />
      <EmployeeList />
    </div>
  );
};

export default HomePage;
