import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export function Header() {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row justify-between items-center">
        <Image src="/Logo.png" alt="fsw Barber" width={120} height={18} placeholder = 'empty'/>
        <Button className="h-6 w-8" variant="outline" size="icon">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
}
