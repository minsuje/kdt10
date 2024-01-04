import React, { useState } from "react";

export default function Ex1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState([
    {
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);

  const add = () => {
    if (name.trim().length === 0 || email.trim().length === 0) return;
    const newUser = input.concat({
      name: name,
      email: email,
    });
    setInput(newUser);
    setName("");
    setEmail("");
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };
  const deleted = (name, email) => {
    const newUser = input.filter(
      (value) => value.name !== name && value.email !== email
    );
    setInput(newUser);
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => setName(e.target.value)}
        onKeyDown={keyDown}
        required
      />
      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={keyDown}
        required
      />
      <button onClick={add}>등록</button>

      {input.map((value) => (
        <div onDoubleClick={() => deleted(value.name, value.email)}>
          {value.name} : {value.email}
        </div>
      ))}
    </>
  );
}
