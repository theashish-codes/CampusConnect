import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

 return (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div className="text-5xl font-extrabold tracking-wide animate-fadeIn">
      Campus<span className="text-blue-500">Connect</span>
    </div>

    <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
      Initializing system...
    </div>
  </div>
);}
