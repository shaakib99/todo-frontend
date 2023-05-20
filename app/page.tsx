"use client";

import { useLottie } from "lottie-react";
import * as todoAnimationData from "../public/assets/lottiefiles/todos-away.json";
import { Button } from "antd";

export default function Home() {
  const { View: TodoAnimation, setSpeed } = useLottie({
    animationData: todoAnimationData,
    width: "100%",
  });
  setSpeed(1.2);

  return (
    <div className="h-screen md:h-full flex gap-1 items-center p-5 justify-center md:justify-between">
      <section className="h-full w-full flex flex-col items-center justify-center">
        <p className="text-4xl font-semibold" data-testid="left-title-text">
          Get Your Daily{" "}
          <span className="text-5xl text-primary font-extrabold">WORK</span>{" "}
          Done!!
        </p>
        <Button
          className="m-5 h-12 px-8 py-2 bg-primary text-md font-semibold"
          style={{ border: "none", color: "inherit" }}
        >
          Get Started
        </Button>
      </section>
      <section className="h-full mt-3 w-full hidden md:flex items-center justify-center ">
        <div className="-rotate-6">{TodoAnimation}</div>
      </section>
    </div>
  );
}
