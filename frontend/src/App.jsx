import { useState } from "react";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Login page will come here 🚀
      </h1>
    </div>
  );
}

export default App;
