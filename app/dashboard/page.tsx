"use client";

import { Col, Row } from "antd";
import TaskBoard from "./components/task-board.component";

export default function Dashboard() {
  return (
    <Row gutter={16} className="w-full bg-red p-2">
      <Col span={18}>
        <TaskBoard />
      </Col>
      <Col span={6}>Right Side</Col>
    </Row>
  );
}
