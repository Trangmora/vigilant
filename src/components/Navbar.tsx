import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            EasySafe
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
                  Case Studies
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
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;