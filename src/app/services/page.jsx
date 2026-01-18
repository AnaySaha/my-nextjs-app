import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      service_description: "Professional responsive website development using React, Next.js, and Tailwind CSS."
    },
    {
      _id: "2",
      service_name: "UI/UX Design",
      service_image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
      service_description: "User-focused UI/UX design for web and mobile applications with modern design systems."
    },
    {
      _id: "3",
      service_name: "SEO Optimization",
      service_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      service_description: "Improve search engine ranking with on-page SEO, performance optimization, and analytics."
    },
 
  
  ];

  return (
    <div className="justify-center place-content-center">
      <p className="font-bold text-3xl mb-6">Services Page</p>

      {data.map((d) => (
        <div key={d._id} className="mb-6">
          <Link href={`/services/${d._id}`}>
            <img
              src={d.service_image}
              alt={d.service_name}
              className="w-64 rounded-lg cursor-pointer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
