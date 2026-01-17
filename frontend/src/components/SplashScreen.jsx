import { useEffect } from "react";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-white">
      <div className="text-4xl font-bold tracking-wide">
        Campus<span className="text-blue-500">Connect</span>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        Initializing system...
      </div>
    </div>
  );
}
