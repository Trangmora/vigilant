import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span 
            className="text-2xl font-bold text-[#1a365d] cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            Vigilant
          </span>
        </div>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  className="text-[#1a365d]"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  className="text-[#1a365d]"
                  onClick={() => scrollToSection('soluzione')}
                >
                  Soluzione
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  className="text-[#1a365d]"
                  onClick={() => scrollToSection('case-studies')}
                >
                  Storie vere
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  className="text-[#1a365d]"
                  onClick={() => scrollToSection('chi-siamo')}
                >
                  Chi Siamo
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button 
                  variant="ghost" 
                  className="text-[#1a365d]"
                  onClick={() => scrollToSection('contatti')}
                >
                  Contatti
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:inline-flex bg-[#2ecc71] hover:bg-[#2ecc71]/90"
            onClick={() => scrollToSection('contatti')}
          >
            Richiedi prova gratuita
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                  onClick={() => scrollToSection('soluzione')}
                >
                  Soluzione
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                  onClick={() => scrollToSection('case-studies')}
                >
                  Storie vere
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                  onClick={() => scrollToSection('chi-siamo')}
                >
                  Chi Siamo
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                  onClick={() => scrollToSection('contatti')}
                >
                  Contatti
                </Button>
                <Button
                  className="w-full bg-[#2ecc71] hover:bg-[#2ecc71]/90 text-lg mt-4"
                  onClick={() => scrollToSection('contatti')}
                >
                  Richiedi prova gratuita
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;