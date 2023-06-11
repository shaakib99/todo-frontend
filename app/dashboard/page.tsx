"use client";

import { Button, Col, Modal, Row } from "antd";
import TaskBoard from "./components/task-board.component";
import Countdown from "./components/countdown.component";
import { useRef } from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Row gutter={16} className="w-full p-2">
        <Col span={18}>
          <TaskBoard />
        </Col>
        <Col span={6}>
          <Countdown />
        </Col>
      </Row>
      <Modal
        open={true}
        title="Do you want to start 25 minute Pomodoro timer?"
        mask={false}
        closable={false}
        okButtonProps={{ className: "bg-primary" }}
        okText="Yes"
        cancelText="No"
      >
        You can start a 25 minute timer for this task. Just like{" "}
        <Link
          href={"https://en.wikipedia.org/wiki/Pomodoro_Technique"}
          className="text-primary"
        >
          pomodoro technique.
        </Link>
        Timer can be adjusted in{" "}
        <Link href={"/"} className="text-primary">
          Settings
        </Link>{" "}
        page.
      </Modal>
    </>
  );
}
