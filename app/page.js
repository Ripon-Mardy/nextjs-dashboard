import CallTrendsChart from "@/components/charts/CallTrendsChart";
import Dashboard from "@/components/layout/Dashboard";
import RecentActivity from "@/components/layout/RecentActivity";
import RepairRequest from "@/components/layout/RepairRequest";

export default function Home() {
  return (
    <div className="px-6 py-3">

    <Dashboard/>
    <CallTrendsChart/>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <RecentActivity/>
      <RepairRequest/>
    </div>
    </div>
  );
}
