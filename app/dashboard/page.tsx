import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen ">
      <div className="flex gap-5  h-10 mt-20 justify-center">
        <Link
          className="bg-red-500 rounded-2xl py-4 px-5 flex items-center text-white"
          href="/dashboard/stats"
        >
          See your Stats
        </Link>
        <Link
          className="bg-red-500 rounded-2xl py-4 px-5 flex items-center text-white"
          href="/register"
        >
          Register as Admin
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
