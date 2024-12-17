import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactRound, Phone, Mail, Send } from "lucide-react";
import { SiLinkedin } from '@icons-pack/react-simple-icons';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  return (
    <div className="w-screen max-w-md mx-auto">
    <Card className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="border-b border-gray-100 pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ContactRound className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Kontakt os</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
        <Button 
  variant="outline" 
  className="w-full bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center text-base"
  onClick={() => window.open('mailto:info@raajern.dk', '_blank')}
>
  <Mail className="w-6 h-6 mr-3 text-blue-500" />
  info@raajern.dk
</Button>

<Button 
  variant="outline" 
  className="w-full bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center text-base"
  onClick={() => window.open('tel:+4520322553', '_blank')}
>
  <Phone className="w-6 h-6 mr-3 text-green-500" />
  2032 2553
</Button>

<Button 
  variant="outline" 
  className="w-full bg-gray-50 border-gray-200 text-blue-700 hover:bg-blue-100 flex items-center justify-center text-base"
  onClick={() => window.open('https://www.linkedin.com/company/raajern', '_blank')}
>
  <SiLinkedin className="w-6 h-6 mr-3 text-blue-600" />
  LinkedIn
</Button>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Send Besked</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Send os en besked</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Navn
                </Label>
                <Input id="name" placeholder="Dit navn" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" placeholder="Din email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">
                  Besked
                </Label>
                <Textarea 
                  id="message" 
                  placeholder="Skriv din besked her" 
                  className="col-span-3 h-24" 
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit">Send Besked</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
    </div>
  );
}