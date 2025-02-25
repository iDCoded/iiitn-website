import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import alum1 from "../assets/alum1.jpeg"
import alum2 from "../assets/alum2.jpeg"


const events = [
  {
    title: "Alumni Meet 2022",
    date: "August 15, 2022",
    description: "Reconnect with old friends and network with fellow alumni.",
    image: alum1,
  },
  {
    title: "Alumni Meet 2023",
    date: "July 22, 2023",
    description: "Experts from various industries will guide the students.",
    image: alum2,
  },
  {
    title: "Alumni Meet 2022",
    date: "August 15, 2022",
    description: "Reconnect with old friends and network with fellow alumni.",
    image: alum1,
  },
]

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-screen mx-auto mt-10">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={events[index % events.length].image}
                    alt={events[index % events.length].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselDemo