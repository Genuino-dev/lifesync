
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const DonorRegistration = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      age: "",
      bloodType: "",
      city: "",
      state: "",
      zipCode: "",
      lastDonationMonth: "",
      lastDonationYear: "",
      termsAgreed: false
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Aqui você implementaria a lógica para enviar os dados para um servidor
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-crimson to-red-400 text-white p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold">Cadastre-se como Doador</h1>
          </div>
          
          <div className="bg-white p-6 rounded-b-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <FormLabel htmlFor="firstName">Nome Completo</FormLabel>
                    <div className="flex gap-4">
                      <Input 
                        id="firstName"
                        placeholder="Primeiro Nome" 
                        {...form.register("firstName")}
                        className="flex-1"
                      />
                      <Input 
                        id="lastName"
                        placeholder="Sobrenome" 
                        {...form.register("lastName")}
                        className="flex-1"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <FormLabel htmlFor="phone">Telefone</FormLabel>
                    <Input 
                      id="phone"
                      placeholder="Número" 
                      {...form.register("phone")}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="E-mail" 
                    {...form.register("email")}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <FormLabel htmlFor="address">Endereço</FormLabel>
                    <Input 
                      id="address"
                      placeholder="Digite Aqui" 
                      {...form.register("address")}
                      className="h-24"
                    />
                  </div>
                  
                  <div>
                    <div className="space-y-2 mb-6">
                      <FormLabel htmlFor="age">Idade</FormLabel>
                      <Input 
                        id="age"
                        placeholder="Idade" 
                        {...form.register("age")}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <FormLabel htmlFor="bloodType">Tipo Sanguíneo</FormLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <FormLabel htmlFor="city">Cidade</FormLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sao-paulo">São Paulo</SelectItem>
                        <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                        <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                        <SelectItem value="brasilia">Brasília</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <FormLabel htmlFor="state">Estado</FormLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                        <SelectItem value="MG">Minas Gerais</SelectItem>
                        <SelectItem value="DF">Distrito Federal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="zipCode">CEP</FormLabel>
                  <Input 
                    id="zipCode"
                    placeholder="00000-000" 
                    {...form.register("zipCode")}
                    className="max-w-xs"
                  />
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="lastDonation">Última Doação</FormLabel>
                  <div className="flex gap-4 max-w-md">
                    <Input 
                      id="lastDonationMonth"
                      placeholder="Mês" 
                      {...form.register("lastDonationMonth")}
                    />
                    <Input 
                      id="lastDonationYear"
                      placeholder="Ano" 
                      {...form.register("lastDonationYear")}
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" {...form.register("termsAgreed")} />
                  <label 
                    htmlFor="terms" 
                    className="text-sm text-gray-700"
                  >
                    Declaro que todas as informações fornecidas neste cadastro são verdadeiras e de minha inteira responsabilidade.
                  </label>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="rounded-full flex items-center gap-2 px-6"
                  >
                    Enviar
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L12 15L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonorRegistration;
