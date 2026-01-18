import React from 'react'

export default async function ServiceDetailPage({ params }) {
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
  const { id } = await params;
const singledata = data.find((d) => d._id == id)
  return (
    <div>
      <h1>Service Details Page </h1>
      <p>ID: {id}</p>
      <p>{singledata.service_name}</p>
      <img src={singledata.service_image}/>
      <p>{singledata.service_description}</p>
    </div>
  );
}

