import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Login from "./pages/Login";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return <Login />;
}

export default App;
