import Chart from "./_components/ui/dashboard/chart/chart";
import RightBar from "./_components/ui/dashboard/rightbar/rightbar";
import Transactions from "./_components/ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className='flex gap-5 mt-5'>
      <div className='flex-[3] flex flex-col gap-5'>
        <div className='flex gap-5 justify-content'></div>
        <Transactions />
        <Chart />
      </div>
      <div className='flex-1'>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
