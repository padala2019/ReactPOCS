import { useEffect } from "react";

// Parent Component
function Home() {
  useEffect(() => {
    console.log("useEffect");
  });
  const handleDataFromChild = (data) => {
    console.log("Data from child:", data);
  };
  return <ChildComponent onData={handleDataFromChild} />;
}

// Child Component
function ChildComponent(props) {
  const dataToSend = "Hello from child!";
  return (
    <button onClick={() => props.onData(dataToSend)}>
      Send Data to Parent
    </button>
  );
}

export default Home;
