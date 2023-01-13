import UserList from "./UserList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
      setUsers(result.data);
    }
    )
  }
  )
  return (
    <div>
      {users} ? <UserList users={users}/>
    </div>
  );
}

export default App;
