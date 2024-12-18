import { BookOpen, MapPin, Monitor, Clock, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Courses() {
  const courses = [
    {
      name: "Introkursus – DS1140",
      duration: "3-4 timer",
      questionTime: "1-2 timer",
      location: "Arena Randers",
      participants: "10-15",
      price: "2.599 kr + moms",
      highlights: [
        "Gennemgang af generelle regler for kontrol under udførelse",
        "Introduktion til dokumentkrav",
        "Introduktion til udførselsesstandarder",
        "Tid afsat til spørgsmål"
      ]
    },
    {
      name: "MasterClass – DS1140",
      duration: "8 timer",
      questionTime: "1-2 timer",
      location: "Arena Randers",
      participants: "8-10",
      price: "7.999 kr + moms",
      highlights: [
        "Grundig gennemgang af kontrolregler",
        "Detaljeret introduktion til dokumentkrav",
        "Eksempler fra 'den virkelige verden'",
        "Grundig gennemgang af kontrolskema",
        "Introduktion til uafhængig dokumentationskontrol"
      ]
    },
    {
      name: "Firmakursus – DS1140",
      duration: "Tilpasset kundens behov",
      questionTime: "Tid afsat til spørgsmål",
      location: "Kundens firmaadresse",
      participants: "Maks. 15 anbefalet",
      price: "9.999 kr + moms pr. dag",
      highlights: [
        "Skræddersyet kursusmateriale",
        "Relateret specifikt til kundens produktion eller udførelse",
        "Fleksibel varighed"
      ]
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="border-b border-gray-100 pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Kurser</span>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            Tilgængelig
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Vi tilbyder specialtilpassede kurser inden for planlægning, udførelse og dokumentation af kontrol.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {courses.map((course, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="hover:bg-gray-50 px-4 py-3 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-gray-800">{course.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 mr-2 text-blue-500" />
                        <h4 className="font-medium text-gray-700">Kursusdetaljer</h4>
                      </div>
                      <ul className="space-y-1 text-gray-600 pl-7">
                        <li><strong>Varighed:</strong> {course.duration}</li>
                        <li><strong>Spørgsmålstid:</strong> {course.questionTime}</li>
                        <li><strong>Lokation:</strong> {course.location}</li>
                        <li><strong>Deltagere:</strong> {course.participants}</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CreditCard className="w-5 h-5 mr-2 text-green-500" />
                        <h4 className="font-medium text-gray-700">Pris</h4>
                      </div>
                      <p className="text-gray-700 font-semibold">{course.price}</p>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-700 mb-2">Kursushøjdepunkter</h4>
                        <ul className="space-y-1 text-gray-600 pl-4 list-disc">
                          {course.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="font-semibold text-gray-800">Kursussteder</h3>
              </div>
              <ul className="space-y-1 text-gray-600 pl-7">
                <li className="relative before:absolute before:left-[-1.25rem] before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                  Firmaadressen
                </li>
                <li className="relative before:absolute before:left-[-1.25rem] before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full">
                  Flere lokationer landet over
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Monitor className="w-5 h-5 mr-2 text-green-500" />
                <h3 className="font-semibold text-gray-800">
                  Registreringsplatforme
                </h3>
              </div>
              <ul className="space-y-1 text-gray-600 pl-7">
                <li className="relative before:absolute before:left-[-1.25rem] before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                  Dalux
                </li>
                <li className="relative before:absolute before:left-[-1.25rem] before:top-2 before:w-2 before:h-2 before:bg-green-400 before:rounded-full">
                  Ajour
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}