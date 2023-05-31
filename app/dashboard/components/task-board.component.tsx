"use client";

import { useTaskBoardModel } from "@/hooks/models/taskboard.model";
import { ITask, eTaskStatus } from "@/interfaces/task.interface";
import { Card, Col, Row } from "antd";
import { DragEvent } from "react";

export default function TaskBoard() {
  const {
    data: { isLoading, tasks },
    moveTask,
  } = useTaskBoardModel();

  const handleDragOver = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const handleOnDrop = (ev: DragEvent<HTMLDivElement>, to: eTaskStatus) => {
    ev.preventDefault();
    const data: ITask = JSON.parse(ev.dataTransfer.getData("data"));
    moveTask(data, to);
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
              onDrop={(ev) => handleOnDrop(ev, eTaskStatus.todo)}
              onDragOver={handleDragOver}
            >
              <section className="w-full grid place-items-center mb-4 border-r">
                <p className="text-lg font-semibold">Todo</p>
              </section>
              <section>
                {tasks?.todo?.map((task) => (
                  <Card
                    key={task.id}
                    title={task.title || ""}
                    extra={
                      <p className="text-primary cursor-pointer">
                        Move to Active
                      </p>
                    }
                    draggable
                    className="shadow-lg my-2"
                    onDragStart={(ev) => {
                      ev.dataTransfer.setData("data", JSON.stringify(task));
                    }}
                  >
                    {task.description}
                  </Card>
                ))}
              </section>
            </Col>
            <Col
              span={8}
              className=""
              onDrop={(ev) => handleOnDrop(ev, eTaskStatus.active)}
              onDragOver={handleDragOver}
            >
              <section className="w-full grid place-items-center mb-4 border-r">
                <p className="text-lg font-semibold">Active</p>
              </section>
              <section>
                {tasks?.active?.map((task) => (
                  <Card
                    key={task.id}
                    title={task.title || ""}
                    extra={
                      <p className="text-primary cursor-pointer">
                        Move to Done
                      </p>
                    }
                    draggable
                    className="shadow-lg my-2"
                    onDragStart={(ev) => {
                      ev.dataTransfer.setData("data", JSON.stringify(task));
                    }}
                  >
                    {task.description}
                  </Card>
                ))}
              </section>
            </Col>
            <Col
              span={8}
              className=""
              onDrop={(ev) => handleOnDrop(ev, eTaskStatus.done)}
              onDragOver={handleDragOver}
            >
              <section className="w-full grid place-items-center mb-4">
                <p className="text-lg font-semibold">Done</p>
              </section>
              <section>
                {tasks?.done?.map((task) => (
                  <Card
                    key={task.id}
                    title={task.title || ""}
                    draggable
                    className="shadow-lg my-2"
                    onDragStart={(ev) => {
                      ev.dataTransfer.setData("data", JSON.stringify(task));
                    }}
                  >
                    {task.description}
                  </Card>
                ))}
              </section>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
