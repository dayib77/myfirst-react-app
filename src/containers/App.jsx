import { useEffect, useState } from "react";
import CardList from "../components/card/CardList";
import Searbox from "../components/search/Search";
import Title from "../components/title/Title";
import Scroll from "../components/scroll/Scroll";
import "../css/App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, function to update the value]
  const [robots, setRobots] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setRobots(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    // chaining fetch with then to handle promises
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => setRobots(users))
    //   .catch(error => console.error("Error fetching users:", error));

    // Using async/await syntax to fetch data
    fetchUsers();
  }, []);

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  // Conditional Rendering: Display a loading message until data is fetched
  if (!robots.length) return <h1 className="tc">Loading...</h1>;

  return (
    <div className="tc">
      <Title />
      <Searbox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
