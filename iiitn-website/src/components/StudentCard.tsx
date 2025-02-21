import { Card, CardContent } from "@/components/ui/card";

interface StudentCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function StudentCard({ title, description, imageSrc }: StudentCardProps) {
  return (
    <Card className="relative overflow-hidden h-48 md:h-64 rounded-lg shadow-lg group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110"
        style={{
          backgroundImage: `url(${imageSrc})`,
          zIndex: 0, // Ensure it's behind everything
        }}
      />

      {/* Overlay using ::before pseudo-element */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-opacity z-10" />

      {/* Card Content */}
      <CardContent className="relative flex flex-col justify-end h-full p-4 text-white z-20">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </CardContent>
    </Card>
  );
}

export default StudentCard;
