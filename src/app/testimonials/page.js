"use client";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The two years of my life spent at this school has been one of the most amazing times of my life. I have met many people, students and teachers, whom Ill never forget in my years to come. My hostel has been the best and we had great fun being together like a family. I will miss this place and everyone whom lye met here.",
      author: "Panchimma Cherian",
      role: "Student",
      image: "/image/testimonials/parent1.jpg"
    },
    {
      quote: "Heartiest congratulations to you all for successfully mentoring and guiding the class of 2018 that graduated from junior school yesterday.Please accept our sincere thanks and heartfelt gratitude for the sincerity, dedication and hard work you put in to make this possible. You have groomed our children through their most formative years and it warmed our hearts not just seeing our child pass out, but all her peers whom we have seen metamorphosing from infants to confident, happy and determined young pre-teens.What you do is indeed noble and may you all be blessed in abundance for the marvellous effort that you all put in. The song that was so beautifully presented by the graduating children is indeed an small but true measure of the gratitude of the children and their proud parents towards each and every member of team junior school. May you be blessed with the opportunity to mould many more young minds and hearts.",
      author: "Venu Nambisan",
      role: "Parent",
      image: "/image/testimonials/alumni1.jpg"
    },
    {
      quote: "I was very impressed by the way students remembered their dialogues, did not stop even once and showed such confidence on stage. This does not happen in Germany, students over there are very shy.",
      author: "Christine",
      role: "Parent",
      image: "/image/testimonials/professor1.jpg"
    },
    {
      quote: "TRINS has helped me to scale great heights in academics. Joining this institution was the best thing that has ever happened in my life.",
      author: "Ruben Joseph",
      role: "Student",
      image: "/image/testimonials/alumni2.jpg"
    },
    {
      quote: "Thanks much for such a perfectly appropriate and indeed relevant initiative carried out in an equally seamless way. Interacting with our  inquisitive kids, listening to the parents and the doctor, and watching the commendable dedication of the energetic Junior School team was a truly great experience. Kudos to Junior School and I hope to see similar activities frequently.",
      author: "Guest",
      role: "Guest",
      image: "/image/testimonials/parent2.jpg"
    },
    {
      quote: "I don't know whether I am ready to face the world but I am sure not ready to leave this school, its safe harbour with some of my strongest anchors - my beloved teachers and friends...",
      author: "Susan John Muthoot",
      role: "Student",
      image: "/image/testimonials/alumni3.jpg"
    },
    {
      quote: "First let me congratulate all those behind this initiative of arranging a lively panel discussion on a highly relevant topic. The great thing about the program was that the kids always felt like they were part of the conversation as they were encouraged to express their ideas, opinions and lifestyle choices. This definitely might have helped them to cement the concepts they familiarized in the classroom on the topic of healthy lifestyles. Your team has done a brilliant job in sensitising the children about the importance of healthy food, exercise and hygiene. Hats off to the doctor, PE teacher, parents, grandparents and the moderator for sharing their experience. Keep up the good work",
      author: "Rajesh K R",
      role: "Guest",
      image: "/image/testimonials/alumni3.jpg"
    },
    {
      quote: "First of all congratulations on successfully completing PYP Broadway on a high note.It was wonderful to see your team taking on such a huge task. The mammoth exercise it turned out to be was very evident in the way the sets were done and the children were prepared.I was initially sceptical of being able to put up a good show with the small kids. But you guys planned and executed it very well. I am really happy that children are getting these wonderful opportunities to showcase their talent. The children also put up a very good show .          Keep going!!!",
      author: "Manoj Kumar",
      role: "Parent",
      image: "/image/testimonials/alumni3.jpg"
    },
    {
      quote: "TRINS is a unique school which provides all kinds of 'extreme' experiences to make one confident to face the practical world... . I strongly believe that as a student of TRINS I can successfully face the world....",
      author: "Vyshak",
      role: "Student",
      image: "/image/testimonials/alumni3.jpg"
    },
    {
      quote: "Thanks a lot for PYP team for all the efforts in making sure our kids are happily learning in a fun filled, safe environment. Your team did an exemplary job all throughout the year.           Wishing a great vacation to you too.. Enjoy !",
      author: "Kavitha Valsala",
      role: "Parent",
      image: "/image/testimonials/alumni3.jpg"
    },
    {
      quote: "Thank you madam. You are a true teacher and you have observed him very closely. It is not easy for any parent to stay away from their child at this little age. I am thankful to you, dear teacher and the school for easing my worries and making my child comfortable. He seems to be very happy and wants to continue in the same school. I noticed a lot of developments in him. Once again, thank you dear madam for caring and teaching my child. God bless you.",
      author: "Veena",
      role: "Parent",
      image: "/image/testimonials/alumni3.jpg"
    },
    {
      quote: "I am writing this email to express our sincere gratitude and to share our satisfaction towards the efforts of TRINS teaching team for moulding the personality of our beloved son and for the consistent development in his reading and writing skills since the KG1 days. It is so fulfilling to see Aarush writing and reading many words without any assistance. I want to thank sincerely the KG1 teachers for the strong foundation provided and the KG2 teachers for expediting the skills to the next level.          I would meet the TRINS team in person when I visit Trivandrum next time.                        Currently I am in Dubai.I am preparing myself to see much more developments in   the upcoming days!           Well done!",
      author: "Arun",
      role: "Guest",
      image: "/image/testimonials/alumni3.jpg"
    },

    {
      quote: "I write with regard to my son Sanjay Jacob who is in Grade 11, IDBP. We have high regard for the school's initiative in creating an encouraging environment for the students. The opportunity Sanjay got to partake in the theatre play TRINS BROADWAY at Tagore theatre has boosted his confidence tremendously. Such ongoing efforts from your side are greatly appreciated.",
      author: "Shanthi Jacob",
      role: "Parent",
      image: "/image/testimonials/alumni3.jpg"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials = activeCategory === "all"
    ? testimonials
    : testimonials.filter(t =>
      (activeCategory === "parents" && t.role.includes("Parent")) ||
      (activeCategory === "alumni" && t.role.includes("Alumni")) ||
      (activeCategory === "educators" && (t.role.includes("Professor") || t.role.includes("Teacher")))
    );

  return (
    <div
      className="mt-11 w-full flex flex-col items-center justify-center relative mainContainer"
      style={{ minHeight: 320 }}
    >
      {/* Cover Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 300,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Image
          src="/image/activities/outbound.webp"
          alt="Testimonials Cover"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
            backgroundColor: "#074B35",
          }}
          priority
        />
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.5) 100%)"
          }}
        />
        <h1
          style={{
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
          }}
        >
          Testimonials
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mt-16 mb-24 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#085038]">
              Voices From Our Community
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { id: "all", label: "All Testimonials" },
                { id: "parents", label: "Parents" },
                { id: "alumni", label: "Alumni" },
                { id: "educators", label: "Educators" }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors
                    ${activeCategory === category.id
                      ? "bg-[#085038] text-white border-[#085038]"
                      : "bg-white text-[#085038] border-[#085038] hover:bg-[#e6f2ed]"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-[#e0e0e0] rounded-lg p-6 hover:shadow-md transition-shadow h-full flex flex-col"
                >
                  <div className="flex-grow">
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#085038]">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0f7f4] p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#085038]">
              Share Your Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  We value feedback from our community. Share your story about how
                  our school has impacted you or your family.
                </p>
                <button className="bg-[#085038] text-white px-6 py-2 rounded-lg hover:bg-[#0a6a4a] transition-colors">
                  Submit Your Testimonial
                </button>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-[#085038]">
                  Video Testimonials
                </h4>
                <p>
                  Watch our community members share their experiences in their own words.
                </p>
                <div className="mt-4 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Video Gallery Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}