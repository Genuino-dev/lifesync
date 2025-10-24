import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const mockUser = {
  username: 'Dinoy Raj K',
  password: '123',
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(mockUser.username);
  const [password, setPassword] = useState(mockUser.password);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === mockUser.username && password === mockUser.password) {
      setError('');
      navigate('/entrar');
    } else {
      setError('Credenciais inválidas. Utilize o nome "Dinoy Raj K" e a senha "123".');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-rose-50 to-rose-100">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-3xl font-semibold text-primary-crimson">Bem-vindo de volta</CardTitle>
            <CardDescription className="text-base">
              Faça login com as credenciais mockadas para acessar o painel do doador.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Nome de usuário
                </label>
                <Input
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Dinoy Raj K"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Senha
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="123"
                />
              </div>
              {error && <p className="text-sm text-red-500 text-center">{error}</p>}
              <Button type="submit" className="w-full bg-primary-crimson hover:bg-primary-crimson/90">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
