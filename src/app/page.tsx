import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="text-3xl font-bold text-yellow-400">💪 Gym Duolingo</div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build <span className="text-yellow-400">Fitness Habits</span> Like Learning Languages
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Gamified workouts with streaks, XP, achievements, and leaderboards. Stay motivated and crush your fitness goals.
            </p>
            <div className="space-x-4">
              <Link href="/signup">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-6xl text-center">
            🏋️‍♂️🤸‍♀️🚴‍♂️🧘‍♀️
          </div>
        </section>

        {/* Features */}
        <section id="features" className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold mb-3">Daily Streaks</h3>
            <p className="text-gray-300">Maintain consistent workout streaks and never break the chain.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-3">Earn XP</h3>
            <p className="text-gray-300">Gain experience points for every workout and climb the levels.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-3">Leaderboards</h3>
            <p className="text-gray-300">Compete with friends and climb the global fitness rankings.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3">Achievements</h3>
            <p className="text-gray-300">Unlock badges for hitting milestones and special challenges.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-3">Track Progress</h3>
            <p className="text-gray-300">Detailed stats on your workouts, exercises, and improvements.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-3">Personalized</h3>
            <p className="text-gray-300">Customize your fitness journey with workout types and goals.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-yellow-400 text-black rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Fitness?</h2>
          <p className="text-lg mb-8">Join thousands of users building stronger bodies and better habits.</p>
          <Link href="/signup">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Start Your Journey
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
