import { useState } from "react";

// Define types
type Vehicle = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type ViewOption = {
  id: string;
  label: string;
  videoLink: string;
  icon: string;
};

// Data Collection
const vehicleData: Vehicle[] = [
  {
    id: "passenger",
    title: "Passenger vehicles",
    description: "Revving up innovation from interior to exterior.",
    image: "https://ext.same-assets.com/1823391355/580939777.webp",
  },
  {
    id: "commercial",
    title: "Commercial vehicles",
    description: "Advancing engineering for heavy-duty vehicles.",
    image: "https://ext.same-assets.com/1823391355/2107416677.webp",
  },
];

const viewOptions: ViewOption[] = [
  { id: "complete", label: "Complete body", videoLink: "/PassengerVehicles/Complete_body.mp4", icon: "/PassengerVehicles/Complete_body.svg" },
  { id: "front", label: "Front", videoLink: "/PassengerVehicles/Front.mp4", icon: "/PassengerVehicles/Front.svg" },
  { id: "cabin", label: "Cabin", videoLink: "/PassengerVehicles/Cabin.mp4", icon: "/PassengerVehicles/cabin.png" },
  { id: "trunk", label: "Trunk", videoLink: "/PassengerVehicles/Trunk.mp4", icon: "/PassengerVehicles/Trunk.svg" },
  { id: "exterior", label: "Exterior", videoLink: "/PassengerVehicles/Exterior.mp4", icon: "/PassengerVehicles/Exterior.svg" },
];

const commercialViewOptions: ViewOption[] = [
  { id: "completeBody", label: "Complete Body", videoLink: "/CommercialVehicles/Complete_body.mp4", icon: "/CommercialVehicles/Complete_body.svg" },
  { id: "engine", label: "Engine", videoLink: "/CommercialVehicles/Commercial-Engine.mp4", icon: "/CommercialVehicles/Engine.svg" },
  { id: "cabin", label: "Cabin", videoLink: "/CommercialVehicles/Commercial-Cabin.mp4", icon: "/CommercialVehicles/cabin.svg" },
];

const Overview = () => {
  const [activeVehicle, setActiveVehicle] = useState<"passenger" | "commercial">("passenger");
  const [activeView, setActiveView] = useState<string>("complete");
  const [commercialView, setCommercialView] = useState<string>("completeBody");

  const handleVehicleChange = (id: "passenger" | "commercial") => {
    setActiveVehicle(id);
    if (id === "passenger") {
      setActiveView("complete");
    } else {
      setCommercialView("completeBody");
    }
  };

  const getActiveVideo = () => {
    if (activeVehicle === "passenger") {
      return viewOptions.find((opt) => opt.id === activeView)?.videoLink ?? viewOptions[0].videoLink;
    }
    return commercialViewOptions.find((opt) => opt.id === commercialView)?.videoLink ?? commercialViewOptions[0].videoLink;
  };

  return (
    <section className="min-h-screen bg-black py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-white text-xl md:text-4xl leading-tight">
            Evolving the drive with <span className="font-semibold">360-degree</span>
            <br className="hidden md:block" /> comprehensive solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center  mb-10">
          <div className="md:col-span-1 border-l-2 border-gray-700 pl-4 md:pl-6 max-h-80 overflow-y-auto w-1/2">
            {vehicleData.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`cursor-pointer transition-all duration-300 p-2 ${
                  activeVehicle === vehicle.id
                    ? "text-white bg-gray-800"
                    : "text-gray-500 hover:text-gray-300"
                }`}
                onClick={() => handleVehicleChange(vehicle.id as "passenger" | "commercial")}
              >
                <h3 className="text-lg md:text-2xl font-medium mb-2">{vehicle.title}</h3>
                <p className="text-sm md:text-base">{vehicle.description}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-1 flex flex-col items-center">
            <div className="w-full max-w-lg aspect-[4/3] relative">
             <video src={getActiveVideo()} autoPlay  muted className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 ">
              {(activeVehicle === "passenger" ? viewOptions : commercialViewOptions).map((option) => (
                <button
                  key={option.id}
                  onClick={() =>
                    activeVehicle === "passenger" ? setActiveView(option.id) : setCommercialView(option.id)
                  }
                  className={`flex flex-col items-center px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm whitespace-nowrap transition-all ${
                    (activeVehicle === "passenger" ? activeView : commercialView) === option.id
                      ? "text-white border-b-2 border-blue-500"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <img src={option.icon} className="h-6 md:h-10 w-6 md:w-10 mx-auto mb-1" alt={option.label} />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
