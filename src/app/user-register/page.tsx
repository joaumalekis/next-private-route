"use client";

import { User } from "@/types/User";
import RegistrationForm from "./RegistrationForm";

export default function UserRegister() {
  const handleRegister = (user: User) => {
    console.log(user);
  };

  return <RegistrationForm onSubmit={handleRegister} />;
}
