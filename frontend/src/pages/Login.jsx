export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-slate-700">

        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
  Welcome to <span className="text-blue-500">CampusConnect</span>
</h2>


        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className=""

              placeholder="you@college.edu"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/70"

              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Login as</label>
            <select className="w-full px-4 py-2 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/70">

              <option>Student</option>
              <option>Admin</option>
            </select>
          </div>

         <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg font-semibold tracking-wide transition-all duration-200">
  Login
</button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Don’t have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
