import { Statistic } from "antd";

export default function Countdown() {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  return <div className="w-full flex p-3 justify-center"><Statistic.Countdown title="Pomodoro Timer" value={0} /></div>;
}
