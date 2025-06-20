"use client";
import Image from "next/image";

export default function News() {
  const newsCategories = [
    {
      name: "School Announcements",
      description: "Important updates and notices from the school administration",
      image: "/image/news/announcements.jpg",
      items: ["Academic calendar changes", "Staff updates", "Facility improvements", "Policy updates"]
    },
    {
      name: "Student Achievements",
      description: "Celebrating our students' accomplishments",
      image: "/image/news/achievements.jpg",
      items: ["Academic awards", "Arts recognitions", "Sports victories", "Community service"]
    },
    {
      name: "Event Highlights",
      description: "Recaps and photos from recent school events",
      image: "/image/news/events.jpg",
      items: ["Cultural festivals", "Science fairs", "Sports days", "Graduation ceremonies"]
    }
  ];

  const recentNews = [
    { title: "New STEM Lab Opening", date: "May 15, 2025" },
    { title: "Annual Science Fair Winners Announced", date: "April 28, 2025" },
    { title: "School Ranked Top 10 in State", date: "April 10, 2025" },
    { title: "Spring Music Concert Series", date: "March 22, 2025" }
  ];

  return (
    <div className="mt- w-full flex flex-col items-center justify-center relative mainContainer" style={{ minHeight: 320 }}>
      {/* Cover Section */}
      <div style={{
          position: "relative",
          width: "100%",
          height: 300,
          margin: "0 auto",
          overflow: "hidden",
        }}>
        <Image
          src="/image/news/cover.jpg"
          alt="News Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundColor: "#074B35",
          }}
        />
        <h1 style={{
            fontFamily: "Gideon Roman",
            fontWeight: 400,
            fontSize: "120px",
            lineHeight: "1",
            letterSpacing: "24px",
            color: "#FFFFFF",
            height: 260,
            position: "absolute",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,0.18)",
            inset: 0,
          }}>
          News
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">School News & Updates</h2>
            <p className="text-lg mb-8">
              Stay informed about the latest happenings, achievements, and important announcements 
              from our school community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {newsCategories.map((category, index) => (
                <div key={index} className="border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#085038]">{category.name}</h3>
                    <p className="mb-4">{category.description}</p>
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#085038] text-lg mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f0f7f4] rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#085038]">Media Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">
                    Browse our collection of photos and videos from recent school events, 
                    classroom activities, and special programs.
                  </p>
                  <ul className="space-y-2">
                    {["2025 Graduation", "Science Fair Exhibition", "Sports Championship", 
                      "Arts Festival", "Community Service Day"].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#085038] text-lg mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/image/news/gallery.jpg"
                    alt="News Gallery"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#085038] text-white p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Recent News</h3>
                <ul className="space-y-3">
                  {recentNews.map((item, i) => (
                    <li key={i} className="flex items-baseline">
                      <span className="text-white text-lg mr-2">📰</span>
                      <div>
                        <span className="font-medium">{item.title}</span>
                        <span className="text-[#a3d9c4] ml-2">{item.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                <p className="mb-4">
                  Subscribe to our newsletter and follow us on social media to get 
                  the latest updates delivered directly to you.
                </p>
                <button className="bg-white text-[#085038] px-6 py-2 rounded-lg hover:bg-[#e6f2ed] transition-colors">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}