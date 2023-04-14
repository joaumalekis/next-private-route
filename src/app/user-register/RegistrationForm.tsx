"use client";

import { User } from "@/types/User";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { APP_ROUTES } from "@/constants/appRoutes";

interface RegistrationFormProps {
  onSubmit: (user: User) => void;
}

export default function RegistrationForm(props: RegistrationFormProps) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(user);
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
        Formulário de Registro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          label="Nome"
          variant="outlined"
          margin="normal"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <TextField
          required
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <TextField
          required
          fullWidth
          label="Senha"
          variant="outlined"
          margin="normal"
          type="password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <TextField
          required
          fullWidth
          label="Confirmação de senha"
          variant="outlined"
          margin="normal"
          type="password"
          value={user.confirmPassword}
          onChange={(event) =>
            setUser({ ...user, confirmPassword: event.target.value })
          }
        />
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Registrar
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Link href={APP_ROUTES.public.login}>
            <Button variant="contained" color="primary" fullWidth>
              voltar
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
}
