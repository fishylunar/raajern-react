import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  CheckCircle,
  BookOpen,
  Globe,
  Building,
} from "lucide-react";
import "./App.css";

const specialtyAreas = [
  {
    title: "Jordarbejde",
    details: [
      "Udgravning",
      "Indbygning af materiale",
      "Etablering af fundamenter m.fl.",
    ],
  },
  {
    title: "Betonarbejde",
    details: [
      "Udførelse af insitu støbt beton",
      "Montage af betonelementer",
      "Armeringsarbejde",
    ],
  },
  {
    title: "Stålarbejde",
    details: [
      "Alle bærende konstruktioner i stål; montage af præfabrikerede elementer",
      "Udførelse af stålkonstruktioner på byggepladsen",
    ],
  },
  {
    title: "Murværksarbejde",
    details: ["Mursten", "Porebeton", "Letbeton"],
  },
  {
    title: "Træarbejder",
    details: [
      "Montage af præfabrikerede elementer",
      "Udførelse af trækonstruktioner på byggepladsen",
    ],
  },
  {
    title: "Særlige geotekniske konstruktioner",
    details: [
      "Funderingspæle",
      "Spuns",
      "KBH-vægge",
      "Borede pæle",
      "Jordankre m.fl.",
    ],
  },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="min-h-screen bg-gray-50">
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
              className={`px-3 py-2 ${
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
      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === "services" && (
          <>
            <header className="max-w-6xl mx-auto px-4 py-8 text-center">
              <h1 className="text-6xl font-bold mb-4">
                Ingenørfirmaet Raajern
              </h1>
              <p className="text-lg leading-normal">
                Ingeniørfaglig præcision – Planlægning, kontrol og dokumentation
                i hele Danmark
              </p>
            </header>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Services Card */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-3 text-blue-600" />
                    Vores Specialer
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-96 overflow-y-auto">
                  <Accordion type="single" collapsible>
                    {specialtyAreas.map((area, index) => (
                      <AccordionItem key={index} value={`specialty-${index}`}>
                        <AccordionTrigger>{area.title}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {area.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-center text-gray-700"
                              >
                                <CheckCircle className="mr-2 text-green-500 w-4 h-4" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* Control & Documentation Card */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-3 text-blue-600" />
                    Kontrol & Dokumentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 text-green-500" />
                      <span>Planlægning, udførelse og dokumentation efter DS1140</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 text-green-500" />
                      <span>Udførelse af dokumentation efter SBI 271</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="mr-3 text-blue-500" />
                      <span>Dækker hele Danmark</span>
                    </div>
                  </div>
                </CardContent>

                {/* Geotechnical Card */}
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-3 text-blue-600" />
                    Geotekniske Konstruktioner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 text-green-500" />
                      <span>Funderingspæle</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 text-green-500" />
                      <span>Spuns</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 text-green-500" />
                      <span>KBH-vægge</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 text-green-500" />
                      <span>Borede pæle</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 text-green-500" />
                      <span>Jordankre</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeTab === "courses" && (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-3 text-blue-600" />
                Kurser
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Vi tilbyder specialtilpassede kurser inden for planlægning,
                  udførelse og dokumentation af kontrol.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Kursussteder</h3>
                    <ul className="list-disc pl-5">
                      <li>Firmaadressen</li>
                      <li>Flere lokationer landet over</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Registreringsplatforme
                    </h3>
                    <ul className="list-disc pl-5">
                      <li>Dalux</li>
                      <li>Ajour</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "contact" && (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-3 text-blue-600" />
                Kontakt Os
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 text-blue-500" />
                  <a
                    href="mailto:info@raajern.dk"
                    className="text-blue-700 hover:underline"
                  >
                    info@raajern.dk
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 text-blue-500" />
                  <a
                    href="tel:+4520322553"
                    className="text-blue-700 hover:underline"
                  >
                    2032 2553
                  </a>
                </div>
                <Button className="w-full mt-4">Send Besked</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="sticky-footer bg-blue-800 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            &copy; 2024 Raajern. Alle rettigheder forbeholdt. - CVR: 38609858
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
