"use client";

import { Button, Divider, Form, Input } from "antd";
import Image from "next/image";

export default function Registration() {
  return (
    <section
      className="h-auto min-w-min  m-5 w-11/12 md:w-1/2 py-5 px-2 flex flex-col items-center shadow-md"
      style={{ maxWidth: "1000px" }}
    >
      <h1 className="font-bold text-3xl m-5">Registration</h1>
      <Form
        className="flex flex-col items-center justify-center w-full px-24"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        colon={false}
      >
        <Form.Item
          name={"name"}
          className="w-11/12 m-2"
          label="Name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input
            className="h-10"
          />
        </Form.Item>
        <Form.Item
          name={"email"}
          required
          className="w-11/12 m-2"
          label="Email"
          rules={[
            {
              type: "email",
              message: "Input must be a valid email",
              required: true,
            },
          ]}
        >
          <Input
            className="h-10"
          />
        </Form.Item>
        <Form.Item
          name={"password"}
          className="w-11/12 m-2"
          label="Password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password className="h-10" />
        </Form.Item>
        <Form.Item className="w-11/12" label=" ">
          <Button
            htmlType="submit"
            className="bg-primary outline-none border-none text-md px-5 py-2 h-auto font-light"
          >
            Register
          </Button>
        </Form.Item>
      </Form>

      <Divider>Or, Register with </Divider>
      <section className="flex items-center justify-center w-full gap-2">
        <div className="p-2 rounded shadow-md cursor-pointer">
          <Image
            alt="Google Logo"
            height={40}
            width={40}
            src={"/assets/images/google-logo.png"}
            title="Register with Google"
          />
        </div>
        <div className="p-2 rounded shadow-md cursor-pointer">
          <Image
            alt="Facebook Logo"
            height={40}
            width={40}
            src={"/assets/images/facebook-logo.png"}
            title="Register with Facebook"
          />
        </div>
        <div className="p-2 rounded shadow-md cursor-pointer">
          <Image
            alt="Github Logo"
            height={40}
            width={40}
            src={"/assets/images/github-logo.png"}
            title="Register with GitHub"
          />
        </div>
      </section>
    </section>
  );
}
