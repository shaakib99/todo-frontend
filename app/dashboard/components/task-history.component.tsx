import { Timeline } from "antd";
import {
  CheckCircleTwoTone,
  WarningTwoTone,
  ClockCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
export default function TaskHistory() {
  return (
    <div className="w-full">
      <p className="text-xl mb-9 text-center">Task History</p>
      <Timeline
        mode="left"
        items={[
          {
            color: "blue",
            children: "Task started",
            label: <b>5.03am</b>,
            pending: true,
            dot: <CheckCircleTwoTone twoToneColor={"#29AB87"} />,
          },
          {
            color: "blue",
            children: <>Task started</>,
            dot: <ClockCircleTwoTone twoToneColor={"blue"} />,
          },
          {
            color: "blue",
            children: <>Task started</>,
            dot: <CloseCircleTwoTone twoToneColor={"red"} />,
          },
          {
            color: "blue",
            children: <>Task started</>,
          },
        ]}
      />
    </div>
  );
}
