import { useState } from "react";
import "./App.css";
import { Services } from "@/components/views/Services";
import { Courses } from "@/components/views/Courses";
import { Contact } from "@/components/views/Contact";
import { Footer } from "@/components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">
          <div className="space-x-4">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-3 py-2 ${
                activeTab === "services"
                  ? "text-blue-600 font-bold"
                  : "text-gray-600"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-3 py-2 ${
                activeTab === "courses"
                  ? "text-blue-600 font-bold"
                  : "text-gray-600"
              }`}
            >
              Kurser
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-2  ${
                activeTab === "contact"
                  ? "text-blue-600 font-bold"
                  : "text-gray-600"
              }`}
            >
              Kontakt
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-grow min-h-screen flex flex-col">
        {activeTab === "services" && <Services />}

        {activeTab === "courses" && <Courses />}

        {activeTab === "contact" && <Contact />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
