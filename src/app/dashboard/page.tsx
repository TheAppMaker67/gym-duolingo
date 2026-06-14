import { redirect } from "next/navigation";

export default function Dashboard() {
  // TODO: Add auth check
  // if (!session) redirect('/login');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-600 text-sm font-medium">Streak</div>
            <div className="text-3xl font-bold text-orange-500 mt-2">7 days</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-600 text-sm font-medium">Level</div>
            <div className="text-3xl font-bold text-blue-500 mt-2">5</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-600 text-sm font-medium">Total XP</div>
            <div className="text-3xl font-bold text-green-500 mt-2">2,450</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-gray-600 text-sm font-medium">Workouts</div>
            <div className="text-3xl font-bold text-purple-500 mt-2">42</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">+ Log Workout</button>
            <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">View Leaderboard</button>
            <button className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600">View Achievements</button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Recent Workouts</h2>
          <p className="text-gray-600">No workouts logged yet. Start your journey today!</p>
        </div>
      </div>
    </div>
  );
}
