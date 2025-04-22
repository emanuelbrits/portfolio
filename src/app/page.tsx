import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-24"> {/* Deixando espaço para o header fixo */}
        <section className="container mx-auto p-8">
          <h1 className="text-4xl font-bold">Bem-vindo ao meu portfólio!</h1>
          <p className="mt-4">Aqui você pode encontrar meus projetos e habilidades.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}