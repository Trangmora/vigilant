import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#1a365d] cursor-pointer" onClick={() => navigate("/")}>
            EasySafe
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {["Home", "Soluzione", "Case Studies", "Chi Siamo", "Contatti"].map((item) => (
                <NavigationMenuItem key={item}>
                  <Button 
                    variant="ghost" 
                    className="text-[#1a365d]"
                    onClick={() => navigate(item.toLowerCase())}
                  >
                    {item}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:inline-flex bg-[#2ecc71] hover:bg-[#2ecc71]/90"
            onClick={() => navigate("/contatto")}
          >
            Richiedi Demo
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