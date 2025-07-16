
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => (
  <header className="p-4 flex items-center justify-between shadow bg-white">
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="StreamFix Logo" className="h-10" />
      <h1 className="text-xl font-bold">StreamFix</h1>
    </div>
    <nav className="space-x-4">
      <Link to="/">Início</Link>
      <Link to="/planos">Planos</Link>
      <Link to="/canais">Canais & Séries</Link>
      <Link to="/depoimentos">Depoimentos</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  </header>
);

const Home = () => (
  <section className="p-6 text-center">
    <h2 className="text-3xl font-bold mb-4">Assista tudo por apenas R$25,00 por mês</h2>
    <p className="mb-6">Canais fechados, filmes e séries ilimitadas na sua tela</p>
    <Button className="text-lg px-6 py-2 bg-green-500 hover:bg-green-600">
      <FaWhatsapp className="mr-2" /> Chamar no WhatsApp
    </Button>
  </section>
);

const Planos = () => (
  <section className="p-6 text-center">
    <h2 className="text-2xl font-bold mb-4">Plano Único</h2>
    <p className="text-lg">Apenas R$25,00 mensais com acesso total a canais, filmes e séries.</p>
  </section>
);

const Canais = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-center">Exemplos de Conteúdo</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i}>
          <CardContent>
            <img src={`/conteudo${i}.jpg`} alt={`Exemplo ${i}`} className="rounded" />
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const Depoimentos = () => (
  <section className="p-6 bg-gray-50">
    <h2 className="text-2xl font-bold mb-4 text-center">O que dizem nossos clientes</h2>
    <div className="space-y-4 max-w-2xl mx-auto">
      <Card><CardContent>"Muito bom, funciona perfeito e é super barato!" — João M.</CardContent></Card>
      <Card><CardContent>"Assisto tudo que gosto, sem travar. Recomendo!" — Carla S.</CardContent></Card>
      <Card><CardContent>"R$25 por mês? Imbatível. Atendimento top." — Lucas A.</CardContent></Card>
    </div>
  </section>
);

const FAQ = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-center">Perguntas Frequentes</h2>
    <div className="space-y-4 max-w-3xl mx-auto">
      <Card><CardContent><strong>Preciso de internet rápida?</strong><br />Sim, recomendamos pelo menos 10mb de velocidade.</CardContent></Card>
      <Card><CardContent><strong>Como faço o pagamento?</strong><br />Você será orientado via WhatsApp.</CardContent></Card>
      <Card><CardContent><strong>Funciona em Smart TV?</strong><br />Sim! Funciona em TVs, celulares, e até computadores.</CardContent></Card>
    </div>
  </section>
);

const Contato = () => (
  <section className="p-6 text-center">
    <h2 className="text-2xl font-bold mb-4">Fale com a gente</h2>
    <p className="mb-4">Tire dúvidas ou contrate agora pelo WhatsApp.</p>
    <Button className="text-lg px-6 py-2 bg-green-500 hover:bg-green-600">
      <FaWhatsapp className="mr-2" /> (11) 98686-8961
    </Button>
  </section>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/canais" element={<Canais />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}
