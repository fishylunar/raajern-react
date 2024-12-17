import { BookOpen, MapPin, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export function Courses() {
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
          
          <div className="grid md:grid-cols-2 gap-6">
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