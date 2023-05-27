"use client";

import { Card, Col, Row } from "antd";
import { DragEvent } from "react";

export default function TaskBoard() {
  const handleDragStart = (ev: DragEvent<HTMLDivElement>) => {
    ev.dataTransfer.setData("text", "data");
  };

  const handleDragOver = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const handleOnDrop = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  return (
    <Row gutter={16} align={"top"}>
      <Col span={24}>
        <Card
          title={
            <section className="w-full flex flex-col items-center justify-center">
              <p className="text-lg m-2">Kanban Board</p>
              <p className="text-xs font-light mt-1 mb-2">
                Today: 15<sup>th</sup> Dec 2023
              </p>
            </section>
          }
          extra={<p className="text-primary cursor-pointer">Create Task</p>}
        >
          <Row gutter={16}>
            <Col
              span={8}
              className=""
              onDrop={handleOnDrop}
              onDragOver={handleDragOver}
            >
              <section className="w-full grid place-items-center mb-4 border-r">
                <p className="text-lg font-semibold">Todo</p>
              </section>
              <section>
                <Card
                  title="Title"
                  extra={
                    <p className="text-primary cursor-pointer">
                      Move to Active
                    </p>
                  }
                  draggable
                  className="shadow-lg my-2"
                >
                  Hello This is description
                </Card>
                <Card
                  title="Title"
                  extra={
                    <p className="text-primary cursor-pointer">
                      Move to Active
                    </p>
                  }
                  draggable
                  className="shadow-lg my-2"
                >
                  Hello This is description
                </Card>
              </section>
            </Col>
            <Col
              span={8}
              className=""
              onDrop={handleOnDrop}
              onDragOver={handleDragOver}
            >
              <section className="w-full grid place-items-center mb-4 border-r">
                <p className="text-lg font-semibold">Active</p>
              </section>
              <section>
                <Card
                  title="Title"
                  extra={
                    <p className="text-primary cursor-pointer">
                      Move to Active
                    </p>
                  }
                  draggable
                  className="shadow-lg my-2"
                >
                  Hello This is description
                </Card>
              </section>
            </Col>
            <Col
              span={8}
              className=""
              onDrop={handleOnDrop}
              onDragOver={handleDragOver}
            >
              <section className="w-full grid place-items-center mb-4">
                <p className="text-lg font-semibold">Done</p>
              </section>
              <section>
                <Card
                  title="Title"
                  extra={
                    <p className="text-primary cursor-pointer">
                      Move to Active
                    </p>
                  }
                  draggable
                  className="shadow-lg my-2"
                >
                  Hello This is description
                </Card>
              </section>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
