import AppRoutes from './routes/AppRoutes';
import Footer from './shared/components/Footer';
import Navbar from './shared/components/Navbar';
import { WelcomeOnboarding } from './features/home/components/WelcomeOnboarding';

export default function App() {
  return (
    <>
      <WelcomeOnboarding />
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
