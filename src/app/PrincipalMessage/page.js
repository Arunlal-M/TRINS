// "use client";
// import { useState } from "react";
// import BlogCard from "../components/BlogCard";

// export default function Blogs() {
//     const blogs = [
//         {
//             image: "/image/blogs/mindfull.png",
//             title: "Mindfulness Techniques for Parents and Kids",
//             date: "March 26, 2025",
//             excerpt:
//                 "In today’s fast-paced lifestyle, families often find themselves caught in a cycle of busyness, screen time, and constant distractions. Amidst all this, mindfulness offers a way for parents and children to slow down, reconnect, and create a more harmonious home environment. Practising mindfulness is not about being perfect but about being present – with ourselves...",
//         },
//         {
//             image: "/image/blogs/building.png",
//             title: "Building Emotional Resilience in Children",
//             date: "March 26, 2025",
//             excerpt:
//                 "Emotional resilience is a vital skill for children to develop as they navigate the ups and downs of growing up. Learn how to foster resilience in your child for a brighter, more confident future...",
//         },
//         {
//             image: "/image/blogs/fostering.jpg",
//             title: "Fostering Creativity in Young Minds",
//             date: "March 26, 2025",
//             excerpt:
//                 "Creativity is not just about art—it's about problem-solving, innovation, and thinking outside the box. Discover ways to nurture creativity in your child every day...",
//         },
//         {
//             image: "/image/blogs/DSC07325.jpg",
//             title: "The Role of Outdoor Play in a Child’s Development",
//             date: "March 26, 2025",
//             excerpt:
//                 "Outdoor play holds a unique place in a child’s development. In today’s fast-changing world, where screen time often dominates leisure hours, encouraging children to step outside and engage with nature becomes all the more significant. Outdoor play is not merely a leisure activity but a powerful medium that nurtures physical, cognitive, social, and emotional growth.",
//         },
//         {
//             image: "/image/blogs/Nurturing Social Skills in Early Childhood.jpg",
//             title: "Nurturing Social Skills in Early Childhood",
//             date: "March 26, 2025",
//             excerpt:
//                 "Social skills are essential for lifelong success. Learn practical tips to help your child build strong relationships and communicate effectively...",
//         },
//     ];
//     const blogsPerPage = 4;
//     const [page, setPage] = useState(1);
//     const totalPages = Math.ceil(blogs.length / blogsPerPage);
//     const paginatedBlogs = blogs.slice(
//         (page - 1) * blogsPerPage,
//         page * blogsPerPage
//     );

//     return (
//         <div
//             className="mt-64 w-full flex flex-col items-center justify-center relative mainContainer"
//             style={{ minHeight: 320 }}
//         >
//             <div
//                 style={{
//                     position: "relative",
//                     width: "100%",
//                     height: 300,
//                     margin: "0 auto",
//                     overflow: "hidden",
//                 }}
//             >
//                 <img
//                     src="/image/blogs/cover.png"
//                     alt="Blogs Cover"
//                     style={{
//                         width: "100%",
//                         height: 300,
//                         objectFit: "cover",
//                         objectPosition: "center",
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         zIndex: 1,
//                         backgroundColor: "#074B35",
//                     }}
//                 />
//                 <h1
//                     style={{
//                         fontFamily: "Gideon Roman",
//                         fontWeight: 400,
//                         fontSize: "120px",
//                         lineHeight: "1",
//                         letterSpacing: "24px",
//                         color: "#FFFFFF",
//                         width: "100%",
//                         height: 260,
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         zIndex: 2,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         textAlign: "center",
//                         textShadow: "0 4px 32px rgba(0,0,0,0.18)",
//                     }}
//                 >
//                     PRINCIPAL
//                 </h1>
//             </div>
//             <div className="w-full bg-white flex flex-col items-center py-20 px-4">
//                 <h2
//                     className="text-4xl md:text-5xl font-normal mb-8 text-center"
//                     style={{
//                         fontFamily: "Gideon Roman, serif",
//                         letterSpacing: 0,
//                         textTransform: "uppercase",
//                     }}
//                 >
//                     PRINCIPAL'S MESSAGE
//                 </h2>
//                 <div
//                     className="max-w-6xl mx-auto text-center text-xl md:text-2xl text-[#222]"
//                     style={{
//                         fontFamily: "Gideon Roman, serif",
//                         fontWeight: 400,
//                         lineHeight: "1.6",
//                     }}
//                 >
//                     <p>I am fortunate to have been part of the creation of Trivandrum International School in 2003. From its inception, Mr George M. Thomas has been determined that The school should not just have an outstanding campus, but also a curriculum that makes it a distinct international school. ‘International’ has always been at the centre of Trivandrum International School. We aim to live by that and become one of the best international schools in India. The academic curriculum is shaped by both International Baccalaureate programmes (the Primary Years Programme and the Diploma Programme) and the suite of Cambridge Assessment International Education examinations offered by the School, but the approach in the classroom is shaped by the commitment to an international education, while studying in India. We know our students will go on to universities in India, as well as others across the world, and prepare them to follow their chosen paths. The ICSE curriculum is available in Grades 9 and 10, and both A-levels and the IBDP enable university admission in India as well as abroad.</p>
//                     <p>The hostel facility is an important aspect of the Trivandrum International School community. Those staying in the hostel receive both pastoral and academic support, structured study time being provided throughout the week. There is also a strong social side to the hostel which is welcoming to new students. It is essential to craft a well-structured policy to be the best international school for students.</p>
//                     <p>On re-joining Trivandrum International School in 2019 as Director of Academics and Principal, I was delighted to be immersed again in the vast range of extracurricular activities that our students undertake, right here in India.</p>
//                     <p>Music and drama have been a strength of the School from its early days, but so has a commitment to social service in Trivandrum.</p>
//                     <p>I would welcome you to move beyond visiting our website and to come and visit the School. It will help you get a closer look at the opportunities we create for our students at one of the best international schools. You also get the chance to see our students engage in a key task: learning for life.</p>
//                     <p className="noteSignature">- Richard Hillebrand</p>
//                 </div>

//             </div>
//         </div>
//     );
// }

"use client";
import { useState } from "react";
import "./PrincipalMessage.css";

export default function Blogs() {
    return (
        <>
            <div className="  mt-[-120] w-full flex flex-col items-center justify-center relative mainContainer" style={{ minHeight: 320 }}>


                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
                    <div className="bg-white w-12 h-12 rotate-45 -mb-6"></div>
                </div>
            </div>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    margin: "0 auto",
                    overflow: "hidden",
                }}
            >
                <img
                    src="/image/home/gallery-5.jpg"
                    alt="Blogs Cover"
                    style={{
                        width: "100%",
                        height: 300,
                        objectFit: "cover",
                        objectPosition: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        backgroundColor: "#074B35",
                    }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                    {/* <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal text-black tracking-[0.1em] md:tracking-[0.2em]">
                        PRINCIPAL
                    </h1>
                    <div className="w-24 h-1 bg-[#FFDB93] mt-6"></div>
                    <p className="text-black text-lg md:text-xl mt-6 max-w-2xl">
                        A Message from Our Principal
                    </p> */}
                </div>
            </div>

            {/* Principal's Message Section */}
            <div className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-wider">
                            PRINCIPAL'S MESSAGE
                        </h2>
                        <div className="w-24 h-0.5 bg-[#074B35] mx-auto mb-6"></div>
                    </div>

                    {/* Photo above message */}
                    <div className="principal-photo-container flex flex-col items-center mb-8">
                        <img
                            src="/image/Principal/richard-hillebrand.webp"
                            alt="Principal Richard Hillebrand"
                            className="principal-photo"
                            
                        /><br/>
                        <p className="text-xl font-semibold italic">Richard Hillebrand</p>
                    </div>

                    {/* Message Content */}
                    <div className="relative">
                        {/* Decorative Quote Mark */}
                        <div className="absolute -top-8 -left-4 text-[#FFDB93] text-9xl font-serif opacity-20">
                            "
                        </div>

                        <div className="prose prose-lg max-w-none text-[#333] leading-relaxed">
                            <p className="mb-6">
                                I am fortunate to have been part of the creation of Trivandrum International School in 2003. From its inception, Mr George M. Thomas has been determined that The school should not just have an outstanding campus, but also a curriculum that makes it a distinct international school.
                            </p>

                            <p className="mb-6">
                                <span className="font-semibold">'International'</span> has always been at the centre of Trivandrum International School. We aim to live by that and become one of the best international schools in India. The academic curriculum is shaped by both International Baccalaureate programmes (the Primary Years Programme and the Diploma Programme) and the suite of Cambridge Assessment International Education examinations offered by the School, but the approach in the classroom is shaped by the commitment to an international education, while studying in India.
                            </p>

                            <p className="mb-6">
                                We know our students will go on to universities in India, as well as others across the world, and prepare them to follow their chosen paths. The ICSE curriculum is available in Grades 9 and 10, and both A-levels and the IBDP enable university admission in India as well as abroad.
                            </p>

                            <p className="mb-6">
                                The hostel facility is an important aspect of the Trivandrum International School community. Those staying in the hostel receive both pastoral and academic support, structured study time being provided throughout the week. There is also a strong social side to the hostel which is welcoming to new students. It is essential to craft a well-structured policy to be the best international school for students.
                            </p>

                            <p className="mb-6">
                                On re-joining Trivandrum International School in 2019 as Director of Academics and Principal, I was delighted to be immersed again in the vast range of extracurricular activities that our students undertake, right here in India.
                            </p>

                            <p className="mb-6">
                                Music and drama have been a strength of the School from its early days, but so has a commitment to social service in Trivandrum.
                            </p>

                            <p className="mb-6">
                                I would welcome you to move beyond visiting our website and to come and visit the School. It will help you get a closer look at the opportunities we create for our students at one of the best international schools. You also get the chance to see our students engage in a key task: learning for life.
                            </p>
                            {/* Replace the current signature section with this */}
                            <div className="signature-section">
                                <div>
                                    <p className="text-xl font-semibold italic">- Richard Hillebrand</p>
                                    <p className="text-lg text-gray-600">Principal, Trivandrum International School</p>
                                </div>
                                <img
                                    src="/image/Principal/richard-hillebrand.webp"
                                    alt="Principal Richard Hillebrand"
                                    className="signature-photo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Values Section */}
            <div className="w-full bg-[#074B35] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl text-center text-white mb-12 font-normal">
                        OUR CORE VALUES
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-[#074B35] text-3xl mb-4">01</div>
                            <h4 className="text-xl font-semibold mb-2">Global Perspective</h4>
                            <p className="text-gray-700">Cultivating international-mindedness and cultural awareness in all students</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-[#074B35] text-3xl mb-4">02</div>
                            <h4 className="text-xl font-semibold mb-2">Academic Excellence</h4>
                            <p className="text-gray-700">Rigorous curriculum designed to challenge and inspire young minds</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-[#074B35] text-3xl mb-4">03</div>
                            <h4 className="text-xl font-semibold mb-2">Holistic Development</h4>
                            <p className="text-gray-700">Nurturing intellectual, physical, social and emotional growth</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="w-full bg-[#FFDB93] py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl mb-6">Experience Our School Community</h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Schedule a campus tour to see our facilities and meet our passionate educators
                    </p>
                    <button className="bg-[#074B35] text-white px-8 py-3 rounded-full font-medium hover:bg-[#053024] transition duration-300">
                        Schedule a Visit
                    </button>
                </div>
            </div>
        </>
    );
}