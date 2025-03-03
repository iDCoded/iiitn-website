import { Card, CardContent } from "@/components/ui/card";

interface StudentCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function StudentCard({ title, description, imageSrc }: StudentCardProps) {
  return (
    <Card className="relative overflow-hidden h-[120px] w-full md:h-[140px] md:w-[250px] shadow-md group text-xs">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
        style={{
          backgroundImage: `url(${imageSrc})`,
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-opacity z-10" />

      {/* Card Content */}
      <CardContent className="relative flex flex-col justify-end h-full p-3 text-white z-20">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs opacity-80">{description}</p>
      </CardContent>
    </Card>
  );
}

export default StudentCard;
