import { BookOpen, CheckCircle, Globe, Building} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export function Services() {
  return (
    <>
    <header className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h1 className="text-6xl font-bold mb-4 header bungee-inline-regular text-white">
        Ingenørfirmaet Raajern
      </h1>
      <p className="text-lg leading-normal text-white">
        Ingeniørfaglig præcision – Planlægning, kontrol og dokumentation
        i hele Danmark
      </p>
    </header>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Services Card */}
      <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="mr-3 text-blue-600" />
            Faggrupper vi dækker
          </CardTitle>
        </CardHeader>
        <CardContent className="h-96 overflow-y-auto">
          <div className="bg-gray-50 p-3 rounded-lg">
            <Accordion type="single" collapsible defaultValue="specialty-0">
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
          </div>
        </CardContent>
      </Card>

      {/* Control & Documentation Card */}
      <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-3 text-blue-600" />
            Kontrol & Dokumentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="mr-3 text-green-500" />
              <span>
                Planlægning, udførelse og dokumentation efter DS1140
              </span>
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
            Udarbejdelse af statisk dokumentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="mr-3 text-green-500" />
              <span>B2.2.2.x Statisk kontrolplan udførelse arbejde</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-3 text-green-500" />
              <span>B3.2.2.x Statisk kontrolrapport udførelse arbejde </span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-3 text-green-500" />
              <span>A5.x Konstruktion som udført arbejde</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </>
  );
}
