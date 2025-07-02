import React, { useState, useEffect } from 'react';
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
  Instagram
} from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    districts: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Check if form has been shown before
    const formShown = sessionStorage.getItem('contactFormShown');
    if (!formShown) {
      setIsFormVisible(true);
      sessionStorage.setItem('contactFormShown', 'true');
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        districts: '',
        subject: '',
        message: ''
      });
      
      alert('Thank you for your registration! We will get back to you soon.');
      setIsFormVisible(false);
      
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+916380539537', '_blank');
  };

  const handleCallClick = () => {
    const rawNumber = "6380539537";
    const formattedNumber = rawNumber.replace(/\D/g, '');
    const telLink = `tel:${formattedNumber}`;
    
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = telLink;
    } else {
      alert(`Call us at: +91 ${formattedNumber}`);
    }
  };

  const toggleMobileNav = () => {
    setIsNavActive(!isNavActive);
  };

  const districts = [
    "Ariyalur (அரியலூர்)", "Chengalpattu (செங்கல்பட்டு)", "Chennai (சென்னை)", 
    "Coimbatore (கோயம்புத்தூர்)", "Cuddalore (கடலூர்)", "Dharmapuri (தர்மபுரி)",
    "Dindigul (திண்டுக்கல்)", "Erode (ஈரோடு)", "Kallakurichi (கள்ளக்குறிச்சி)",
    "Kancheepuram (காஞ்சிபுரம்)", "Karur (கரூர்)", "Krishnagiri (கிருஷ்ணகிரி)",
    "Madurai (மதுரை)", "Mayiladuthurai (மயிலாடுதுறை)", "Nagapattinam (நாகப்பட்டினம்)",
    "Namakkal (நாமக்கல்)", "Nilgiris (நீலகிரி)", "Perambalur (பெரம்பலூர்)",
    "Pudukkottai (புதுக்கோட்டை)", "Ramanathapuram (ராமநாதபுரம்)", "Ranipet (ராணிப்பேட்டை)",
    "Salem (சேலம்)", "Sivaganga (சிவகங்கை)", "Tenkasi (தென்காசி)",
    "Thanjavur (தஞ்சாவூர்)", "Theni (தேனி)", "Thoothukudi (தூத்துக்குடி)",
    "Tiruchirappalli (திருச்சிராப்பள்ளி)", "Tirunelveli (திருநெல்வேலி)",
    "Tirupathur (திருப்பத்தூர்)", "Tiruppur (திருப்பூர்)", "Tiruvallur (திருவள்ளூர்)",
    "Tiruvannamalai (திருவண்ணாமலை)", "Tiruvarur (திருவாரூர்)", "Vellore (வேலூர்)",
    "Viluppuram (விழுப்புரம்)", "Virudhunagar (விருதுநகர்)"
  ];

  return (
    <div className="home-container">
      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button onClick={handleWhatsAppClick} className="whatsapp-button">
          <MessageCircle size={24} />
          <span className="whatsapp-text">Contact Us</span>
        </button>
        <button onClick={handleCallClick} className="call-btn">
          <Phone size={20} />
          <span>Call Us</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <h1>College<span>Finder</span></h1>
        </div>
        <div className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <a href="/" className="active">Home</a>
          <a href="/about">About Us</a>
          <a href="/college">College Studies</a>
          <a href="/abroad">Abroad Studies</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Contact Form Modal */}
      {isFormVisible && (
        <section className="contact-form show" id="contact-form">
          <div className="container">
            <div className="form-container">
              <button onClick={handleFormClose} className="close-form-btn">
                <X size={24} />
              </button>
              <h2>Register For College Studies</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="districts">Select a District:</label>
                  <select
                    id="districts"
                    name="districts"
                    value={formData.districts}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select District --</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">College Choosing</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select a College Type --</option>
                    <option value="engineering">Engineering</option>
                    <option value="arts_science">Arts & Science</option>
                    <option value="polytechnic">Polytechnic</option>
                    <option value="medical">Medical</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Address</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect College</h1>
          <h2>Guidelines Provided by College Finder</h2>
          <p>Whether you're in high school, just graduated, or considering a career change, we'll help you find the right path</p>

          <div className="hero-stats">
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
          <a href="/college" className="cta-button">College Finder</a>
        </div>
      </section>

      {/* Education Level Guide */}
      <section className="education-levels">
        <div className="container">
          <h2 className="text-center text-4xl my-5">Find Help Based on Your Education Level</h2>
          <div className="levels-grid">
            <div className="level-card">
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
              <a href="#" className="learn-more">Get Prepared</a>
            </div>
            <div className="level-card">
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
              <a href="#" className="learn-more">Start Applying</a>
            </div>
            <div className="level-card">
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
              <a href="#" className="learn-more">Explore Options</a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="top-recruiters">
        <div className="container">
          <h2>TOP RECRUITERS</h2>
          <p className="subtitle">Leading Companies Hiring Our Graduates Across Diverse Industries</p>

          <div className="recruiters-grid">
            {[
              'Google', 'Microsoft', 'Amazon', 'Palo Alto Networks',
              'ServiceNow', 'Autodesk', 'Bosch', 'BP',
              'Cognizant', 'Deloitte', 'TCS', 'Infosys',
              'JPMorgan', 'Aditya Birla'
            ].map((company, index) => (
              <div key={index} className="recruiter-card">
                <img 
                  src={`https://logo.clearbit.com/${company.toLowerCase().replace(/\s+/g, '')}.com`} 
                  alt={company} 
                  className="recruiter-logo"
                />
                <span className="recruiter-name">{company}</span>
              </div>
            ))}
          </div>

          <a href="#application" className="apply-now-btn">Apply Now</a>
        </div>
      </section>

      {/* Featured Programs */}
      <section id="featured" className="featured">
        <div className="container">
          <h2 className="text-center text-4xl my-5">Popular Career Paths</h2>
          <p className="section-subtitle">Explore these common fields of study and what they can offer</p>

          <div className="featured-grid">
            <div className="featured-card">
              <div className="card-icon">
                <Laptop size={40} />
              </div>
              <h3>Computer Science</h3>
              <p>Learn to create software, apps, and work with new technologies</p>
              <div className="program-simple-details">
                <p><strong>What you'll learn:</strong> Programming, problem-solving, technology development</p>
                <p><strong>Career options:</strong> Software developer, data scientist, IT specialist</p>
              </div>
              <a href="#" className="learn-more">Explore This Path</a>
            </div>
            <div className="featured-card">
              <div className="card-icon">
                <Heart size={40} />
              </div>
              <h3>Medical Sciences</h3>
              <p>Study health, medicine, and helping people through healthcare</p>
              <div className="program-simple-details">
                <p><strong>What you'll learn:</strong> Human biology, patient care, medical procedures</p>
                <p><strong>Career options:</strong> Doctor, nurse, medical researcher</p>
              </div>
              <a href="#" className="learn-more">Explore This Path</a>
            </div>
            <div className="featured-card">
              <div className="card-icon">
                <BarChart3 size={40} />
              </div>
              <h3>Business Administration</h3>
              <p>Learn how organizations work and how to manage businesses</p>
              <div className="program-simple-details">
                <p><strong>What you'll learn:</strong> Management, marketing, finance, entrepreneurship</p>
                <p><strong>Career options:</strong> Business manager, marketing specialist, entrepreneur</p>
              </div>
              <a href="#" className="learn-more">Explore This Path</a>
            </div>
          </div>

          <div className="explanation-box">
            <h3>Not sure what to study?</h3>
            <p>Many students don't know their career path when they start. That's okay! We offer career assessment tests and counseling to help you discover fields that match your interests and skills.</p>
            <a href="#" className="learn-more">Take Our Career Quiz</a>
          </div>
        </div>
      </section>

      {/* College Basics Section */}
      <section className="college-basics">
        <div className="container">
          <h2 className="text-center text-4xl my-5">College Basics Explained</h2>
          <div className="basics-grid">
            <div className="basic-card">
              <h3>What is a Bachelor's Degree?</h3>
              <p>A 4-year program where you study one main subject (your "major") along with other general courses. This is what most students pursue after high school.</p>
            </div>
            <div className="basic-card">
              <h3>What are College Credits?</h3>
              <p>Points you earn by completing courses. You need a certain number to graduate. Most courses are worth 3-4 credits.</p>
            </div>
            <div className="basic-card">
              <h3>What is Financial Aid?</h3>
              <p>Money to help pay for college, including scholarships (free money), grants (need-based free money), and loans (money you pay back).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section className="campus-facilities">
        <div className="container">
          <h2>WHERE POSSIBILITIES ARE INFINITE</h2>
          <p className="subtitle">From tech labs to wellness centers, we have it all</p>

          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
              <div className="facility-content">
                <h3>IMAC LAB</h3>
                <p>State-of-the-art computing lab with iMac workstations for design and development</p>
              </div>
            </div>
            <div className="facility-card">
              <div className="facility-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
              <div className="facility-content">
                <h3>SPACE LAB</h3>
                <p>Advanced research facility for aerospace engineering and astronomy studies</p>
              </div>
            </div>
            <div className="facility-card">
              <div className="facility-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
              <div className="facility-content">
                <h3>CENTRAL INSTRUMENTATION FACILITY</h3>
                <p>Cutting-edge equipment for scientific research across disciplines</p>
              </div>
            </div>
            <div className="facility-card">
              <div className="facility-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
              <div className="facility-content">
                <h3>UNI MALL</h3>
                <p>Campus shopping center with everything students need in one convenient location</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="cta-button">Apply Now</a>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="container">
          <h2>Student Experiences</h2>
          <p className="section-subtitle">Hear from students who were once in your position</p>

          <div className="success-slider">
            <div className="story-card">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" alt="Student 1" />
              <div className="story-content">
                <h3>Sarah Johnson</h3>
                <p className="university">Started at community college, transferred to University</p>
                <p className="testimony">"I wasn't sure I could afford college. CollegeFinder helped me find scholarships and a transfer path that saved me thousands!"</p>
                <div className="achievements">
                  <span>First-generation student</span>
                  <span>Graduated debt-free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="infographic-section">
        <div className="container">
          <div className="circles">
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

      {/* Next Steps Section */}
      <section className="next-steps">
        <div className="container">
          <h2 className="text-center text-4xl my-5">Ready to Take the Next Step?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Explore Options</h3>
              <p>Browse colleges and programs to see what interests you</p>
              <a href="#" className="step-button">Browse Colleges</a>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Get Personalized Advice</h3>
              <p>Answer a few questions to get recommendations</p>
              <a href="#" className="step-button">Start Questionnaire</a>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Talk to an Advisor</h3>
              <p>Schedule a free consultation with our experts</p>
              <a href="#" className="step-button">Book Appointment</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Top */}
      <section className="footer-top">
        <div className="footer-top-content">
          <h3>Begin Your Educational Journey Today</h3>
          <div className="study-options">
            <div className="study-option domestic-option">
              <div className="option-icon">
                <Building2 size={40} />
              </div>
              <h4>Domestic Studies</h4>
              <p>Discover the best colleges and universities in India with our comprehensive guidance and support throughout your admission process.</p>
              <a href="/college" className="option-button">
                Explore Indian Colleges
                <ChevronRight size={20} />
              </a>
            </div>
            <div className="study-option abroad-option">
              <div className="option-icon">
                <Globe size={40} />
              </div>
              <h4>Abroad Studies</h4>
              <p>Pursue your dreams at top international universities with our expert counseling and application assistance throughout your admission process.</p>
              <a href="/abroad" className="option-button">
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