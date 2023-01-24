import "./App.css";
import { useDebugValue } from "react";
import { useOnlineStatus } from "./components/useDebugValue";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React 18.0 Hooks</h1>
      <h2>useDebugValue Hooks</h2>
      <StatusBar />
      <p>
        useDebugValue is a React Hook that lets you add a label to a custom Hook
        in React DevTools.
      </p>
    </div>
  );
}

export default App;
