import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
