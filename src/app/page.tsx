"use client";

import { APP_ROUTES } from "@/constants/appRoutes";
import { Login } from "@/types/Login";
import { TextField, Button, Box, Typography } from "@mui/material";
import Link from "next/link";

import { useState } from "react";

interface LoginFormProps {
  onSubmit: (login: Login) => void;
}

export default function Home(props: LoginFormProps) {
  const [login, setLogin] = useState<Login>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(login);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: 4,
        p: 2,
        bgcolor: "background.paper",
        boxShadow: 4,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={login.email}
          onChange={(event) =>
            setLogin({ ...login, email: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          label="Senha"
          variant="outlined"
          margin="normal"
          type="password"
          value={login.password}
          onChange={(event) =>
            setLogin({ ...login, password: event.target.value })
          }
        />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Link href={APP_ROUTES.public.user_register}>
            <Button variant="contained" color="primary" fullWidth>
              Registrar
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
}
