import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import Books from "./Components/Books";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? (
        <Books user={user} setUser={setUser} />
      ) : (
        <Form setUser={setUser} />
      )}
    </div>
  );
}

export default App;
