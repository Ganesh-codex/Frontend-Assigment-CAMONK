import Header from "@/components/Header";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* <BlogHeader /> */}

      <main className="flex-1">
        <Home />
      </main>

      <Footer />
    </div>
  );
}
