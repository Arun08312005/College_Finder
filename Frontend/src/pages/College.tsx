// import React, { useEffect, useState } from 'react';
// import '../styles/College.css';

// // Sample college data
// const colleges = [
//   {
//     id: 1,
//     name: "Indian Institute of Technology Madras",
//     district: "Chennai",
//     type: "Engineering",
//     rating: 4.9,
//     established: 1959,
//     courses: ["B.Tech", "M.Tech", "PhD"],
//     image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
//     popularCourse: "Computer Science Engineering"
//   },
//   {
//     id: 2,
//     name: "Anna University",
//     district: "Chennai",
//     type: "Engineering",
//     rating: 4.7,
//     established: 1978,
//     courses: ["B.E.", "B.Tech", "M.E.", "Ph.D"],
//     image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Anna_University_Logo.svg/220px-Anna_University_Logo.svg.png",
//     popularCourse: "Electronics and Communication Engineering"
//   },
//   {
//     id: 3,
//     name: "Madras Medical College",
//     district: "Chennai",
//     type: "Medical",
//     rating: 4.8,
//     established: 1835,
//     courses: ["MBBS", "MD", "MS", "DM"],
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Madras_Medical_College_Logo.svg/220px-Madras_Medical_College_Logo.svg.png",
//     popularCourse: "MBBS"
//   },
//   {
//     id: 4,
//     name: "Loyola College",
//     district: "Chennai",
//     type: "Arts and Science",
//     rating: 4.6,
//     established: 1925,
//     courses: ["B.A.", "B.Sc.", "B.Com.", "M.A.", "M.Sc."],
//     image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Loyola_College_logo.png/220px-Loyola_College_logo.png",
//     popularCourse: "B.Com"
//   },
//   {
//     id: 5,
//     name: "PSG College of Technology",
//     district: "Coimbatore",
//     type: "Engineering",
//     rating: 4.7,
//     established: 1951,
//     courses: ["B.E.", "B.Tech", "M.E.", "M.Tech", "MBA", "MCA"],
//     image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/PSG_College_of_Technology_logo.png/220px-PSG_College_of_Technology_logo.png",
//     popularCourse: "Mechanical Engineering"
//   },
//   {
//     id: 6,
//     name: "Coimbatore Medical College",
//     district: "Coimbatore",
//     type: "Medical",
//     rating: 4.6,
//     established: 1966,
//     courses: ["MBBS", "MD", "MS"],
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Indian_Medical_Association_logo.svg/220px-Indian_Medical_Association_logo.svg.png",
//     popularCourse: "MBBS"
//   },
//   {
//     id: 7,
//     name: "Meenakshi Ramasamy Engineering College",
//     district: "Ariyalur",
//     type: "Engineering",
//     rating: 3.8,
//     established: 2010,
//     courses: ["B.E. Mechanical", "B.E. ECE", "B.E. CSE", "B.E. Civil", "B.E. AI & ML"],
//     image: "https://tse2.mm.bing.net/th?id=OIP.YAV0ix6oEIBKdXdSKBjhugHaE8&pid=Api",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
//     popularCourse: "B.E. Mechanical Engineering"
//   },
//   {
//     id: 8,
//     name: "Government Medical College, Dharmapuri",
//     district: "Dharmapuri",
//     type: "Medical",
//     rating: 4.2,
//     established: 2008,
//     courses: ["MBBS", "MD", "Nursing", "Paramedical"],
//     image: "https://images.unsplash.com/photo-1588776814546-ec7d2c40213e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
//     popularCourse: "MBBS"
//   },
//   {
//     id: 9,
//     name: "Government Arts College, Ariyalur",
//     district: "Ariyalur",
//     type: "Arts and Science",
//     rating: 3.9,
//     established: 1965,
//     courses: ["B.A. English", "B.Sc. Mathematics", "B.Com", "M.A. History"],
//     image: "https://www.collegesignal.com/images/colleges/large/2059.jpg",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
//     popularCourse: "B.A. English"
//   },
//   {
//     id: 10,
//     name: "Government Polytechnic College, Ariyalur",
//     district: "Ariyalur",
//     type: "Polytechnic",
//     rating: 4.1,
//     established: 1981,
//     courses: ["Diploma in Mechanical", "Diploma in Civil", "Diploma in EEE"],
//     image: "https://tse1.mm.bing.net/th?id=OIP.83oVHDcrHstfC2gqblKl5wHaE8&pid=Api",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
//     popularCourse: "Diploma in Mechanical"
//   }
// ];

// // Districts of Tamil Nadu
// const districts = [
//   "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
//   "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram",
//   "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam",
//   "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram",
//   "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur",
//   "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur",
//   "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
//   "Viluppuram", "Virudhunagar"
// ];

// const College: React.FC = () => {
//   const [filteredColleges, setFilteredColleges] = useState(colleges);
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [resultsHeading, setResultsHeading] = useState('Top 10 Colleges in Tamil Nadu');

//   useEffect(() => {
//     // Set page title
//     document.title = 'College Studies - College Finder';

//     // Initialize statistics animation
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Start counting animations
//           animateValue('collegeCount', 0, 500, 2000);
//           animateValue('courseCount', 0, 100, 1500);
//           animateValue('studentCount', 0, 10, 2500);
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.5 });

//     const heroStats = document.querySelector('.hero-stats');
//     if (heroStats) {
//       observer.observe(heroStats);
//     }

//     // Display top colleges by default
//     displayTopColleges();

//     return () => {
//       if (heroStats) {
//         observer.unobserve(heroStats);
//       }
//     };
//   }, []);

//   const animateValue = (id: string, start: number, end: number, duration: number) => {
//     const obj = document.getElementById(id);
//     if (!obj) return;
    
//     let startTimestamp: number | null = null;
//     const step = (timestamp: number) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const value = Math.floor(progress * (end - start) + start);
      
//       if (obj) {
//         obj.innerHTML = value + (id === 'studentCount' ? 'K+' : '+');
        
//         // Add pulse animation class
//         if (progress < 1) {
//           obj.classList.add('counting-animation');
//         } else {
//           setTimeout(() => {
//             obj.classList.remove('counting-animation');
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
//     const top10 = [...colleges].sort((a, b) => b.rating - a.rating).slice(0, 10);
//     setFilteredColleges(top10);
//     setResultsHeading('Top 10 Colleges in Tamil Nadu');
//   };

//   const searchColleges = () => {
//     let results = colleges;

//     // Apply filters
//     if (selectedDistrict) {
//       results = results.filter(college => college.district === selectedDistrict);
//     }

//     if (selectedType) {
//       results = results.filter(college => college.type === selectedType);
//     }

//     if (searchTerm) {
//       results = results.filter(college =>
//         college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())));
//     }

//     setFilteredColleges(results);

//     // Update results heading
//     let heading = 'Search Results';
//     if (selectedDistrict || selectedType || searchTerm) {
//       heading += ' for';
//       if (selectedDistrict) heading += ` District: ${selectedDistrict}`;
//       if (selectedType) heading += ` Type: ${selectedType}`;
//       if (searchTerm) heading += ` Search: "${searchTerm}"`;
//     } else {
//       heading = 'All Colleges in Tamil Nadu';
//     }

//     setResultsHeading(heading);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section id="home" className="college-hero">
//         <div className="hero-content">
//           <h1 className="animate__animated animate__fadeInDown">Find Your Perfect College</h1>
//           <p className="animate__animated animate__fadeIn animate__delay-1s">Discover opportunities that shape your future</p>
//           <div className="hero-stats animate__animated animate__fadeIn animate__delay-2s">
//             <div className="stat-item">
//               <span className="stat-number" id="collegeCount">0+</span>
//               <span className="stat-label">Colleges</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number" id="courseCount">0+</span>
//               <span className="stat-label">Courses</span>
//             </div>
//             <div className="stat-item">
//               <span className="stat-number" id="studentCount">0K+</span>
//               <span className="stat-label">Students</span>
//             </div>
//           </div>
//           <a href="#searchResults" className="cta-button animate__animated animate__fadeInUp animate__delay-3s pulse-animation">Explore Colleges</a>
//         </div>
//       </section>

//       <div className="container">
//         <div className="text-center">
//           <h2 className="mb-4 animate__animated animate__fadeIn">Popular Courses in Tamil Nadu</h2>
//         </div>
//         <div className="courses-grid">
//           <div className="course-card" data-aos="fade-up" data-aos-delay="100">
//             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Computer Science" />
//             <div className="course-content">
//               <h3>Computer Science</h3>
//               <p>B.E/B.Tech in Computer Science and Engineering</p>
//             </div>
//           </div>
//           <div className="course-card" data-aos="fade-up" data-aos-delay="150">
//             <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Medical" />
//             <div className="course-content">
//               <h3>MBBS</h3>
//               <p>Bachelor of Medicine and Bachelor of Surgery</p>
//             </div>
//           </div>
//           <div className="course-card" data-aos="fade-up" data-aos-delay="200">
//             <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mathematics" />
//             <div className="course-content">
//               <h3>B.Sc Mathematics</h3>
//               <p>Bachelor of Science in Mathematics</p>
//             </div>
//           </div>
//           <div className="course-card" data-aos="fade-up" data-aos-delay="250">
//             <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Electrical Engineering" />
//             <div className="course-content">
//               <h3>Electrical Engineering</h3>
//               <p>B.E/B.Tech in Electrical and Electronics Engineering</p>
//             </div>
//           </div>
//         </div>

//         <div className="search-container" data-aos="fade-up">
//           <div className="text-center">
//             <h2 className="animate__animated animate__fadeIn">College Search</h2>
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
//                   <option key={index} value={district}>{district}</option>
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
//                 if (e.key === 'Enter') {
//                   searchColleges();
//                 }
//               }}
//             />
//           </div>
//           <div className="button-group">
//             <button className="search-btn" onClick={searchColleges}>Search Colleges</button>
//             <button className="show-top-btn" onClick={displayTopColleges}>Show Top Colleges</button>
//           </div>
//         </div>

//         <h2 className="results-heading" id="searchResults">{resultsHeading}</h2>
//         <div className="colleges-grid">
//           {filteredColleges.length > 0 ? (
//             filteredColleges.map((college, index) => (
//               <div className="college-card" key={college.id} data-aos="fade-up" data-aos-delay={index * 50}>
//                 <div className="college-image-container">
//                   <img src={college.image} className="college-image" alt={college.name} />
//                   <span className="type-badge">{college.type}</span>
//                   {college.rating >= 4.5 && <span className="rating-badge">Top Rated</span>}
//                 </div>
//                 <div className="college-content">
//                   <div className="college-header">
//                     <img src={college.logo} className="college-logo" alt={`${college.name} logo`} />
//                     <div>
//                       <h3>{college.name}</h3>
//                       <p className="college-meta">
//                         <span><i className="fas fa-map-marker-alt"></i> {college.district}</span>
//                         <span><i className="fas fa-star"></i> {college.rating}/5</span>
//                         <span><i className="fas fa-calendar-alt"></i> Est. {college.established}</span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="college-details">
//                     <h4>Popular Course: <span>{college.popularCourse}</span></h4>
//                     <p>Available Courses:</p>
//                     <div className="course-tags">
//                       {college.courses.map((course, idx) => (
//                         <span key={idx} className="course-tag">{course}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="college-actions">
//                     <button className="view-details-btn">View Details</button>
//                     <button className="call-now-btn">Call Now</button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="no-results">
//               <i className="fas fa-university"></i>
//               <h3>No colleges found matching your criteria</h3>
//               <p>Try adjusting your search filters</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default College;


import React, { useEffect, useState } from 'react';
import '../styles/College.css';

// Sample college data
const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology Madras",
    district: "Chennai",
    type: "Engineering",
    rating: 4.9,
    established: 1959,
    courses: ["B.Tech", "M.Tech", "PhD"],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
    popularCourse: "Computer Science Engineering"
  },
  {
    id: 2,
    name: "Anna University",
    district: "Chennai",
    type: "Engineering",
    rating: 4.7,
    established: 1978,
    courses: ["B.E.", "B.Tech", "M.E.", "Ph.D"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Anna_University_Logo.svg/220px-Anna_University_Logo.svg.png",
    popularCourse: "Electronics and Communication Engineering"
  },
  {
    id: 3,
    name: "Madras Medical College",
    district: "Chennai",
    type: "Medical",
    rating: 4.8,
    established: 1835,
    courses: ["MBBS", "MD", "MS", "DM"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Madras_Medical_College_Logo.svg/220px-Madras_Medical_College_Logo.svg.png",
    popularCourse: "MBBS"
  },
  {
    id: 4,
    name: "Loyola College",
    district: "Chennai",
    type: "Arts and Science",
    rating: 4.6,
    established: 1925,
    courses: ["B.A.", "B.Sc.", "B.Com.", "M.A.", "M.Sc."],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Loyola_College_logo.png/220px-Loyola_College_logo.png",
    popularCourse: "B.Com"
  },
  {
    id: 5,
    name: "PSG College of Technology",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.7,
    established: 1951,
    courses: ["B.E.", "B.Tech", "M.E.", "M.Tech", "MBA", "MCA"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/PSG_College_of_Technology_logo.png/220px-PSG_College_of_Technology_logo.png",
    popularCourse: "Mechanical Engineering"
  },
  {
    id: 6,
    name: "Coimbatore Medical College",
    district: "Coimbatore",
    type: "Medical",
    rating: 4.6,
    established: 1966,
    courses: ["MBBS", "MD", "MS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Indian_Medical_Association_logo.svg/220px-Indian_Medical_Association_logo.svg.png",
    popularCourse: "MBBS"
  },
  {
    id: 7,
    name: "Meenakshi Ramasamy Engineering College",
    district: "Ariyalur",
    type: "Engineering",
    rating: 3.8,
    established: 2010,
    courses: ["B.E. Mechanical", "B.E. ECE", "B.E. CSE", "B.E. Civil", "B.E. AI & ML"],
    image: "https://tse2.mm.bing.net/th?id=OIP.YAV0ix6oEIBKdXdSKBjhugHaE8&pid=Api",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
    popularCourse: "B.E. Mechanical Engineering"
  },
  {
    id: 8,
    name: "Government Medical College, Dharmapuri",
    district: "Dharmapuri",
    type: "Medical",
    rating: 4.2,
    established: 2008,
    courses: ["MBBS", "MD", "Nursing", "Paramedical"],
    image: "https://images.unsplash.com/photo-1588776814546-ec7d2c40213e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
    popularCourse: "MBBS"
  },
  {
    id: 9,
    name: "Government Arts College, Ariyalur",
    district: "Ariyalur",
    type: "Arts and Science",
    rating: 3.9,
    established: 1965,
    courses: ["B.A. English", "B.Sc. Mathematics", "B.Com", "M.A. History"],
    image: "https://www.collegesignal.com/images/colleges/large/2059.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
    popularCourse: "B.A. English"
  },
  {
    id: 10,
    name: "Government Polytechnic College, Ariyalur",
    district: "Ariyalur",
    type: "Polytechnic",
    rating: 4.1,
    established: 1981,
    courses: ["Diploma in Mechanical", "Diploma in Civil", "Diploma in EEE"],
    image: "https://tse1.mm.bing.net/th?id=OIP.83oVHDcrHstfC2gqblKl5wHaE8&pid=Api",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/TamilNadu_Govt_logo.svg",
    popularCourse: "Diploma in Mechanical"
  },
  {
    id: 11,
    name: "Vellore Institute of Technology",
    district: "Vellore",
    type: "Engineering",
    rating: 4.5,
    established: 1984,
    courses: ["B.Tech", "M.Tech", "MBA", "PhD"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Vellore_Institute_of_Technology_logo.svg/1200px-Vellore_Institute_of_Technology_logo.svg.png",
    popularCourse: "Computer Science Engineering"
  },
  {
    id: 12,
    name: "SRM Institute of Science and Technology",
    district: "Chengalpattu",
    type: "Engineering",
    rating: 4.4,
    established: 1985,
    courses: ["B.Tech", "M.Tech", "MBBS", "BDS"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg/1200px-SRM_Institute_of_Science_and_Technology_logo.svg.png",
    popularCourse: "Computer Science Engineering"
  }
];

// Districts of Tamil Nadu
const districts = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
  "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram",
  "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam",
  "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram",
  "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur",
  "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur",
  "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
  "Viluppuram", "Virudhunagar"
];

const College: React.FC = () => {
  const [filteredColleges, setFilteredColleges] = useState(colleges.slice(0, 10));
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [resultsHeading, setResultsHeading] = useState('Top 10 Colleges in Tamil Nadu');
  const [showAllColleges, setShowAllColleges] = useState(false);

  useEffect(() => {
    document.title = 'College Studies - College Finder';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateValue('collegeCount', 0, 500, 2000);
          animateValue('courseCount', 0, 100, 1500);
          animateValue('studentCount', 0, 10, 2500);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      observer.observe(heroStats);
    }

    return () => {
      if (heroStats) {
        observer.unobserve(heroStats);
      }
    };
  }, []);

  const animateValue = (id: string, start: number, end: number, duration: number) => {
    const obj = document.getElementById(id);
    if (!obj) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      
      if (obj) {
        obj.innerHTML = value + (id === 'studentCount' ? 'K+' : '+');
        if (progress < 1) {
          obj.classList.add('counting-animation');
        } else {
          setTimeout(() => {
            obj.classList.remove('counting-animation');
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
    const top10 = [...colleges].sort((a, b) => b.rating - a.rating).slice(0, 10);
    setFilteredColleges(top10);
    setResultsHeading('Top 10 Colleges in Tamil Nadu');
    setShowAllColleges(false);
  };

  const searchColleges = () => {
    let results = colleges;

    if (selectedDistrict) {
      results = results.filter(college => college.district === selectedDistrict);
    }

    if (selectedType) {
      results = results.filter(college => college.type === selectedType);
    }

    if (searchTerm) {
      results = results.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    setFilteredColleges(results);
    setShowAllColleges(true);

    let heading = 'Search Results';
    if (selectedDistrict || selectedType || searchTerm) {
      heading += ' for';
      if (selectedDistrict) heading += ` District: ${selectedDistrict}`;
      if (selectedType) heading += ` Type: ${selectedType}`;
      if (searchTerm) heading += ` Search: "${searchTerm}"`;
    } else {
      heading = 'All Colleges in Tamil Nadu';
    }

    setResultsHeading(heading);
  };

  const loadMoreColleges = () => {
    setFilteredColleges(colleges);
    setResultsHeading('All Colleges in Tamil Nadu');
    setShowAllColleges(true);
  };

  return (
    <>
      <section id="home" className="college-hero">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeInDown">Find Your Perfect College</h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s">Discover opportunities that shape your future</p>
          <div className="hero-stats animate__animated animate__fadeIn animate__delay-2s">
            <div className="stat-item">
              <span className="stat-number" id="collegeCount">0+</span>
              <span className="stat-label">Colleges</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" id="courseCount">0+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" id="studentCount">0K+</span>
              <span className="stat-label">Students</span>
            </div>
          </div>
          <a href="#searchResults" className="cta-button animate__animated animate__fadeInUp animate__delay-3s pulse-animation">Explore Colleges</a>
        </div>
      </section><br />

      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 animate__animated animate__fadeIn text-center text-4xl my-5">Popular Courses in Tamil Nadu</h2>
        </div>
        <div className="courses-grid">
          <div className="course-card" data-aos="fade-up" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Computer Science" />
            <div className="course-content">
              <h3>Computer Science</h3>
              <p>B.E/B.Tech in Computer Science and Engineering</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="150">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Medical" />
            <div className="course-content">
              <h3>MBBS</h3>
              <p>Bachelor of Medicine and Bachelor of Surgery</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="200">
            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mathematics" />
            <div className="course-content">
              <h3>B.Sc Mathematics</h3>
              <p>Bachelor of Science in Mathematics</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="250">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Electrical Engineering" />
            <div className="course-content">
              <h3>Electrical Engineering</h3>
              <p>B.E/B.Tech in Electrical and Electronics Engineering</p>
            </div>
          </div>
        </div><br />

        <div className="search-container" data-aos="fade-up">
          <div className="text-center">
            <h2 className="animate__animated animate__fadeIn text-center text-4xl my-5">College Search</h2>
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
                  <option key={index} value={district}>{district}</option>
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
                if (e.key === 'Enter') {
                  searchColleges();
                }
              }}
            />
          </div>
          <div className="button-group">
            <button className="search-btn" onClick={searchColleges}>Search Colleges</button>
            <button className="show-top-btn" onClick={displayTopColleges}>Show Top Colleges</button>
          </div>
        </div>

        <h2 className="results-heading" id="searchResults">{resultsHeading}</h2>
        <div className="colleges-grid">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college, index) => (
              <div className="college-card" key={college.id} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="college-image-container">
                  <img src={college.image} className="college-image" alt={college.name} />
                  <span className="type-badge">{college.type}</span>
                  {college.rating >= 4.5 && <span className="rating-badge">Top Rated</span>}
                </div>
                <div className="college-content">
                  <div className="college-header">
                    <img src={college.logo} className="college-logo" alt={`${college.name} logo`} />
                    <div>
                      <h3>{college.name}</h3>
                      <p className="college-meta">
                        <span><i className="fas fa-map-marker-alt"></i> {college.district}</span>
                        <span><i className="fas fa-star"></i> {college.rating}/5</span>
                        <span><i className="fas fa-calendar-alt"></i> Est. {college.established}</span>
                      </p>
                    </div>
                  </div>
                  <div className="college-details">
                    <h4>Popular Course: <span>{college.popularCourse}</span></h4>
                    <p>Available Courses:</p>
                    <div className="course-tags">
                      {college.courses.map((course, idx) => (
                        <span key={idx} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                  <div className="college-actions">
                    <button className="view-details-btn">View Details</button>
                    <button className="call-now-btn">Call Now</button>
                  </div>
                </div>
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
        
        {!showAllColleges && filteredColleges.length > 0 && (
          <div className="text-center mt-4">
            <button className="load-more-btn" onClick={loadMoreColleges}>
              Show All Colleges
            </button>
          </div>
        )}
      </div><br /><br />
    </>
  );
};

export default College;