"use client"

import { Button, Checkbox, Divider, Form, Input } from "antd";
import Image from "next/image";

export default function Login() {
    return <section
    className="h-auto min-w-min  m-5 w-11/12 md:w-1/2 py-5 px-2 flex flex-col items-center shadow-md"
    style={{ maxWidth: "1000px" }}
  >
    <h1 className="font-bold text-3xl m-5">Login</h1>
    <Form
      className="flex flex-col items-center justify-center w-full px-24"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      colon={false}
    >
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
      <Form.Item
        name={"rememberme"}
        className="w-11/12 m-2"
        label=" "
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item className="w-11/12" label=" ">
        <Button
          htmlType="submit"
          className="bg-primary outline-none border-none text-md px-5 py-2 h-auto font-light"
        >
          Login
        </Button>
      </Form.Item>
    </Form>

    <Divider>Or, Login with </Divider>
    <section className="flex items-center justify-center w-full gap-2">
      <div className="p-2 rounded shadow-md cursor-pointer">
        <Image
          alt="Google Logo"
          height={40}
          width={40}
          src={"/assets/images/google-logo.png"}
          title="Login with Google"
        />
      </div>
      <div className="p-2 rounded shadow-md cursor-pointer">
        <Image
          alt="Facebook Logo"
          height={40}
          width={40}
          src={"/assets/images/facebook-logo.png"}
          title="Login with Facebook"
        />
      </div>
      <div className="p-2 rounded shadow-md cursor-pointer">
        <Image
          alt="Github Logo"
          height={40}
          width={40}
          src={"/assets/images/github-logo.png"}
          title="Login with GitHub"
        />
      </div>
    </section>
  </section>
}