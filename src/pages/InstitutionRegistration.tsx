
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const InstitutionRegistration = () => {
  const form = useForm({
    defaultValues: {
      institutionName: "",
      address: "",
      responsiblePerson: "",
      phone: ""
    }
  });

  const onSubmit = async (data: unknown) => {
  try {
    const response = await fetch('http://localhost:5000/api/donors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error('Erro ao cadastrar doador');

    const result = await response.json();
    console.log('Doador cadastrado com sucesso:', result);
    alert('Cadastro realizado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    alert('Erro ao cadastrar. Tente novamente.');
  }
};
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-crimson to-red-400 text-white p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold">Cadastrar Instituição</h1>
          </div>
          
          <div className="bg-white p-6 rounded-b-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <FormLabel htmlFor="institutionName">Nome da Instituição</FormLabel>
                  <Input 
                    id="institutionName"
                    placeholder="Nome" 
                    {...form.register("institutionName")}
                  />
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="address">Endereço</FormLabel>
                  <Textarea 
                    id="address"
                    placeholder="Digite Aqui" 
                    {...form.register("address")}
                    className="min-h-32"
                  />
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="responsiblePerson">Responsável pela Instituição</FormLabel>
                  <Input 
                    id="responsiblePerson"
                    placeholder="Nome" 
                    {...form.register("responsiblePerson")}
                  />
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="phone">Telefone</FormLabel>
                  <Input 
                    id="phone"
                    placeholder="Número" 
                    {...form.register("phone")}
                  />
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

export default InstitutionRegistration;
