import { Button } from "@/components/ui/button";
import Navbar from "./Components/Navbar";
import Carousel from "@/components/Carousel";
import CardWithForm from "./Components/AppointmentCard";

export default function Home() {
  return (
    <div className="container mx-auto"> 
      <Navbar />
      
      <div className="flex flex-col items-start">
        <div className="w-full mb-8">
          <Carousel />  
        </div>

        <div className="w-full">
          <CardWithForm />
        </div>
      </div>
    </div>
  );
}

