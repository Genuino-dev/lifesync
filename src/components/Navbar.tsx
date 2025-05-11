
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border-2 border-primary-crimson"></div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-black font-medium border-b-2 border-primary-crimson">
          Início
        </Link>
        <Link to="/sobre" className="text-black font-medium hover:text-primary-crimson transition-colors">
          Sobre Nós
        </Link>
        <Link to="/pontos" className="text-black font-medium hover:text-primary-crimson transition-colors">
          Pontos de Coleta
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-black font-medium hover:text-primary-crimson transition-colors">
              Criar Conta <span className="ml-1">▼</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link to="/cadastro-doador" className="w-full">Doador</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/cadastro-centro" className="w-full">Centro de Coleta</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Login Button */}
      <div>
        <Button variant="outline" className="hidden md:block border-2 border-black rounded-full px-8 hover:bg-primary-crimson hover:text-white hover:border-primary-crimson transition-colors">
          Entrar
        </Button>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow-lg z-50">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-black font-medium">
              Início
            </Link>
            <Link to="/sobre" className="text-black font-medium">
              Sobre Nós
            </Link>
            <Link to="/pontos" className="text-black font-medium">
              Pontos de Coleta
            </Link>
            <Link to="/cadastro" className="text-black font-medium">
              Criar Conta
            </Link>
            <Button variant="outline" className="border-2 border-black rounded-full hover:bg-primary-crimson hover:text-white hover:border-primary-crimson transition-colors">
              Entrar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
