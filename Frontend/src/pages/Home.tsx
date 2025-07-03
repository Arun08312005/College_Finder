import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  TrendingUp,
  Laptop,
  Heart,
  BarChart3,
  Building2,
  Globe,
  Phone,
  MessageCircle,
  X,
  ChevronRight,
  Star,
  Award,
  Target,
  Briefcase,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import "../styles/Home.css";
import { BiColor } from "react-icons/bi";

const Home = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  // Animation states
  const [fadeIn, setFadeIn] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [scaleIn, setScaleIn] = useState(false);

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    // Animation triggers
    setFadeIn(true);
    setTimeout(() => setSlideUp(true), 300);
    setTimeout(() => setScaleIn(true), 600);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+916380539537", "_blank");
  };

  const handleCallClick = () => {
    const rawNumber = "6380539537";
    const formattedNumber = rawNumber.replace(/\D/g, "");
    const telLink = `tel:${formattedNumber}`;

    if (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = telLink;
    } else {
      alert(`Call us at: +91 ${formattedNumber}`);
    }
  };

  const toggleMobileNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div className={`home-container ${fadeIn ? "fade-in" : ""}`}>
      {/* Floating Buttons with animation */}
      <div className={`floating-buttons ${slideUp ? "slide-up" : ""}`}>
        <button onClick={handleWhatsAppClick} className="whatsapp-button pulse">
          <MessageCircle size={24} />
          <span className="whatsapp-text">Contact Us</span>
        </button>
        <button onClick={handleCallClick} className="call-btn pulse">
          <Phone size={20} />
          <span>Call Us</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${slideUp ? "slide-up" : ""}`}>
        <div className="logo">
          <h1>
            College<span>Finder</span>
          </h1>
        </div>
        <div className={`nav-links ${isNavActive ? "active" : ""}`}>
          <a href="/" className="active">
            Home
          </a>
          <a href="/about">About Us</a>
          <a href="/college">College Studies</a>
          <a href="/abroad">Abroad Studies</a>
          <a href="/contact">Contact</a>
        </div>
        <div
          className={`hamburger ${isNavActive ? "active" : ""}`}
          onClick={toggleMobileNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section with animations */}
      <section id="home" className={`hero ${fadeIn ? "fade-in" : ""}`}>
        <div className="hero-content">
          <h1
            className={`${slideUp ? "slide-up" : "" }` }
            style={{ color: "#1e88e5" }}
          >
            Find Your Perfect College
          </h1>
          <h2 className={`${slideUp ? "slide-up" : ""}`}>
            Guidelines Provided by College Finder
          </h2>
          <p className={`${slideUp ? "slide-up" : ""}`}>
            Whether you're in high school, just graduated, or considering a
            career change, we'll help you find the right path
          </p>

          <div className={`hero-stats ${scaleIn ? "scale-in" : ""}`}>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Partner Universities</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">70k+</span>
              <span className="stat-label">Students Placed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
          <a href="/college" className={`cta-button pulse`}>
            College Finder
          </a>
        </div>
      </section>

      {/* Education Level Guide with animations */}
      <section className={`education-levels ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <h2
            className={`text-center text-4xl my-5 ${slideUp ? "slide-up" : ""}`}
          >
            Find Help Based on Your Education Level
          </h2>
          <div className="levels-grid">
            <div className={`level-card ${slideUp ? "slide-up" : ""}`}>
              <div className="level-icon">
                <GraduationCap size={48} />
              </div>
              <h3>High School Students</h3>
              <p>Planning for college? We'll help you:</p>
              <ul>
                <li>Choose the right subjects</li>
                <li>Prepare for entrance exams</li>
                <li>Understand application timelines</li>
              </ul>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300">
                <a href="/contact" className="learn-more">
                  Get Prepared
                </a>
              </button>
            </div>
            <div
              className={`level-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="level-icon">
                <Users size={48} />
              </div>
              <h3>Recent Graduates</h3>
              <p>Ready to apply? We'll assist with:</p>
              <ul>
                <li>College selection</li>
                <li>Application process</li>
                <li>Scholarship opportunities</li>
              </ul>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300"><a href="/contact" className="learn-more">
                Start Applying
              </a></button>
            </div>
            <div
              className={`level-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="level-icon">
                <Briefcase size={48} />
              </div>
              <h3>Career Changers</h3>
              <p>Looking for a new path? We can help:</p>
              <ul>
                <li>Identify new career options</li>
                <li>Find adult education programs</li>
                <li>Navigate financial aid</li>
              </ul>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300">
              <a href="/contact" className="learn-more">
                Explore Options
              </a></button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters Section with animations */}
      <section className={`top-recruiters ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <h2 className={`${slideUp ? "slide-up" : ""}`}>TOP RECRUITERS</h2>
          <p className={`subtitle ${slideUp ? "slide-up" : ""}`}>
            Leading Companies Hiring Our Graduates Across Diverse Industries
          </p>

          <div className={`recruiters-grid ${scaleIn ? "scale-in" : ""}`}>
            {[
              "Google",
              "Microsoft",
              "Amazon",
              "Palo Alto Networks",
              "ServiceNow",
              "Autodesk",
              "Bosch",
              "BP",
              "Cognizant",
              "Deloitte",
              "TCS",
              "Infosys",
              "JPMorgan",
              "Aditya Birla",
            ].map((company, index) => (
              <div key={index} className="recruiter-card">
                <img
                  src={`https://logo.clearbit.com/${company
                    .toLowerCase()
                    .replace(/\s+/g, "")}.com`}
                  alt={company}
                  className="recruiter-logo"
                />
                <span className="recruiter-name">{company}</span>
              </div>
            ))}
          </div>

          <a
            href="#application"
            className={`apply-now-btn ${scaleIn ? "scale-in" : ""} pulse`}
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Featured Programs with animations */}
      <section id="featured" className={`featured ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <h2
            className={`text-center text-4xl my-5 ${slideUp ? "slide-up" : ""}`}
          >
            Popular Career Paths
          </h2>
          <p className={`section-subtitle ${slideUp ? "slide-up" : ""}`}>
            Explore these common fields of study and what they can offer
          </p>

          <div className="featured-grid">
            <div className={`featured-card ${slideUp ? "slide-up" : ""}`}>
              <div className="card-icon">
                <Laptop size={40} />
              </div>
              <h3>Computer Science</h3>
              <p>
                Learn to create software, apps, and work with new technologies
              </p>
              <div className="program-simple-details">
                <p>
                  <strong>What you'll learn:</strong> Programming,
                  problem-solving, technology development
                </p>
                <p>
                  <strong>Career options:</strong> Software developer, data
                  scientist, IT specialist
                </p>
              </div>
              <a href="#" className="learn-more">
                Explore This Path
              </a>
            </div>
            <div
              className={`featured-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="card-icon">
                <Heart size={40} />
              </div>
              <h3>Medical Sciences</h3>
              <p>
                Study health, medicine, and helping people through healthcare
              </p>
              <div className="program-simple-details">
                <p>
                  <strong>What you'll learn:</strong> Human biology, patient
                  care, medical procedures
                </p>
                <p>
                  <strong>Career options:</strong> Doctor, nurse, medical
                  researcher
                </p>
              </div>
              <a href="#" className="learn-more">
                Explore This Path
              </a>
            </div>
            <div
              className={`featured-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="card-icon">
                <BarChart3 size={40} />
              </div>
              <h3>Business Administration</h3>
              <p>Learn how organizations work and how to manage businesses</p>
              <div className="program-simple-details">
                <p>
                  <strong>What you'll learn:</strong> Management, marketing,
                  finance, entrepreneurship
                </p>
                <p>
                  <strong>Career options:</strong> Business manager, marketing
                  specialist, entrepreneur
                </p>
              </div>
              <a href="#" className="learn-more">
                Explore This Path
              </a>
            </div>
          </div><br />

          <div className={`explanation-box ${scaleIn ? "scale-in" : ""}`}>
<h3 className="text-3xl font-semibold text-gray-800">Not sure what to study?</h3>
            <p>
              Many students don't know their career path when they start. That's
              okay! We offer career assessment tests and counseling to help you
              discover fields that match your interests and skills.
            </p><br />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300">
            <a href="/contact" className="learn-more pulse">
              Take Our Career Quiz
            </a></button>
          </div>
        </div>
      </section>

      {/* College Basics Section with animations */}
      <section className={`college-basics ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <h2
            className={`text-center text-4xl my-5 ${slideUp ? "slide-up" : ""}`}
          >
            College Basics Explained
          </h2>
          <div className="basics-grid">
            <div className={`basic-card ${slideUp ? "slide-up" : ""}`}>
              <h3>What is a Bachelor's Degree?</h3>
              <p>
                A 4-year program where you study one main subject (your "major")
                along with other general courses. This is what most students
                pursue after high school.
              </p>
            </div>
            <div
              className={`basic-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h3>What are College Credits?</h3>
              <p>
                Points you earn by completing courses. You need a certain number
                to graduate. Most courses are worth 3-4 credits.
              </p>
            </div>
            <div
              className={`basic-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h3>What is Financial Aid?</h3>
              <p>
                Money to help pay for college, including scholarships (free
                money), grants (need-based free money), and loans (money you pay
                back).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Section with animations */}
      <section className={`campus-facilities ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <h2 className={`${slideUp ? "slide-up" : ""}`}>
            WHERE POSSIBILITIES ARE INFINITE
          </h2>
          <p className={`subtitle ${slideUp ? "slide-up" : ""}`}>
            From tech labs to wellness centers, we have it all
          </p>

          <div className={`facilities-grid ${scaleIn ? "scale-in" : ""}`}>
            <div className="facility-card">
              <div
                className="facility-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
                }}
              ></div>
              <div className="facility-content">
                <h3>IMAC LAB</h3>
                <p>
                  State-of-the-art computing lab with iMac workstations for
                  design and development
                </p>
              </div>
            </div>
            <div className="facility-card">
              <div
                className="facility-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
                }}
              ></div>
              <div className="facility-content">
                <h3>SPACE LAB</h3>
                <p>
                  Advanced research facility for aerospace engineering and
                  astronomy studies
                </p>
              </div>
            </div>
            <div className="facility-card">
              <div
                className="facility-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
                }}
              ></div>
              <div className="facility-content">
                <h3>CENTRAL INSTRUMENTATION FACILITY</h3>
                <p>
                  Cutting-edge equipment for scientific research across
                  disciplines
                </p>
              </div>
            </div>
            <div className="facility-card">
              <div
                className="facility-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
                }}
              ></div>
              <div className="facility-content">
                <h3>UNI MALL</h3>
                <p>
                  Campus shopping center with everything students need in one
                  convenient location
                </p>
              </div>
            </div>
            <div className="facility-card">
              <div
                className="facility-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
                }}
              ></div>
              <div className="facility-content">
                <h3>WELLNESS CENTER</h3>
                <p>
                  Comprehensive health and wellness facility with gym, pool, and
                  counseling services
                </p>
              </div>
            </div>
            <div className="facility-card">
              <div
                className="facility-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')",
                }}
              ></div>
              <div className="facility-content">
                <h3>INNOVATION HUB</h3>
                <p>
                  Collaborative workspace for startups and student
                  entrepreneurship initiatives
                </p>
              </div>
            </div>
          </div>
          <br />

          <div className="button-container">
            <Link to="/contact">
              <a href="/contact" className={`cta-button pulse`}>
                Apply Now
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories with animations */}
      <section className={`success-stories ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <h2 className={`${slideUp ? "slide-up" : ""}`}>
            Student Experiences
          </h2>
          <p className={`section-subtitle ${slideUp ? "slide-up" : ""}`}>
            Hear from students who were once in your position
          </p>

          <div className={`success-slider ${scaleIn ? "scale-in" : ""}`}>
            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                alt="Sarah Johnson"
              />
              <div className="story-content">
                <h3>Sarah Johnson</h3>
                <p className="university">
                  Started at community college, transferred to University
                </p>
                <p className="testimony">
                  "I wasn't sure I could afford college. CollegeFinder helped me
                  find scholarships and a transfer path that saved me
                  thousands!"
                </p>
                <div className="achievements">
                  <span>First-generation student</span>
                  <span>Graduated debt for free</span>
                </div>
              </div>
            </div>

            {/* Added Story 1 */}
            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
                alt="Michael Chen"
              />
              <div className="story-content">
                <h3>Michael Chen</h3>
                <p className="university">
                  International Student at State University
                </p>
                <p className="testimony">
                  "Navigating the U.S. education system was overwhelming.
                  CollegeFinder's advisors helped me with everything from visas
                  to housing!"
                </p>
                <div className="achievements">
                  <span>Computer Science Major</span>
                  <span>Interned at FAANG company</span>
                </div>
              </div>
            </div>

            {/* Added Story 2 */}
            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
                alt="Emma Rodriguez"
              />
              <div className="story-content">
                <h3>Emma Rodriguez</h3>
                <p className="university">
                  Non-traditional student returning to education
                </p>
                <p className="testimony">
                  "After 10 years in the workforce, I thought college wasn't for
                  me. CollegeFinder showed me flexible programs that fit my
                  schedule."
                </p>
                <div className="achievements">
                  <span>Online degree completion</span>
                  <span>Promoted within 6 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infographic Section with animations */}
      <section className={`infographic-section ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <div className={`circles ${scaleIn ? "scale-in" : ""}`}>
            <div className="circle">
              <span className="circle-number">10Cr+</span>
              Scholarships Awarded
            </div>
            <div className="circle">
              <span className="circle-number">85+</span>
              Countries Represented
            </div>
            <div className="circle">
              <span className="circle-number">100+</span>
              Industry Collaborations
            </div>
            <div className="circle">
              <span className="circle-number">3Cr+</span>
              Research Funding
            </div>
            <div className="circle">
              <span className="circle-number">150+</span>
              Campus Recruiters
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section with animations */}
      <section className={`next-steps ${fadeIn ? "fade-in" : ""}`}>
        <div className="container">
          <h2
            className={`text-center text-4xl my-5 ${slideUp ? "slide-up" : ""}`}
          >
            Ready to Take the Next Step?
          </h2>
          <div className="steps-grid">
            <div className={`step-card ${slideUp ? "slide-up" : ""}`}>
              <div className="step-number">1</div>
              <h3>Explore Options</h3>
              <p>Browse colleges and programs to see what interests you</p>
              <a href="/college" className="step-button pulse">
                Browse Colleges
              </a>
            </div>
            <div
              className={`step-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="step-number">2</div>
              <h3>Get Personalized Advice</h3>
              <p>Answer a few questions to get recommendations</p>
              <a href="/contact" className="step-button pulse">
                Start Questionnaire
              </a>
            </div>
            <div
              className={`step-card ${slideUp ? "slide-up" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="step-number">3</div>
              <h3>Talk to an Advisor</h3>
              <p>Schedule a free consultation with our experts</p>
              <a href="/contact" className="step-button pulse">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Top with animations */}
      <section className={`footer-top ${fadeIn ? "fade-in" : ""}`}>
        <div className="footer-top-content">
          <h3 className={`${slideUp ? "slide-up" : ""}`} style={{color: "white"}}>
            Begin Your Educational Journey Today
          </h3>
          <div className={`study-options ${scaleIn ? "scale-in" : ""}`}>
            <div className="study-option domestic-option">
              <div className="option-icon">
                <Building2 size={40} />
              </div>
              <h4>Domestic Studies</h4>
              <p>
                Discover the best colleges and universities in India with our
                comprehensive guidance and support throughout your admission
                process.
              </p>
              <a href="/college" className="option-button pulse">
                Explore Indian Colleges
                <ChevronRight size={20} />
              </a>
            </div>
            <div className="study-option abroad-option">
              <div className="option-icon">
                <Globe size={40} />
              </div>
              <h4>Abroad Studies</h4>
              <p>
                Pursue your dreams at top international universities with our
                expert counseling and application assistance throughout your
                admission process.
              </p>
              <a href="/abroad" className="option-button pulse">
                Explore International Options
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
