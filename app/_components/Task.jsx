import Link from "next/link";
import TaskList from "./TaskList";

function Task({ totalEarnDay ,socialLink,setHref ,setReward}) {
  return (
    <section className=" flex items-center flex-col justify-between p-5 relative overflow-hidden">
      <div className="bg-[#ffffffe6] p-12 rounded-xl shadow-md shadow-[rgba(0, 0, 0, 0.15)] ">
        <p class="text-center text-4xl font-semibold text-[#333] mb-4">
          Complete these daily tasks and earn coins!...
        </p>
        <h2 class="text-[#2a0691]  pb-4 mb-5 text-2xl border-b-4 border-[#f39c12]  text-[2em]">
          Daily Tasks
        </h2>
        <span class="text-[20px] text-[#087f5b] font-semibold tracking-wide pt-12">
          POINTS RATIO=1:1
        </span>
        <div id="tasks-list">
          <TaskList
            socialLink={socialLink}
            setHref={setHref}
            setReward={setReward}
          />
        </div>
        <div class="text-[1.6em] font-bold text-center mt-4 p-4 bg-yellow-300 text-gray-800 rounded-xl shadow-lg">
          <h3>
            Total Coins: <span id="coin-count">{totalEarnDay || 0}</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Task;
