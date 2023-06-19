"use client";

import { Col, Divider, Row } from "antd";
import TaskBoard from "./components/task-board.component";
import Countdown from "./components/countdown.component";
import TaskHistory from "./components/task-history.component";

export default function Dashboard() {
  return (
    <Row gutter={16} className="w-full p-2">
      <Col span={18} style={{minHeight: "80vh"}}>
        <TaskBoard />
      </Col>
      <Col span={6} className="border rounded" style={{minHeight: "80vh"}}>
        <section>
          <Countdown />
        </section>
        <Divider></Divider>
        <section className="w-full flex justify-center">
          <TaskHistory />
        </section>
      </Col>
    </Row>
  );
}
