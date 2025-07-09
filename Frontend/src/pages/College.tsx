// import React, { useEffect, useState } from "react";
// import "../styles/College.css";

// // Sample college data
// const colleges = [
//     {
//       name: "University Departments of Anna University, Chennai - CEG Campus, Sardar Patel Road, Guindy, Chennai 600 025",
//       district: "Chennai",
//       type: "Engineering",
//       rating: 4.2,
//       established: 2013,
//       courses: [
//         "B.Tech",
//         "M.Tech",
//         "MBA",
//         "MCA"
//       ],
//       logo: "https://via.placeholder.com/150x150.png?text=College+1+Logo",
//       image: "https://source.unsplash.com/random/600x400/?campus,0",
//       popularCourse: "Computer Science Engineering"
//     },
//     {
//     name: "University Departments of Anna University, Chennai - ACT Campus, Sardar Patel Road, Guindy, Chennai 600 025",
//     district: "Chennai",
//     type: "Engineering",
//     rating: 4.1,
//     established: 1984,
//     courses: [
//       "M.E",
//       "MBA",
//       "MCA",
//       "M.Tech"
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
//     image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
//     popularCourses: [
//       "Environmental Engineering",
//       "Biomedical Engineering",
//       "Cybersecurity",
//       "Mechanical Engineering"
//     ]
//   },
//   {
//     name: "University Departments of Anna University, Chennai - MIT Campus, Chrompet, Tambaram Taluk, Kancheepuram District 600 044",
//     district: "Kancheepuram",
//     type: "Engineering",
//     rating: 4.2,
//     established: 1995,
//     courses: [
//       "M.E",
//       "M.Tech",
//       "MBA"
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
//     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
//     popularCourses: [
//       "Chemical Engineering",
//       "Computer Science Engineering"
//     ]
//   },
//   {
//     name: "Annamalai University Faculty of Engineering and Technology,Annamalai nagar,Cuddalore 608002",
//     district: "Cuddalore",
//     type: "Engineering",
//     rating: 3.6,
//     established: 1980,
//     courses: [
//       "B.Tech",
//       "M.E",
//       "M.Tech"
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
//     image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
//     popularCourses: [
//       "Cybersecurity",
//       "Electrical & Electronics Engineering",
//       "Biomedical Engineering"
//     ]
//   },
//   ];


// // Districts of Tamil Nadu
// const districts = [
//   "Ariyalur",
//   "Chengalpattu",
//   "Chennai",
//   "Coimbatore",
//   "Cuddalore",
//   "Dharmapuri",
//   "Dindigul",
//   "Erode",
//   "Kallakurichi",
//   "Kancheepuram",
//   "Karur",
//   "Krishnagiri",
//   "Madurai",
//   "Mayiladuthurai",
//   "Nagapattinam",
//   "Namakkal",
//   "Nilgiris",
//   "Perambalur",
//   "Pudukkottai",
//   "Ramanathapuram",
//   "Ranipet",
//   "Salem",
//   "Sivaganga",
//   "Tenkasi",
//   "Thanjavur",
//   "Theni",
//   "Thoothukudi",
//   "Tiruchirappalli",
//   "Tirunelveli",
//   "Tirupathur",
//   "Tiruppur",
//   "Tiruvallur",
//   "Tiruvannamalai",
//   "Tiruvarur",
//   "Vellore",
//   "Viluppuram",
//   "Virudhunagar",
// ];

// const College: React.FC = () => {
//   const [filteredColleges, setFilteredColleges] = useState(
//     colleges.slice(0, 10)
//   );
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [resultsHeading, setResultsHeading] = useState(
//     "Top 10 Colleges in Tamil Nadu"
//   );
//   const [showAllColleges, setShowAllColleges] = useState(false);

//   useEffect(() => {
//     document.title = "College Studies - College Finder";
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animateValue("collegeCount", 0, 500, 2000);
//             animateValue("courseCount", 0, 100, 1500);
//             animateValue("studentCount", 0, 10, 2500);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const heroStats = document.querySelector(".hero-stats");
//     if (heroStats) {
//       observer.observe(heroStats);
//     }

//     return () => {
//       if (heroStats) {
//         observer.unobserve(heroStats);
//       }
//     };
//   }, []);

//   // fetch('https://source.unsplash.com/')
//   // .then(res => res.json())
//   // .then(data => {
//   //   document.getElementById("image").src = data.urls.regular;
//   // });

//   const animateValue = (
//     id: string,
//     start: number,
//     end: number,
//     duration: number
//   ) => {
//     const obj = document.getElementById(id);
//     if (!obj) return;

//     let startTimestamp: number | null = null;
//     const step = (timestamp: number) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const value = Math.floor(progress * (end - start) + start);

//       if (obj) {
//         obj.innerHTML = value + (id === "studentCount" ? "K+" : "+");
//         if (progress < 1) {
//           obj.classList.add("counting-animation");
//         } else {
//           setTimeout(() => {
//             obj.classList.remove("counting-animation");
//           }, 500);
//         }
//       }

//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };

//     window.requestAnimationFrame(step);
//   };

//   const displayTopColleges = () => {
//     const top10 = [...colleges]
//       .sort((a, b) => b.rating - a.rating)
//       .slice(0, 10);
//     setFilteredColleges(top10);
//     setResultsHeading("Top 10 Colleges in Tamil Nadu");
//     setShowAllColleges(false);
//   };

//   const searchColleges = () => {
//     let results = colleges;

//     if (selectedDistrict) {
//       results = results.filter(
//         (college) => college.district === selectedDistrict
//       );
//     }

//     if (selectedType) {
//       results = results.filter((college) => college.type === selectedType);
//     }

//     if (searchTerm) {
//       results = results.filter(
//         (college) =>
//           college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           college.courses.some((course) =>
//             course.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//       );
//     }

//     setFilteredColleges(results);
//     setShowAllColleges(true);

//     let heading = "Search Results";
//     if (selectedDistrict || selectedType || searchTerm) {
//       heading += " for";
//       if (selectedDistrict) heading += ` District: ${selectedDistrict}`;
//       if (selectedType) heading += ` Type: ${selectedType}`;
//       if (searchTerm) heading += ` Search: "${searchTerm}"`;
//     } else {
//       heading = "All Colleges in Tamil Nadu";
//     }

//     setResultsHeading(heading);
//   };

//   const loadMoreColleges = () => {
//     setFilteredColleges(colleges);
//     setResultsHeading("All Colleges in Tamil Nadu");
//     setShowAllColleges(true);
//   };

//   return (
//     <>
//       <section id="home" className="college-hero">
//         <div className="hero-content">
//           <h1 className="animate__animated animate__fadeInDown text-4xl font-inter font-semibold text-primary-900 tracking-wide">
//             Find Your Perfect College
//           </h1>
//           <p className="animate__animated animate__fadeIn animate__delay-1s">
//             Discover opportunities that shape your future
//           </p>
//           <div className="hero-stats animate__animated animate__fadeIn animate__delay-2s">
//             <div className="stat-item">
//               <span className="stat-number" id="collegeCount">
//                 0+
//               </span>
//               <span className="stat-label">Colleges</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number" id="courseCount">
//                 0+
//               </span>
//               <span className="stat-label">Courses</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number" id="studentCount">
//                 0K+
//               </span>
//               <span className="stat-label">Students</span>
//             </div>
//           </div>
//           <a
//             href="#searchResults"
//             className="cta-button animate__animated animate__fadeInUp animate__delay-3s pulse-animation"
//           >
//             Explore Colleges
//           </a>
//         </div>
//       </section>
//       <br />

//         <div className="search-container" data-aos="fade-up">
//           <div className="text-center">
//             <h2 className="animate__animated animate__fadeIn text-center text-4xl my-5">
//               College Search
//             </h2>
//           </div>
//           <div className="search-grid">
//             <div className="search-group">
//               <label htmlFor="districtSelect">Select District</label>
//               <select
//                 id="districtSelect"
//                 value={selectedDistrict}
//                 onChange={(e) => setSelectedDistrict(e.target.value)}
//               >
//                 <option value="">All Districts</option>
//                 {districts.map((district, index) => (
//                   <option key={index} value={district}>
//                     {district}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="search-group">
//               <label htmlFor="collegeTypeSelect">Select College Type</label>
//               <select
//                 id="collegeTypeSelect"
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               >
//                 <option value="">All Types</option>
//                 <option value="Engineering">Engineering</option>
//                 <option value="Arts and Science">Arts & Science</option>
//                 <option value="Medical">Medical</option>
//                 <option value="Polytechnic">Polytechnic</option>
//               </select>
//             </div>
//           </div>
//           <div className="search-group">
//             <label htmlFor="collegeSearch">Search College Name</label>
//             <input
//               type="text"
//               id="collegeSearch"
//               placeholder="Enter college name..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyUp={(e) => {
//                 if (e.key === "Enter") {
//                   searchColleges();
//                 }
//               }}
//             />
//           </div>
//           <div className="button-group">
//             <button className="search-btn" onClick={searchColleges}>
//               Search Colleges
//             </button>
//             <button className="show-top-btn" onClick={displayTopColleges}>
//               Show Top Colleges
//             </button>
//           </div>
//         </div>

//         <h2 className="results-heading" id="searchResults">
//           {resultsHeading}
//         </h2>
//         <div className="colleges-grid">
//           {filteredColleges.length > 0 ? (
//             filteredColleges.map((college, index) => (
//               <div
//                 className="college-card"
//                 // key={college.id}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 50}
//               >
//                 <div className="college-image-container">
//                   <img
//                     src={college.image}
//                     className="college-image"
//                     alt={college.name}
//                   />
//                   <span className="type-badge">{college.type}</span>
//                   {college.rating >= 4.5 && (
//                     <span className="rating-badge">Top Rated</span>
//                   )}
//                 </div>
//                 <div className="college-content">
//                   <div className="college-header">
//                     <img
//                       src={college.logo}
//                       className="college-logo"
//                       alt={`${college.name} logo`}
//                     />
//                     <div>
//                       <h3>{college.name}</h3>
//                       <p className="college-meta">
//                         <span>
//                           <i className="fas fa-map-marker-alt"></i>{" "}
//                           {college.district}
//                         </span>
//                         <span>
//                           <i className="fas fa-star"></i> {college.rating}/5
//                         </span>
//                         <span>
//                           <i className="fas fa-calendar-alt"></i> Est.{" "}
//                           {college.established}
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="college-details">
//                     <h4>
//                       Popular Course: <span>{college.popularCourse}</span>
//                     </h4>
//                     <p>Available Courses:</p>
//                     <div className="course-tags">
//                       {college.courses.map((course, idx) => (
//                         <span key={idx} className="course-tag">
//                           {course}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="college-actions flex gap-4">
//                     {/* WhatsApp Button */}
//                     <a
//                       href="https://wa.me/916380539537?text=Hi%2C%20I%20am%20interested%20in%20college%20admission%20guidance"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <button className="view-details-btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
//                         View Details for contact
//                       </button>
//                     </a>

//                     {/* Call Button */}
//                     <a href="tel:6380539537">
//                       <button className="call-now-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
//                         Call Now
//                       </button>
//                     </a>
//                   </div>
//                 </div><br />
//               </div>
//             ))
//           ) : (
//             <div className="no-results">
//               <i className="fas fa-university"></i>
//               <h3>No colleges found matching your criteria</h3>
//               <p>Try adjusting your search filters</p>
//             </div>
//           )}
//         </div><br />

//         {!showAllColleges && filteredColleges.length > 0 && (
//           <div className="text-center mt-4">
//             <button className="load-more-btn" onClick={loadMoreColleges}>
//               Show All Colleges
//             </button><br />
//           </div>
//         )}

//         <div className="container">
//         <div className="text-center">
//           <h2 className="mb-4 animate__animated animate__fadeIn text-center text-4xl my-5">
//             Popular Courses in Tamil Nadu
//           </h2>
//         </div>
//         <div className="courses-grid">
//           <div className="course-card" data-aos="fade-up" data-aos-delay="100">
//             <img
//               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//               alt="Computer Science"
//             />
//             <div className="course-content">
//               <h3>Computer Science</h3>
//               <p>B.E/B.Tech in Computer Science and Engineering</p>
//             </div>
//           </div>
//           <div className="course-card" data-aos="fade-up" data-aos-delay="150">
//             <img
//               src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//               alt="Medical"
//             />
//             <div className="course-content">
//               <h3>MBBS</h3>
//               <p>Bachelor of Medicine and Bachelor of Surgery</p>
//             </div>
//           </div>
//           <div className="course-card" data-aos="fade-up" data-aos-delay="200">
//             <img
//               src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//               alt="Mathematics"
//             />
//             <div className="course-content">
//               <h3>B.Sc Mathematics</h3>
//               <p>Bachelor of Science in Mathematics</p>
//             </div>
//           </div>
//           <div className="course-card" data-aos="fade-up" data-aos-delay="250">
//             <img
//               src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//               alt="Electrical Engineering"
//             />
//             <div className="course-content">
//               <h3>Electrical Engineering</h3>
//               <p>B.E/B.Tech in Electrical and Electronics Engineering</p>
//             </div>
//           </div>
//         </div>
//         <br />
//       </div>
//       <br />
//       <br />
//     </>
//   );
// };

// export default College;


import React, { useEffect, useState } from "react";
import "../styles/College.css";

// Sample college data
const colleges = [
    {
    name: "University Departments of Anna University, Chennai - CEG Campus, Sardar Patel Road, Guindy, Chennai 600 025",
    district: "Chennai",
    type: "Engineering",
    rating: 3.7,
    established: 2005,
    courses: [
      "B.E",
      "MCA"
    ],
    logo: "https://via.placeholder.com/150/0000FF/FFFFFF?text=College+1",
    image: "https://picsum.photos/800/400?random=0",
    popularCourses: [
      "Civil Engineering",
      "Textile Technology"
    ]
  },
  {
    name: "University Departments of Anna University, Chennai - ACT Campus, Sardar Patel Road, Guindy, Chennai 600 025",
    district: "Chennai",
    type: "Engineering",
    rating: 3.7,
    established: 1996,
    courses: [
      "M.E",
      "M.Tech",
      "B.E"
    ],
    logo: "https://via.placeholder.com/150/0000FF/FFFFFF?text=College+2",
    image: "https://picsum.photos/800/400?random=1",
    popularCourses: [
      "Biomedical Engineering",
      "Textile Technology",
      "Environmental Engineering"
    ]
  },
  {
    name: "University Departments of Anna University, Chennai - MIT Campus, Chrompet, Tambaram Taluk, Kancheepuram District 600 044",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.9,
    established: 2005,
    courses: [
      "B.E",
      "B.Tech",
      "M.Tech",
      "M.E"
    ],
    logo: "https://via.placeholder.com/150/0000FF/FFFFFF?text=College+3",
    image: "https://picsum.photos/800/400?random=2",
    popularCourses: [
      "Environmental Engineering",
      "Chemical Engineering",
      "Mechanical Engineering"
    ]
  }
];


// Districts of Tamil Nadu
const districts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kancheepuram",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

const College: React.FC = () => {
  const [filteredColleges, setFilteredColleges] = useState(
    colleges.slice(0, 10)
  );
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsHeading, setResultsHeading] = useState(
    "Top 10 Colleges in Tamil Nadu"
  );
  const [showAllColleges, setShowAllColleges] = useState(false);

  useEffect(() => {
    document.title = "College Studies - College Finder";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateValue("collegeCount", 0, 500, 2000);
            animateValue("courseCount", 0, 100, 1500);
            animateValue("studentCount", 0, 10, 2500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroStats = document.querySelector(".hero-stats");
    if (heroStats) {
      observer.observe(heroStats);
    }

    return () => {
      if (heroStats) {
        observer.unobserve(heroStats);
      }
    };
  }, []);

  const animateValue = (
    id: string,
    start: number,
    end: number,
    duration: number
  ) => {
    const obj = document.getElementById(id);
    if (!obj) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);

      if (obj) {
        obj.innerHTML = value + (id === "studentCount" ? "K+" : "+");
        if (progress < 1) {
          obj.classList.add("counting-animation");
        } else {
          setTimeout(() => {
            obj.classList.remove("counting-animation");
          }, 500);
        }
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const displayTopColleges = () => {
    const top10 = [...colleges]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);
    setFilteredColleges(top10);
    setResultsHeading("Top 10 Colleges in Tamil Nadu");
    setShowAllColleges(false);
  };

  const searchColleges = () => {
    let results = colleges;

    if (selectedDistrict) {
      results = results.filter(
        (college) => college.district === selectedDistrict
      );
    }

    if (selectedType) {
      results = results.filter((college) => college.type === selectedType);
    }

    if (searchTerm) {
      results = results.filter(
        (college) =>
          college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          college.courses.some((course) =>
            course.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredColleges(results);
    setShowAllColleges(true);

    let heading = "Search Results";
    if (selectedDistrict || selectedType || searchTerm) {
      heading += " for";
      if (selectedDistrict) heading += ` District: ${selectedDistrict}`;
      if (selectedType) heading += ` Type: ${selectedType}`;
      if (searchTerm) heading += ` Search: "${searchTerm}"`;
    } else {
      heading = "All Colleges in Tamil Nadu";
    }

    setResultsHeading(heading);
  };

  const loadMoreColleges = () => {
    setFilteredColleges(colleges);
    setResultsHeading("All Colleges in Tamil Nadu");
    setShowAllColleges(true);
  };

  return (
    <>
      <section id="home" className="college-hero">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeInDown text-4xl font-inter font-semibold text-primary-900 tracking-wide">
            Find Your Perfect College
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            Discover opportunities that shape your future
          </p>
          <div className="hero-stats animate__animated animate__fadeIn animate__delay-2s">
            <div className="stat-item">
              <span className="stat-number" id="collegeCount">
                0+
              </span>
              <span className="stat-label">Colleges</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" id="courseCount">
                0+
              </span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" id="studentCount">
                0K+
              </span>
              <span className="stat-label">Students</span>
            </div>
          </div>
          <a
            href="#searchResults"
            className="cta-button animate__animated animate__fadeInUp animate__delay-3s pulse-animation"
          >
            Explore Colleges
          </a>
        </div>
      </section>
      <br />

      <div className="search-container" data-aos="fade-up">
        <div className="text-center">
          <h2 className="animate__animated animate__fadeIn text-center text-4xl my-5">
            College Search
          </h2>
        </div>
        <div className="search-grid">
          <div className="search-group">
            <label htmlFor="districtSelect">Select District</label>
            <select
              id="districtSelect"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">All Districts</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="search-group">
            <label htmlFor="collegeTypeSelect">Select College Type</label>
            <select
              id="collegeTypeSelect"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Engineering">Engineering</option>
              <option value="Arts and Science">Arts & Science</option>
              <option value="Medical">Medical</option>
              <option value="Polytechnic">Polytechnic</option>
            </select>
          </div>
        </div>
        <div className="search-group">
          <label htmlFor="collegeSearch">Search College Name</label>
          <input
            type="text"
            id="collegeSearch"
            placeholder="Enter college name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchColleges();
              }
            }}
          />
        </div>
        <div className="button-group">
          <button className="search-btn" onClick={searchColleges}>
            Search Colleges
          </button>
          <button className="show-top-btn" onClick={displayTopColleges}>
            Show Top Colleges
          </button>
        </div>
      </div>

      <h2 className="results-heading" id="searchResults">
        {resultsHeading}
      </h2>
      <div className="colleges-grid">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, index) => (
            <div
              className="college-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="college-image-container">
                <img
                  src={college.image}
                  className="college-image"
                  alt={college.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=College+Image";
                  }}
                />
                <span className="type-badge">{college.type}</span>
                {college.rating >= 4.5 && (
                  <span className="rating-badge">Top Rated</span>
                )}
              </div>
              <div className="college-content">
                <div className="college-header">
                  <img
                    src={college.logo}
                    className="college-logo"
                    alt={`${college.name} logo`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/150x150?text=College+Logo";
                    }}
                  />
                  <div>
                    <h3>{college.name}</h3>
                    <p className="college-meta">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {college.district}
                      </span>
                      <span>
                        <i className="fas fa-star"></i> {college.rating}/5
                      </span>
                      <span>
                        <i className="fas fa-calendar-alt"></i> Est.{" "}
                        {college.established}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="college-details">
                  <h4>
                    Popular Courses:{" "}
                    <span>{college.popularCourses.join(", ")}</span>
                  </h4>
                  <p>Available Courses:</p>
                  <div className="course-tags">
                    {college.courses.map((course, idx) => (
                      <span key={idx} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="college-actions flex gap-4">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/916380539537?text=Hi%2C%20I%20am%20interested%20in%20college%20admission%20guidance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="view-details-btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                      View Details for contact
                    </button>
                  </a>

                  {/* Call Button */}
                  <a href="tel:6380539537">
                    <button className="call-now-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Call Now
                    </button>
                  </a>
                </div>
              </div>
              <br />
            </div>
          ))
        ) : (
          <div className="no-results">
            <i className="fas fa-university"></i>
            <h3>No colleges found matching your criteria</h3>
            <p>Try adjusting your search filters</p>
          </div>
        )}
      </div>
      <br />

      {!showAllColleges && filteredColleges.length > 0 && (
        <div className="text-center mt-4">
          <button className="load-more-btn" onClick={loadMoreColleges}>
            Show All Colleges
          </button>
          <br />
        </div>
      )}

      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 animate__animated animate__fadeIn text-center text-4xl my-5">
            Popular Courses in Tamil Nadu
          </h2>
        </div>
        <div className="courses-grid">
          <div className="course-card" data-aos="fade-up" data-aos-delay="100">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Computer Science"
            />
            <div className="course-content">
              <h3>Computer Science</h3>
              <p>B.E/B.Tech in Computer Science and Engineering</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Medical"
            />
            <div className="course-content">
              <h3>MBBS</h3>
              <p>Bachelor of Medicine and Bachelor of Surgery</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Mathematics"
            />
            <div className="course-content">
              <h3>B.Sc Mathematics</h3>
              <p>Bachelor of Science in Mathematics</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="250">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Electrical Engineering"
            />
            <div className="course-content">
              <h3>Electrical Engineering</h3>
              <p>B.E/B.Tech in Electrical and Electronics Engineering</p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
    </>
  );
};

export default College;