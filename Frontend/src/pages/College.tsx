import React, { useEffect, useState } from "react";
import "../styles/College.css";

// Sample college data
const colleges = [
    {
    name: "University Departments of Anna University, Chennai - CEG Campus, Sardar Patel Road, Guindy, Chennai 600 025",
    district: "Chennai",
    type: "Engineering",
    rating: 4.3,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c9/Vel_Tech_University_logo.png",
    image: "https://images.unsplash.com/photo-1603575359564-e9139d46972e",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University Departments of Anna University, Chennai - ACT Campus, Sardar Patel Road, Guindy, Chennai 600 025",
    district: "Chennai",
    type: "Engineering",
    rating: 3.8,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1616529732165-3774c64f172b",
    popularCourse: "Computer Science Engineering"
  },
  
  {
    name: "University Departments of Anna University, Chennai - MIT Campus, Chrompet, Tambaram Taluk, Kancheepuram District 600 044",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.5,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annamalai University Faculty of Engineering and Technology,Annamalai nagar,Cuddalore 608002",
    district: "Cuddalore",
    type: "Engineering",
    rating: 4.5,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Villupuram, Kakuppam, Villupuram District 605103",
    district: "Villupuram",
    type: "Engineering",
    rating: 4.8,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Tindivanam, Melpakkam, Tindivanam, Villupuram District 604001",
    district: "Villupuram",
    type: "Engineering",
    rating: 4.7,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Arni, Arni to Devikapuram Road, Thatchur, Arni, Thiruvannamalai District 632326",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 4.5,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Kancheepuram, Ponnerikarai Campus, NH4, Chennai-Bangalore Highway, Karaipettai Village & Post, Kancheepuram District 631552",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.8,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Aalim Muhammed Salegh College of Engineering, Muthapudupet, Avadi IAF, Chennai 600055",
    district: "Chennai",
    type: "Engineering",
    rating: 4.2,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jaya Engineering College, Thirunindravur, Chennai 602024",
    district: "Chennai",
    type: "Engineering",
    rating: 3.5,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jaya Institute of Technology, Kanchipadi Post, Thiruvallur-Tiruttani NH  Road, Thiruvallur District 631204",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.3,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Prathyusha Engineering college, Aranvoyalkuppam, Thiruvallur District 602025",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 3.7,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "R M D Engineering College, Kavaraipettai, Gummidipoondi, Thiruvallur District 601206",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.5,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "R M K Engineering College, Kavaraipettai, Gummidipoondi, Thiruvallur District 601206",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 3.6,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "S A Engineering College, Thiruverkadu, Chennai 600077",
    district: "Chennai",
    type: "Engineering",
    rating: 4,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Ram Engineering College, Perumalpattu, Veppampattu (R S), Thiruvallur District 602 024",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.5,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Venkateswara College of Engineering and Technology, Thirupachur, Thiruvallur District 631203",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Autonomous), Avadi-Alamathi Road, Chennai 600 062",
    district: "Chennai",
    type: "Engineering",
    rating: 3.9,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Velammal Engineering College (Autonomous), Ambattur-Redhills Road, Chennai 600066",
    district: "Chennai",
    type: "Engineering",
    rating: 4.7,
    established: 2000,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Venkateswara Institute of Science and Technology, Kozhundalur, Thiruvallur District 631203",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.7,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Avadi-Alamathi Road, Chennai 600 062",
    district: "Chennai",
    type: "Engineering",
    rating: 4.4,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Gojan School of Business and Technology, Alamathi, Chennai 600062",
    district: "Chennai",
    type: "Engineering",
    rating: 3.5,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SAMS College of Engineering and Technology, Panappakkam, Chennai-Tirupathi Road, Uthukkottai Taluk, Thiruvallur District 601102",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.1,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P M R Engineering College, Adayalampattu, Maduravoyal , Vanagaram, Chennai 600095",
    district: "Chennai",
    type: "Engineering",
    rating: 4.8,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "J N N Institute of Engineering, Ushaa Garden, Kannigaipair Village, Uthukottai Taluk, Thiruvallur District 601102",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.4,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Peters College of Engineering and Technology, College Road, Avadi, Chennai 600 054",
    district: "Chennai",
    type: "Engineering",
    rating: 3.9,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "R M K College of Engineering and Technology, Puduvoyal, Gummidipoondi Taluk, Thiruvallur District 601206",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.1,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vel Tech, Avadi-Alamathi Road, Chennai 600062",
    district: "Chennai",
    type: "Engineering",
    rating: 4.8,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annai Veilankannis College of Engineering, Gandhi Road, Nedungundram, Chennai 600048",
    district: "Chennai",
    type: "Engineering",
    rating: 4.3,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annai Mira College of Engineering and Technology, Arcot Road, Arappakkam Village, Walaja Taulk, Vellore District 632 517",
    district: "Vellore",
    type: "Engineering",
    rating: 3.8,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jeppiaar Institute Of Technology, Kunnam Village, Sriperumpudur Taluk, Kancheepuram District 631604",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.2,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "R V S Padmavathy College of Engineering and Technology, Senthil Pakkam Village, Roshanagaram  Post, Madarapakkam Via, Gummidipoondi Taluk, Thiruvallur District 601202",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.8,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Josephs Institute of Technology, Jeppiaar Nagar, Old Mahabalipuram Road (OMR), Chennai 600119",
    district: "Chennai",
    type: "Engineering",
    rating: 4.6,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Jayaram Institute of Engineering and Technology, 51 N, Elavur, 58N, Natham, Gummidipoondi Taluk, Thiruvallur District 601201",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 3.9,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arignar Anna Institute of Science and Technology, Pennalur, Sriperumpudur, Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.6,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "D M I College of Engineering, Palanchoor, Nazrethpet, Chennai 602103",
    district: "Chennai",
    type: "Engineering",
    rating: 4.3,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jeppiaar Maamallan Engineering College, Vadamangalam Post, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.1,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kings Engineering College, Sriperumpudur Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.2,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Pallavan College of Engineering, Thimmasamudram, Kancheepuram District 631502",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.9,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Panimalar Engineering College, Nazarethpet, Poonamallee, Chennai 602103",
    district: "Chennai",
    type: "Engineering",
    rating: 4.5,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rajalakshmi Engineering College (Autonomous), Thandalam, Sriperumpudur Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.8,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rajiv Gandhi College of Engineering, Nemili, Sriperumpudur Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.1,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "S K R Engineering College, Poonamallee, Chennai 600123",
    district: "Chennai",
    type: "Engineering",
    rating: 4.8,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sakthi Mariamman Engineering College, Narayanasamy Nagar, Thandalam, Chennai 602105",
    district: "Chennai",
    type: "Engineering",
    rating: 3.9,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Saveetha Engineering College (Autonomous), Thandalam, Sriperumpudur Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.8,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sree Sastha Institute of Engineering and Technology, Chembarambakkam, Chennai 600123",
    district: "Chennai",
    type: "Engineering",
    rating: 4.8,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Muthukumaran Institute of Technology, Near Mangadu, Chennai 600069",
    district: "Chennai",
    type: "Engineering",
    rating: 4.3,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Venkateswara College of Engineering (Autonomous), Post Bag No.1, Chennai-Bengaluru High Road, Pennalur, Irungattukottai S.O., Sriperumbudur Taluk, Kancheepuram District 602117",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.1,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jaya College of Engineering and Technology, Parivakkam, Poonamallee, Chennai 600056",
    district: "Chennai",
    type: "Engineering",
    rating: 4.5,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P B College of Engineering, Irungkattukottai, Sriperumpudur Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.4,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Loyola Institute of Technology, Mevaloorkuppam, B Village, Palanchoor, Nazarethpet Post, Chennai 600123",
    district: "Chennai",
    type: "Engineering",
    rating: 4.2,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P T Lee Chengalvaraya Naicker College of Engineering and Technology, Oovery, Veliyur Post, Kancheepuram District 631 502",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.8,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Alpha College of Engineering, Dr. Grace George Nagar, Udayavar Koil Street, Thirumazhisai, Poonamalle, Chennai 602107",
    district: "Chennai",
    type: "Engineering",
    rating: 3.8,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Indira Institute of Engineering and Technology, VGR Gardens, Pandur, Thiruvallur District 631203",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.3,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Apollo Engineering College, Mevaloorkuppam, Valarpuram Post, Sriperumpudur, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.9,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Panimalar Institute of Technology, Nazarethpet, Poonamallee, Chennai 602103",
    district: "Chennai",
    type: "Engineering",
    rating: 3.7,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "A R M College of Engineering and Technology, Sattamangalam, Maraimalainagar, Kancheepuram District 603209",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.9,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Adhi College of Engineering and Technology, Pazhayaseevaram, Madura Sankarapuram Village, Kancheepuram District 631605",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.7,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Indira Gandhi College of Engineering and Technology for Women,  Chengalpattu-Kancheepuram High Road, Kancheepuram District 603101",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.7,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Velammal Institute of Technology, Chennai-Kolkatta Highway, Panchetti Village, Ponneri Taluk, Thiruvallur District 601204",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.5,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "GRT Institute of Engineering and Technology, GRT Mahalakshmi Nagar, Chennai-Tirupathi Highway, Tiruttani Taluk, Thiruvallur District 631209",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 3.7,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "T J S Engineering College, Peruvoyal, Near Kavaraipettai, Gummidipoondi Taluk, Thiruvallur District 601206",
    district: "Thiruvallur",
    type: "Engineering",
    rating: 4.3,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Madha Institute of Engineering and Technology, Erandamkattalai Village, Sadhananthapuram, Thandalam Post, Chennai  602101",
    district: "Chennai",
    type: "Engineering",
    rating: 4.6,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mohamed Sathak A J College of Engineering, Old Mahabalipuram Road (OMR), Egattur, Kancheepuram District 603103",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.6,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Anand Institute of Higher Technology, Old Mahabalipuram Road (OMR), Kazhipattur, Kancheepuram District  603103",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Easwari Engineering College (Autonomous), Ramapuram, Chennai 600089",
    district: "Chennai",
    type: "Engineering",
    rating: 4,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jeppiar Engineering College, Old Mahabalipuram Road (OMR), Chennai 600119",
    district: "Chennai",
    type: "Engineering",
    rating: 4.9,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jerusalem College of Engineering (Autonomous), Narayanapuram, Pallikaranai, Chennai 600 100",
    district: "Salem",
    type: "Engineering",
    rating: 4.1,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Meenakshi Sundararajan Engineering College, Kodambakkam, Chennai 600024",
    district: "Chennai",
    type: "Engineering",
    rating: 3.5,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Misrimal Navajee Munoth Jain Engineering College, Rajiv Gandhi Salai (OMR), Thorappakkam, Chennai 600096",
    district: "Chennai",
    type: "Engineering",
    rating: 3.6,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K C G College of Technology, Karappakkam, Chennai 600096",
    district: "Chennai",
    type: "Engineering",
    rating: 4.4,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SMK  Fomra Institute of Technology,Fomra Nagar, OMR,(IT Express Highway),Kelambakkam,Chennai- 603103",
    district: "Chennai",
    type: "Engineering",
    rating: 4.9,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Sivasubramaniya Nadar College of Engineering (Autonomous), Kalavakkam, Old Mahabalipuram Road (OMR), Kancheepuram District 603110",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.6,
    established: 2001,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Agni College of Technology, Old Mahabalipuram Road (OMR), Thalambur Village, Kancheepuram District 603103",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.4,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Josephâ\\[Euro](TM)s College of Engineering, Old Mahabalipuram Road (OMR), Chennai 600 119",
    district: "Chennai",
    type: "Engineering",
    rating: 3.6,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Thangavelu Engineering College, Karappakkam, Chennai 600097",
    district: "Chennai",
    type: "Engineering",
    rating: 3.9,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jeppiaar SRR Engineering College, Old Mahabalipuram Road, Kancheepuram District 603103",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.5,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Central Institute of Plastics Engineering and Technology (CIPET), Guindy, Chennai 600032",
    district: "Chennai",
    type: "Engineering",
    rating: 3.6,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhanalakshmi Srinivasan College of Engineering and Technology, East Coast Road, Poonjeri, Chennai 603104",
    district: "Chennai",
    type: "Engineering",
    rating: 4.8,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Sai Ram Institute of Technology, West Tambaram, Chennai 600044",
    district: "Chennai",
    type: "Engineering",
    rating: 4,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Joseph College of Engineering, Trinity Campus, Nemili, Sriperumpudur Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.7,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vi Institute of Technology, Sirunkundram Village & Post, Chengalput Taluk, Kancheepuram District 603108",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.2,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "ARS College of Engineering, Maraimalai Nagar Post, Kancheepuram District 603209",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.6,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Chennai Institute of Technology, Puduper Village, Nandambakkam Post, Kundrathur, Chennai 600069",
    district: "Chennai",
    type: "Engineering",
    rating: 4,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Adhiparasakthi Engineering College, Melmaruvathur, Kancheepuram District 603319",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annai Terasa College of Engineering, Thirunavalur, Villupuram District 607204",
    district: "Villupuram",
    type: "Engineering",
    rating: 4,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhanalakshmi College of  Engineering, Manimangalam, Chennai 601301",
    district: "Chennai",
    type: "Engineering",
    rating: 3.5,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dr. Pauls Engineering College, Pauls Nagar, Pulichapallam Village, Vanur Taluk, Villupuram District 605109",
    district: "Villupuram",
    type: "Engineering",
    rating: 4.7,
    established: 2001,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "G K M College of  Engineering and Technology, Alappakkam-Mappedu Road, Chennai 600063",
    district: "Chennai",
    type: "Engineering",
    rating: 3.9,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "I F E T College of Engineering (Autonomous), Gangarampalayam, Villupuram District 605108",
    district: "Villupuram",
    type: "Engineering",
    rating: 4.4,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Karpagavinayaga College of Engineering and Technology, Palayanoor Post, Maduranthagam Taluk, Kancheepuram District 603308",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.8,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Madha Engineering College, Kundrathur, Chennai 600069",
    district: "Chennai",
    type: "Engineering",
    rating: 4.4,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mailam Engineering College, Mailam, Villupuram District 604304",
    district: "Villupuram",
    type: "Engineering",
    rating: 4.3,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Venkateswaraa College Of Technology, BHB Nagar, Vadakkal Village, Pondur Post, Sriperumbudur Taluk, Kancheepuram District 602105",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.6,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Prince Shri Venkateshwara  Padmavathy Enginering College, Ponmar, Chennai 600048",
    district: "Chennai",
    type: "Engineering",
    rating: 3.9,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "T S M Jain College of Technology, Melur Village, Kallakurichi, Villupuram District 606201",
    district: "Villupuram",
    type: "Engineering",
    rating: 3.8,
    established: 2000,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jaya Sakthi Engineering College, Thirunindravur, Chennai 602024",
    district: "Chennai",
    type: "Engineering",
    rating: 4,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Shri Andal Alagar College of Engineering, Mamandur, Kancheepuram District 603111",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Sairam Enginering College, West Tambaram, Chennai 600044",
    district: "Chennai",
    type: "Engineering",
    rating: 4.5,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Tagore Engineering College, Rathnamangalam, Vandalur Post, Chennai 600048",
    district: "Chennai",
    type: "Engineering",
    rating: 4.2,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "V R S College of Engineering and Technology, Arasur, Villupuram District 607107",
    district: "Villupuram",
    type: "Engineering",
    rating: 4.8,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SRM Valliammai Engineering College (Autonomous), Kattankulathur, Chennai 603203",
    district: "Chennai",
    type: "Engineering",
    rating: 4.1,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhaanish Ahmed College of Engineering, Padappai, Chennai 601301",
    district: "Chennai",
    type: "Engineering",
    rating: 4.3,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Ramanujar Engineering College, Vandalur, Kolappakkam, Chennai 600048",
    district: "Chennai",
    type: "Engineering",
    rating: 4.6,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Krishna Engineering College, Panappakkam, Padappai, Chennai 601301",
    district: "Chennai",
    type: "Engineering",
    rating: 3.6,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "E S Engineering College, Chennai Trunk Road, Ayyankoilpattu, Villupuram District 605602",
    district: "Villupuram",
    type: "Engineering",
    rating: 3.8,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Maha Bharathi Engineering College, A Vasudevanur, Chinnasalem, Kallakurichi Taluk, Villupuram District 606201",
    district: "Villupuram",
    type: "Engineering",
    rating: 4,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "New Prince Shri Bhavani College of Engineering and Technology, Vengaivasal Main Road, Gowriwakkam, Chennai 600073",
    district: "Chennai",
    type: "Engineering",
    rating: 4,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rajalakshmi Institute of Technology, Irulapalayam, Kuthampakkam Post, Kancheepuram District 602107",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.2,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Surya Group of Institutions, GST Road, Vikravandi Village, Villupuram District 605652",
    district: "Villupuram",
    type: "Engineering",
    rating: 4,
    established: 1998,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Balaji Institute of Engineering and Technology, Thandalam Village, Thiruporur, Kancheepuram District 603110",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 4.4,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "A R Engineering College, Vadakuchipalayam, Kappiyampuliyur Post, Villupuram District 605601",
    district: "Villupuram",
    type: "Engineering",
    rating: 3.9,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rrase College of Engineering, Padappai, Chennai 601301",
    district: "Chennai",
    type: "Engineering",
    rating: 3.7,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sree Krishna College of Engineering, Anaicut Post, Unnai Village, Vellore District 632101",
    district: "Vellore",
    type: "Engineering",
    rating: 4.4,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "S R I College of Engineering and Technology, Birudur, Vandavasi Taluk, Thiruvannamalai District 604408",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 4.8,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "A K T Memorial College of Engineering and Technology, Neelamangalam Village, Kallakurichi Post & Taluk, Villupuram District 606202",
    district: "Villupuram",
    type: "Engineering",
    rating: 3.6,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Prince Dr. K Vasudevan College of Engineering and Technology, Medavakkam-Mambakkam Road, Ponmar, Chennai 600048",
    district: "Chennai",
    type: "Engineering",
    rating: 3.6,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Chendu College of Engineering & Technology, Zamin Endathur Village, Madurantakam Taluk, Kancheepuram District 603331",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.7,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Rangapoopathi College of Engineering, Alampoondi Village, Gingee, Villupuram District 604151",
    district: "Villupuram",
    type: "Engineering",
    rating: 4,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jawahar Engineering College, Kaveri Rangan Nagar, Saligramam, Chennai 600093",
    district: "Chennai",
    type: "Engineering",
    rating: 4.3,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Saraswathy College of Engineering and Technology, NH-45, Main Road, Olakkur, Tindivanam Taluk, Villupuram District 604307",
    district: "Villupuram",
    type: "Engineering",
    rating: 3.8,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Loyola-ICAM College of Engineering and Technology, Loyola College Campus, Nungambakkam, Chennai 600034",
    district: "Chennai",
    type: "Engineering",
    rating: 4.3,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "PERI Institute of Technology, Mannivakkam, West Tambaram, Chennai 600048",
    district: "Chennai",
    type: "Engineering",
    rating: 4.1,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Adhiparasakthi College of Engineering, Kalavai, Vellore District 632506",
    district: "Vellore",
    type: "Engineering",
    rating: 4.5,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arulmigu  Meenakshi Amman College of Engineering, Vadamavandal,Thiruvannamalai District 604410",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 4.2,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arunai Engineering College, Mathur, Thiruvannamalai District 606603",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 3.9,
    established: 1998,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "C Abdul Hakeem College of Engineering and Technology, Melvisharam, Vellore District 632509",
    district: "Vellore",
    type: "Engineering",
    rating: 3.9,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "G G R College of Engineering, Pillayarkuppam, Perumugai Post, Vellore District 632009",
    district: "Vellore",
    type: "Engineering",
    rating: 4.2,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ganadipathy Tulsiâ\\[Euro](TM)s Jain Engineering College, Kaniyambadi, Vellore District 632102",
    district: "Vellore",
    type: "Engineering",
    rating: 4.7,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arunai College of Engineering, Mathur, Thiruvannamalai District 606603",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 4.4,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Meenakshi College of Engineering, Vembuliamman Koil Street, K K Nagar (West), Chennai 600078",
    district: "Chennai",
    type: "Engineering",
    rating: 4.7,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Priyadarshini Engineering College, Vaniyambadi Post, Vellore District 635751",
    district: "Vellore",
    type: "Engineering",
    rating: 4.3,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "S K P Engineering College, Thiruvannamalai District 606611",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 3.5,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Balaji Chockalingam Engineering College, Arni, Thiruvannamalai District 632317",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 4.5,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Nandhanam College of Engineering and Technology, Tiruppattur, Vellore District 635601",
    district: "Vellore",
    type: "Engineering",
    rating: 4,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Saraswathi Velu College of Engineering, Melvenkatapuram Village, Sholingur, Vellore District 631102",
    district: "Vellore",
    type: "Engineering",
    rating: 4,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Thanthai Periyar Government Institute of Technology , Bagayam, Vellore District 632002",
    district: "Vellore",
    type: "Engineering",
    rating: 4.7,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Thirumalai Engineering College, Kilambi, Kancheepuram District 631551",
    district: "Kancheepuram",
    type: "Engineering",
    rating: 3.8,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Thiruvalluvar College of Engineering and Technology, Vandavasi, Thiruvannamalai District 604505",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 4.8,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Bharathidasan Engineering College, Nattrampalli Post, Vellore District 635854",
    district: "Vellore",
    type: "Engineering",
    rating: 4.7,
    established: 2000,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kingston Engineering College, Chithoor Main Road, Christianpet Village, Katpadi Taluk,  Vellore District 632059",
    district: "Vellore",
    type: "Engineering",
    rating: 4.1,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Sapthagiri Institute of Technology, Ocheri, Arakonam Taluk, Vellore District 632531",
    district: "Vellore",
    type: "Engineering",
    rating: 3.7,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Global Institute of Engineering and Technology, Bangalore-Chennai Highway, Melvisharam, Walajah Taluk, Vellore District 632506",
    district: "Vellore",
    type: "Engineering",
    rating: 3.5,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annamalaiar College of Engineering, Modaiyur Village, Polur Taluk, Thiruvannamalai District 606902",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 3.9,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Podhigai College of Engineering and Technology, Vinayakapuram, Adiyur Post, Tirupattur Taluk, Vellore District 635601",
    district: "Vellore",
    type: "Engineering",
    rating: 4.1,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Krishna College of Engineering, Tiruttani High Road, Arakkonam, Vellore District 631003",
    district: "Vellore",
    type: "Engineering",
    rating: 4.7,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Oxford College of Engineering, Venmani Village, Karaipoondi Post, Polur Taluk, Thiruvannamalai District 606803",
    district: "Thiruvannamalai",
    type: "Engineering",
    rating: 4.1,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Idhaya Engineering College for Women, Chinnasalem, Villupuram District 606201",
    district: "Villupuram",
    type: "Engineering",
    rating: 4,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Technology (Autonomous), Thadagam Road, Coimbatore District 641013",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.8,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.3,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Coimbatore Institute of Technology (Autonomous), Civil Aerodrome Post, Coimbatore District 641014",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.5,
    established: 1998,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Anna University Regional Campus - Coimbatore, Maruthamalai Main Road, Navavoor Bharathiyar University Post, Somayampalayam, Coimbatore District 641046",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.9,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Shanmugha College of Engineering and Technology, Morur Bit II Village, Salem District 637302",
    district: "Salem",
    type: "Engineering",
    rating: 3.6,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Muthayammal College of Engineering, Kakkaveri Post, Namakkal District 637408",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.7,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "N S N College of Engineering and Technology, Karur-Madurai NH7, Manalmedu, Karur District 639003",
    district: "Madurai",
    type: "Engineering",
    rating: 4.1,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K S R Institute for Engineering and Technology, Thokkavadi, Namakkal District 637215",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.8,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rathinam Technical Campus, Pollachi Road, Eachanari, Coimbatore District 641021",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.1,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Aishwarya College of Engineering and Technology, Errattaikaradu Paruvachi Post, Anthiyur (Via), Bhavani Taluk, Erode District 638312",
    district: "Erode",
    type: "Engineering",
    rating: 3.7,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Asian College of Engineering and Technology, Asian College Road, Kondayampalayam, Near Saravanampatti, Coimbatore District 641110",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ganesh College of Engineering, Attur Main Road, Mettupatti, Salem District 636111",
    district: "Salem",
    type: "Engineering",
    rating: 4.2,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Ranganathar Institute of Engineering and Technology, Thudialur-Kovilpalay Road, Coimbatore District 641110",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.5,
    established: 1998,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Indian Institute of Handloom Technology, Foulke's Compound, Thillai Nagar, Salem District 636001",
    district: "Salem",
    type: "Engineering",
    rating: 4.4,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhirajlal Gandhi College of Technology, Sikkanampatty, (Opp. to Airport), Omalur Taluk, Salem District 636309",
    district: "Salem",
    type: "Engineering",
    rating: 4.2,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Shree Sathyam College of Engineering and Technology, NH-47, Manjakkalpatti, Kuppanur Post, Sankari Taluk, Salem District 637301",
    district: "Salem",
    type: "Engineering",
    rating: 3.9,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "AVS College of Technology, Attur Main Road, Near AVS College of Arts & Science, Chinnagoundapuram, Salem District 636106",
    district: "Salem",
    type: "Engineering",
    rating: 3.8,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhaanish Ahmed Institute of Technology, Pichanur Post, (Near K G Chavadi), Coimbatore District 641105",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.4,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jairupaa College of Engineering, Thottiapalayam, Kathankanni Post, Kangayam, Tiruppur District 641 604",
    district: "Tiruppur",
    type: "Engineering",
    rating: 4.7,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Pollachi Institute of Engineering and Technology, Main Road, Poosaripatti, Pollachi Taluk, Coimbatore District 642205",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.3,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Cheran College of Engineering, Karur-Coimbatore Main Road, NH-67, K.Paramathi Post, Aravakurichi Taluk, Karur District 639111",
    district: "Karur",
    type: "Engineering",
    rating: 4.9,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arulmurugan College of Engineering, Karvazhi Road, Thennilai Post, Karur District 639206",
    district: "Karur",
    type: "Engineering",
    rating: 4.2,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "V S B College of Engineering Technical Campus, Ealur Pirivu, Solavampalayam Post, Coimbatore District 642109",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.6,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SCAD Institute of Technology, Anupatti, Pollachi-Palladam Highways, Palladam, Tiruppur District 641664",
    district: "Tiruppur",
    type: "Engineering",
    rating: 4.3,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Suguna College of Engineering, Kalappatti Road, Civil Aerodrome Post, Coimbatore District 641014",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arjun College of Technology, Chettiyakkapalayam, Kinathukadavu, Coimbatore District 642120",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.6,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Engineering, Chettikkarai Post, Dharmapuri District 635 704",
    district: "Dharmapuri",
    type: "Engineering",
    rating: 3.6,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "PSG Institute of Technology and Applied Research, Avinashi Road, Neelambur, Coimbatore 641062",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.7,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Adhiyamaan  College of Engineering (Autonomous), Hosur, Krishnagiri District 635109",
    district: "Krishnagiri",
    type: "Engineering",
    rating: 4.6,
    established: 1998,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annai Mathammal Sheela Enginereing College, Erumapatty Post, Namakkal District 637013",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.8,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Engineering (Autonomous), Bargur, Krishnagiri District 635104",
    district: "Krishnagiri",
    type: "Engineering",
    rating: 3.6,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jayam College of Engineering and Technology, Nallanur Post, Dharmapuri District 636813",
    district: "Dharmapuri",
    type: "Engineering",
    rating: 4,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K S Rangasamy College of Technology (Autonomous), Tiruchengode, Namakkal District 637215",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.6,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M Kumarasamy College of Engineering (Autonomous), Thalavapalayam, Karur District 639113",
    district: "Karur",
    type: "Engineering",
    rating: 3.8,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mahendra Engineering College (Autonomous), Mahendhirapuri, Mallasamudram, Namakkal District 637503",
    district: "Namakkal",
    type: "Engineering",
    rating: 4,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Muthayammal Engineering College (Autonomous), Rasipuram, Namakkal District 637408",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.8,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Paavai Engineering College (Autonomous), NH-7, Pachal Post, Namakkal District 637018",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.6,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P G P College of Engineering and Technology, Paramathi Post, Namakkal District 637207",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.8,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K S R College of Engineering (Autonomous), Tiruchengode, Namakkal District 637215",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.8,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "S S M College of Engineering, Komarapalayam, Namakkal District 638183",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.6,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Engineering (Autonomous), Karuppur, Salem District 636011",
    district: "Salem",
    type: "Engineering",
    rating: 3.7,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sengunthar Engineering College (Autonomous), Tiruchengode, Namakkal District 637205",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.7,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sona College of Technology (Autonomous), Suramangalam Post, Salem District 636005",
    district: "Salem",
    type: "Engineering",
    rating: 3.9,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vivekanandha College of Engineering for Women (Autonomous), Sathinaickenpalayam, Elayampalayam Village, Kumaramangalam, Namakkal District 637205",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.6,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Er. Perumal Manimekalai College of Engineering, Near Koneripalli, Hosur, Krishnagiri District 635117",
    district: "Krishnagiri",
    type: "Engineering",
    rating: 4.1,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "V S B Engineering College, Kovai Road, Karur District 639111",
    district: "Karur",
    type: "Engineering",
    rating: 3.8,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mahendra College of Engineering, Attur Road, Minnampalli, Valapady, Salem District 636106",
    district: "Salem",
    type: "Engineering",
    rating: 4.3,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Gnanamani College of Technology, Pachal Post, Namakkal District 637018",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.6,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "The Kavery Engineering College, M Kalipatti Post, Mecheri, Salem District 634453",
    district: "Salem",
    type: "Engineering",
    rating: 4,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Selvam College of Technology, Pappanaickenpatti Post, Namakkal District 637003",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.2,
    established: 2000,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Paavai College of Engineering, NH-7, Pachal Post, Namakkal District 637018",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.7,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sengunthar College of Engineering, Tiruchengode, Namakkal District 637205",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.9,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Chettinad College of Engineering and Technology, NH-67, Tiruchirappalli Main Road, Puliyur C F, Karur District 639114",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.6,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mahendra Institute of Technology, Mahendhirapuri, Mallasamudram,  Namakkal District 637503",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.5,
    established: 2001,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vidyaa Vikas College of Engineering and Technology, Varahoorampatti, Tiruchengode, Namakkal District 637 214",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.2,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Excel Engineering College, Pallakkapalayam, Sankari West Post, Namakkal District 637303",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.6,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "A V S Engineering College, Military Road, Ammapet, Salem District 636003",
    district: "Salem",
    type: "Engineering",
    rating: 4.7,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mahendra Engineering College for Women, Kumaramangalam, Namakkal District 637205",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.6,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Narasus Sarathy Institute of Technology, Poosaripatty Village, Omalur Taluk, Salem District 636305",
    district: "Salem",
    type: "Engineering",
    rating: 4,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jayalakshmi Institute of Technology, Thoppur, Dharmapuri District 635352",
    district: "Dharmapuri",
    type: "Engineering",
    rating: 4.6,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Varuvan Vadivelan Institute of Technology, Nallanahalli, Dharmapuri District 636701",
    district: "Dharmapuri",
    type: "Engineering",
    rating: 4.2,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P S V College of Engineeering and Technology, Mittapalli, Balinayanapalli Post, Elathagiri, Krishnagiri District 635108",
    district: "Krishnagiri",
    type: "Engineering",
    rating: 4,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Bharathiyar Institute of Engineering for Women, Deviayakurichi, Attur Taluk, Salem District 636112",
    district: "Salem",
    type: "Engineering",
    rating: 4.7,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Tagore Institute of Engineering and Technology, Deviyakurichi, Attur Taluk, Salem District 636112",
    district: "Salem",
    type: "Engineering",
    rating: 4.8,
    established: 1998,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "J K K Nataraja College of Engineering and Technology, Komarapalayam Amani, Thattankuttai Panchayat, Namakkal District 638183",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.9,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annaporna Engineering College, Sankari Main Road, NH-47, Periaseeragapadi, Salem District 636308",
    district: "Salem",
    type: "Engineering",
    rating: 4.1,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Karur College of Engineering, Sanjay Nagar, Karur-Erode Main Road, Athur Post, Karur District 639002",
    district: "Karur",
    type: "Engineering",
    rating: 4.1,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Christ the King Engineering College, Cecilia Gardens, Chikkarampalayam Village, Coimbatore District 641104",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.6,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jai Shriram Engineering College, Dharapuram Road, Avinashi Palayam, Tiruppur District 638660",
    district: "Tiruppur",
    type: "Engineering",
    rating: 4,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Al-Ameen Engineering College, Karundevan Palayam, Nanjai Uthukuli Post, Erode District 638104",
    district: "Erode",
    type: "Engineering",
    rating: 4,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Knowledge Institute of Technology, KIOT Campus, Kakapalayam Post, Salem District 637504",
    district: "Salem",
    type: "Engineering",
    rating: 4.6,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Builders Engineering College,Erode Rode,Nathakadiyur, Kangeyam Taluk, Tiruppur District 638108",
    district: "Tiruppur",
    type: "Engineering",
    rating: 3.8,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Paavai College of Technology, NH-7, Pachal Post, Namakkal District 637018",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.7,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "V S A Group of Institutions, NH-47, Uthamasola Puram Post, Salem District 636010",
    district: "Salem",
    type: "Engineering",
    rating: 4.3,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Salem College of Engineering and Technology, Salem-Attur Main Road, NH-68, Mettupatty Perumapalayam, Salem District 636111",
    district: "Salem",
    type: "Engineering",
    rating: 3.5,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Gnanamani College of Engineering, NH-7, A K Samuthiram, Pachal Post, Namakkal District 637018",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.6,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vivekanandha College of Technology for Women, Sathinaickenpalayam, Elayampalayam Village, Kumaramangalam, Namakkal District 637205",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.1,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Excel College of Engineering and Technology, Pallakapalayam, Sankari West Post, Namakkal District 637303",
    district: "Namakkal",
    type: "Engineering",
    rating: 4.5,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mahendra Institute of Engineering and Technology, Mahendrapuri, Mallasamudram, Namakkal District 637503",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.7,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "The Kavery College of Engineering, M Kalipatti Post, Mecheri, Salem District 636453",
    district: "Salem",
    type: "Engineering",
    rating: 4.7,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sree Sakthi Engineering College, Bettathapuram, Bilichi Village, Karamadai, Coimbatore District 641104",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.6,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ambal Professional Group of Institutions, Coimbatore to Tiruchirappalli Road, K N Puram Post, Palladam Taluk, Tiruppur District 641662",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 3.7,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Shreenivasa Engineering College, B Pallipatti, Bommidi, Pappireddipatti Taluk, Dharmapuri District 635301",
    district: "Dharmapuri",
    type: "Engineering",
    rating: 4.4,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Bannari Amman Institute of Technology (Autonomous), Sathyamanagalam, Erode District  638401",
    district: "Erode",
    type: "Engineering",
    rating: 4,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Coimbatore Institute of Engineering and Technolgoy (Autonomous), Narasipuram Post, Coimbatore District 641109",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "C S I College of Engineering, Ketti, The Nilgiris 643215",
    district: "The Nilgiris",
    type: "Engineering",
    rating: 4.7,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dr. Mahalingam College of  Engineering and Technology (Autonomous), Mackinaickenpatti Post, Pollachi Taluk, Coimbatore District 642003",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.3,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Erode Sengunthar Engineering College (Autonomous), Thudupathi Post, Erode District 638057",
    district: "Erode",
    type: "Engineering",
    rating: 4.8,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Hindusthan College of Engineering and Technology (Autonomous), Othakkalmandapam Post, Coimbatore District 641032",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.8,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Institute of Road and Transport Technology, Vasavi College Post, Erode District 638316",
    district: "Erode",
    type: "Engineering",
    rating: 3.6,
    established: 2001,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Karpagam College of Engineering (Autonomous), Othakkalmandapam, Coimbatore District 641032",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.9,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kongu Engineering College (Autonomous), Perundurai, Erode District 638052",
    district: "Erode",
    type: "Engineering",
    rating: 4.5,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kumaraguru College of Technology (Autonomous), Chinnavedampatti Post, Coimbatore District 641006",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.4,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M P Nachimuthu M Jagannathan Engineering College, Chennimalai, Erode District 638112",
    district: "Erode",
    type: "Engineering",
    rating: 3.9,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Maharaja Engineering College, Avinashi, Tiruppur District 641654",
    district: "Tiruppur",
    type: "Engineering",
    rating: 4.1,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Nandha Engineering College (Autonomous), Pitchandampalayam Post, Erode District 638052",
    district: "Erode",
    type: "Engineering",
    rating: 4.5,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Park College of Engineering and Technology, Kaniyur, Coimbatore District 641659",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.9,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sasurie College of Engineering, Vijayamangalam, Tiruppur District 638056",
    district: "Tiruppur",
    type: "Engineering",
    rating: 4.7,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Krishna College of Enginering and Technology (Autonomous), Kuniamuthur, Coimbatore District 641008",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.7,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Ramakrishna Engineering College (Autonomous), Vattamalaipalayam, Coimbatore District 641022",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.7,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Tamilnadu College of Engineering, Karumathampatti Post, Coimbatore District 641659",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Krishna College of Technology (Autonomous), Kovaipudur Post, Coimbatore District 641042",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Velalar College of Engineering and Technology (Autonomous), Thindal Post, Erode District 638009",
    district: "Erode",
    type: "Engineering",
    rating: 4.9,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Ramakrishna Institute of Technology (Autonomous), Pachapalayam, Coimbatore District 641010",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.6,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SNS College of Technology (Autonomous), Kalappatti Post, Coimbatore District 641035",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Shakthi Institute of Engineering and Technology (Autonomous), L&T Bye-Pass, Venkitapuram Post, Coimbatore District 641062",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.7,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Nehru Institute of Engineering and Technology, Thirumalayampalayam Post, Coimbatore District 641105",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.9,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "R V S College of Engineering and Technology, Kannampalayam, Sulur, Coimbatore District 641402",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.1,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "INFO Institute of Engineering, Sarkar Samakulam, Coimbatore District 641107",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.6,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Angel College of Engineering and Technology, P.K.Palayam, Ugayanur Village, Tiruppur District 641 665",
    district: "Tiruppur",
    type: "Engineering",
    rating: 4.8,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SNS College of Engineering, Sathy Main Road, Kurumbapalayam Post, Coimbatore District 641107",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.9,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Karpagam Institute of Technology, Seerapalayam Village, L&T By pass Road, Coimbatore District 641021",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.7,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dr. N G P Institute of Technology, Kalapatti Road, Coimbatore District 641035",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.6,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Sai Ranganathan Engineering College, Zahirnaickenpalayam Village, Viraliyur Post, Thondamuthur Via, Coimbatore District 641109",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Eshwar College of Engineering (Autonomous), Kondampatti Post, Vadasithur (Via), Kinathukadavu, Coimbatore District 641202",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.9,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Hindustan Institute of Technology, Othakkalmandapam, Coimbatore District 641032",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.4,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P A College of Engineering and Technology (Autonomous), Palladam Road, Pollachi, Coimbatore District 642002",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.4,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhanalakshmi Srinivasan College of Engineering, NH47, Palakkad Main Road, Navakkarai Post, Near Nandhi Temple, Coimbatore District 641105",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.8,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Adithya Institute of Technology, Kurumbapalayam Village, Coimbatore District 641107",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.2,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kathir College of Engineering, Neelambur, Avinashi Road, Coimbatore District 641062",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.6,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Shree Venkateshwara Hi-Tech Engineering College, Othakuthirai, K Mettupalayam Post, Gobichettipalayam, Erode District 638455",
    district: "Erode",
    type: "Engineering",
    rating: 3.6,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Surya Engineering College, Mettukadai, Kathirampatti Post, Erode District 638107",
    district: "Erode",
    type: "Engineering",
    rating: 4.6,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "EASA College of Engineering and Technology, NH-47, Coimbatore-Palakkad Main Road, Navakarai Post, Coimbatore District 641105",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.8,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "KIT-Kalaignar Karunanidhi Institute of Technology (Autonomous), Kannampalayam, Coimbatore District 641402",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.2,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "KGISL Institute of Technology, KGISL Campus, Thudiyalur Road, Saravanampatti, Coimbatore District 641035",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.5,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Nandha College of Technology, Pitchandampalayam Post, Erode District 638052",
    district: "Erode",
    type: "Engineering",
    rating: 4.3,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P P G Institute of Technology, Vilankurichi Village, Coimbatore District 641035",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.4,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Nehru Institute of Technology, Thirumalayampalayam Post, Coimbatore District 641105",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.8,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "J K K Muniraja College of Technology, T N Palayam, Gobi Taluk, Erode District 638506",
    district: "Erode",
    type: "Engineering",
    rating: 4.6,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "United Institute of Technology, Gadalore Village, Perianaickenpalayam, Coimbatore District 641020",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jansons Institute of Technology, Karumathampatty, Somaur, Coimbatore District 641659",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.1,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Akshaya College of Engineering and Technology, Kinathukadavu, Coimbatore District 642109",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.9,
    established: 2001,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K P R Institute of Engineering and Technology, Kollupalayam Village, Arasur Panchayat, Coimbatore District 641407",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.6,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sriguru Institute of Technology, Varathaiyanagar Palayam, Kondayampalayam Post, Coimbatore District 641110",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.5,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SRG Engineering College, Aniyapuram Post, Namakkal District 637017",
    district: "Namakkal",
    type: "Engineering",
    rating: 3.8,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Park College of Technology, Prema Ravi Nagar, Karumathampatty, Coimbatore District 641059",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.9,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "J C T College of Engineering and Technology, Pichanur, Coimbatore District 641105",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.7,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "C M S College of Engineering and Technology, Appachigoundenpathy, Kumittipatti, Coimbatore District 641105",
    district: "Coimbatore",
    type: "Engineering",
    rating: 3.7,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "R V S Technical Campus-Coimbatore, Kumaran Kottam Campus,  Kannampalayam, Sulur, Coimbatore District 641 402",
    district: "Coimbatore",
    type: "Engineering",
    rating: 4.5,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering,BIT Campus,Anna university ,Tiruchirappalli District 620024",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.7,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Ariyalur, Kathankudikadu Village, Thelur Post, Ariyalur District 621704",
    district: "Ariyalur",
    type: "Engineering",
    rating: 3.7,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Thirukkuvalai, Nagapattinam District 610204",
    district: "Nagapattinam",
    type: "Engineering",
    rating: 4.7,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Panruti, Chennai-Kumbakonam Highway, Panikkankuppam, Panruti, Cuddalore District 607106",
    district: "Cuddalore",
    type: "Engineering",
    rating: 4.2,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Pattukkottai, ECR Road, Rajamadam, Pattukkottai Taluk, Thanjavur District 614701",
    district: "Thanjavur",
    type: "Engineering",
    rating: 4.6,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Krishnaswamy Collge of Engineering and Technology, S Kumarapuram, Cuddalore District 607109",
    district: "Cuddalore",
    type: "Engineering",
    rating: 4.7,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "C K College of Engineering and Technology, Chellangkuppam, Cuddalore District 607003",
    district: "Cuddalore",
    type: "Engineering",
    rating: 4.5,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Ramakrishna College of Engineering, Sri Saradha Nagar, NH-45, Perambalur District  621113",
    district: "Perambalur",
    type: "Engineering",
    rating: 4.1,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K S K College of Engineering and Technology, Thanjavur Main Road, Darasuram, Kumbakonam, Thanjavur District 612702",
    district: "Thanjavur",
    type: "Engineering",
    rating: 3.7,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhanalakshmi Srinivasan College of Engineering, Thuraiyur Road, Perambalur District 621212",
    district: "Perambalur",
    type: "Engineering",
    rating: 3.8,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhanalakshmi Srinivasan Institute of Research and Technology, NH-45, Tiruchirappalliâ\\[Euro]\\[OpenCurlyDoubleQuote]Chennai Main Road, Siruvachur, Perambalur District 621113",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.7,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhanalakshmi Srinivasan Institute of Technology,  Samayapuram, Chennai-Tiruchirappalli Main Road, Tiruchirappalli District 621112",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.1,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sureya College of Engineering, Konalai, Tiruchirappalli District 621132",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.5,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arifa Institute of Techonology, Esanoor, Keelaiyur Post, Thirukkuvalai Taluk, Nagapattinam District 611103",
    district: "Nagapattinam",
    type: "Engineering",
    rating: 4,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ariyalur Engineering College, NH-227, Tiruchirappalli-Chithambaram NH, Karuppur-Senapathy Post, Ariyalur District 621707",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.1,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Engineering, Gandarvakottai Road, Sengipatti, Thanjavur District 613402",
    district: "Thanjavur",
    type: "Engineering",
    rating: 4.6,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Engineering, Srirangam, Sethurappatti,  Tiruchirappalli District 620 012",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.6,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Nelliandavar Institute of Technology, Nerunjikorai Village, Pudhupalayam, Ariyalur Taluk, Ariyalur District 621704",
    district: "Ariyalur",
    type: "Engineering",
    rating: 3.7,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K Ramakrishnan College of Technology, Kariyamanickam Road, Samayapuram, Manachanallur Taluk, Tiruchirappalli District 621112",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 3.7,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sir Issac Newton College of Engineering and Technology, Anthanapeetai Post, Papakoil, Nagapattinam District 611102",
    district: "Nagapattinam",
    type: "Engineering",
    rating: 3.6,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Star Lion College of Engineering & Technology, Manankorai Main Road, Manankorai Village, Thanjavur District 614206",
    district: "Thanjavur",
    type: "Engineering",
    rating: 3.8,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "OASYS Institute of Technology , Pulivalam Village, Musiri Taluk, Tiruchirappalli District 626001",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.6,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M.A.M. School of Engineering, Siruganur, Tiruchirappalli District 621105",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 3.7,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SRM TRP Engineering College, Irungalur, Manachanallur Taluk, Tiruchirappalli District 621105",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.2,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "A V C College of Engineering, Mannampandal Post, Mayiladuthurai, Nagapattinam District 609305",
    district: "Nagapattinam",
    type: "Engineering",
    rating: 3.7,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Shri Angalamman College of Engineering and Technology  Siruganoor, Tiruchirappalli District 621105",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Anjalai Ammal-Mahalingam Engineering College, Kovilvenni, Thiruvarur District 614403",
    district: "Thiruvarur",
    type: "Engineering",
    rating: 4,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arasu Engineering  College, Chennai Main Road, Kumbakonam, Thanjavur District 612501",
    district: "Thanjavur",
    type: "Engineering",
    rating: 4.3,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dhanalakshmi Srinivasan  Engineering College, Thuraiyur Road, Perambalur District 621212",
    district: "Perambalur",
    type: "Engineering",
    rating: 4.7,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "E G S Pillay  Engineering College (Autonomous), Nagapattinam District 611002",
    district: "Nagapattinam",
    type: "Engineering",
    rating: 3.7,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "J J College of Engineering and Technology, Poolankulathupatti Post, Tiruchirappalli District 620009",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.1,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jayaram College of Engineering and Technology , Pagalavadi Post, Tiruchirappalli District 621014",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.1,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kurinji College of Engineering and Technology, Manapparai, Tiruchirappalli District 621307",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.2,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M.A.M. College of Engineering, Siruganur, Tiruchirappalli District 621105",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.8,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M I E T Engineering College, Tiruchirappalli-Pudukkottai Road, Tiruchirappalli District 620007",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.9,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mookambigai College of Engineering, Keeranur, Pudukkottai District 622502",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 4.7,
    established: 2013,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Oxford Engineering College, Pirattiyur(W), Tiruchirappalli District 620009",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.4,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P R Engineering College, Vallam, Thanjavur District 613403",
    district: "Thanjavur",
    type: "Engineering",
    rating: 4.5,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Pavendhar Bharathidasan College of Engineering and Technology, Pudukkottai Main Road, Tiruchirappalli District 620024",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 3.6,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Roever Engineering College, Elambalur, Perambalur District 621212",
    district: "Perambalur",
    type: "Engineering",
    rating: 3.7,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Saranathan College of  Engineering, Panjappur, Tiruchirappalli District  620012",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.5,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Tiruchirappalli Engineering College, Konalai, Tiruchirappalli District 621132",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.2,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "A R J College of Engineering and Technology, Mannargudi Taluk, Thiruvarur District 614001",
    district: "Thiruvarur",
    type: "Engineering",
    rating: 3.8,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dr. Navalar Nedunchezhian College of Engineering, Tholudur, Cuddalore District 606303",
    district: "Cuddalore",
    type: "Engineering",
    rating: 4.3,
    established: 1994,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Srinivasan Engineering College, Thuraiyur Road, Perambalur District 621212",
    district: "Perambalur",
    type: "Engineering",
    rating: 4,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Josephs College Of Engineering And Technology, Elupatti Village, Rawaspatti Post, Thanjavur District 613403",
    district: "Thanjavur",
    type: "Engineering",
    rating: 3.7,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kongunadu College of Engineering and Technology, Tholurpatti, Thottiyam, Tiruchirappalli District 621215",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 3.8,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M.A.M. College of Engineering and Technology, Tiruchirappalli-Chennai Trunk Road, Siruganur, Tiruchirappalli District 621105",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 3.7,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K Ramakrishnan College of Engineering, Kariyamanickam Road, Samayapuram, Manachanallur Taluk, Tiruchirappalli District 621112",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Indra Ganesan College of Engineering, Madurai Main Road, Manikandam, Tiruchirappalli District 620012",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 3.7,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Parisutham Institute of Technology and Science, Ring Road, Nanjikottai, Thanjavur District 613006",
    district: "Thanjavur",
    type: "Engineering",
    rating: 4.4,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "C.A.R.E Group of Institutions, Thayanoor Village, Thayanoor Village, Kuttappatti, Srirangam Taluk, Tiruchirappalli District 620009",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M R K Institute of Technology, Nattarmangalam Village, Kattumannarkoil, Cuddalore District 608306",
    district: "Cuddalore",
    type: "Engineering",
    rating: 4.7,
    established: 1998,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Shivani Engineering College, Ammapettai, Srirangam, Tiruchirappalli District 620009",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Imayam College of Engineering, Kannanur, Thuraiyur, Tiruchirappalli District 621206",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.4,
    established: 2001,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mother Terasa College of Engineering and Technology, Mettusalai Post and Taluk, Pudukkottai District 622102",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 3.8,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Roever College of Engineering and Technology, Elambalur, Perambalur District 621212",
    district: "Perambalur",
    type: "Engineering",
    rating: 3.8,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vandayar Engineering College, Pulavarnatham Post, Mariamman Koil (Via), Thanjavur District 613001",
    district: "Thanjavur",
    type: "Engineering",
    rating: 4.9,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annai College of Engineering and Technology, Kovilacheri, Kumbakonam, Thanjavur District 612503",
    district: "Thanjavur",
    type: "Engineering",
    rating: 4.5,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vetri Vinayaha College of Engineering and Technology, Namakkal-Tiruchirappalli Main Road, Tholurpatti Village, Thottiam, Tiruchirappalli District 621215",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Bharathi Engineering College for Women, Kaikkuruchi Village, Alangudi Taluk, Pudukkottai District 622303",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 3.8,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mahath Amma Institute of Engineering and Technology (MIET), Ariyur, Annavasal Road, Illupur Taluk, Pudukkottai District 622101",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 4.3,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "As-Salam College of Engineering and Technology, Thirumangalakudi, Aduthurai, Thiruvidaimaruthur, Thanjavur District 612102",
    district: "Thanjavur",
    type: "Engineering",
    rating: 3.7,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Meenakshi Ramaswamy Engineering College, Tiruchirappalli Main Road,  Thathanur, Udayarpalayam, Ariyalur District 621804",
    district: "Tiruchirappalli",
    type: "Engineering",
    rating: 4.8,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sembodai Rukmani Varatharajan Engineering College, Sembodai Village, Vedaraniam, Nagapattinam District 614820",
    district: "Nagapattinam",
    type: "Engineering",
    rating: 4.5,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Annes College of Engineering and Technology, Anguchettypalayam, Siruvathur Post, Panruti, Cuddalore District 607110",
    district: "Cuddalore",
    type: "Engineering",
    rating: 4.7,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kings College of Engineering, Punalkulam, Pudukkottai District 613303",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 3.7,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mount Zion College of Engineering and Technology, Pilivalam Post, Pudukkottai District 622507",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 4.6,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Shanmuganathan Engineering College, Pillivalam Post, Pudukkottai District 622507",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 3.9,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sudharsan Engineering College, Sathiyamangalam Post, Pudukkottai District 622501",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 4.4,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M N S K College of Engineering, Vallathirakkottai Post, Pudukkottai District 622305",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 4.7,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M A R College of Engineering and Technology, Boothakudi, Rasanaickenpatty Post, Illuppur Taluk, Pudukkottai District 621316",
    district: "Pudukkottai",
    type: "Engineering",
    rating: 4.8,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Anna University Regional Campus - Tirunelveli, Trivandrum Road, Palayamkottai, Tirunelveli District 627007",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.6,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Nagercoil, Nagercoil Industrial Estate, Konam, Kanyakumari District 629004",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.4,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University V.O.C. College of Engineering, Thoothukudi, Near V.O.C. College, Millerpuram, Thoothukudi District 628008",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 4.2,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Thamirabharani Engineering College, Chathirampudukulam Village, Thatchanallur, Tirunelveli District 625358",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.7,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rohini College of Engineering & Technology, Anjugramam-Kanyakumari Main Road, Palkulam, Variyoor Post, Kanyakumari District 629401",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.7,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Stella Marys College of Engineering, Arunthengan Vilai, Azhikal Post, Kanyakumari District 629202",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.2,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Universal College of Engineering and Technology, Anbagam Campus, Radhapuram Road, Vallioor, Tirunelveli District 627117",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.8,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Renganayagi Varatharaj College of Engineering, Salvarpatti, Sivakasi, Virudhunagar District 626128",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 3.7,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Lourdes Mount College of Engineering and Technology, Marthandam-Karungal Road, Chundavilai, Mullanganavilai, Nattalam Post, Kanyakumari District 629195",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.8,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ramco Institute of Technology, North venganallur Village, Krishnapuram Panchayat, Rajapalayam, Virudhunagar District 626117",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 3.8,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "AAA College of Engineering and Technology, Kamarajar Educational Road, Amathur Village, Sivakasi, Virudhunagar District 626005",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4.2,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Good Shepherd College of Engineering and Technology, Maruthamparai, Kanyakumari District 629101",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.6,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "V V College of Engineering, Arasoor Village, Idaichivilai Post, Santhakulam Taluk, Thoothukudi District 628656",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 3.6,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sethu Institute of Technology (Autonomous), Kariapatti Post, Virudhunagar District 626106",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4.9,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Maria College of Engineering and Technology, Attoor Puliyamoodu Junction, Thiruvattar Post, Kanyakumari District 629177",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.2,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "MAR Ephraem College of Engineering & Technology, Malankara Hills, Elavuvillai, Marthandam, Kanyakumari District 629171",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.2,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "M E T Engineering College, Mogals Garden, Thovalai Village, Aralvaimozhi Town Panchayat, Thovalai, Kanyakumari District 629304",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.7,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Chandy College of Engineering, Chandy Nagar, Mullakkadu, Thoothukudi District 628005",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 4.7,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Mother Theresa Engineering College, Vagaikulam, Thoothukudi District 628102",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 4.3,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Holy Cross Engineering College, Vagaikulam, Sri Mulakarai, Srivaikuntam,  Thoothukudi District 628851",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 3.5,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sivaji College of Engineering and Technology, Manivilla Palulai Panchayat, Vilavancode, Kanyakumari District 629170",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.1,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Unnamalai Institute of Technology, Ayyaneri, Kovilpatti, Thoothukudi District 628502",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 4,
    established: 2008,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Satyam College of Engineering & Technology, Kannappannallur, Aralvaimozhi, Kanyakumari District 629301",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.7,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Arunachala College of Engineering for Women, Thanka Gardens, Manavilai, Vellichanthai, Nagercoil, Kanyakumari District 629203",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.8,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vins Christian Womens College of Engineering, Chunkankadai Post, Nagercoil, Kanyakumari District 629807",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.5,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "D M I Engineering College, Aralvaimozhi Village, Thovalai, Kanyakumari District 629301",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.1,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rajas International Institute of Technology for Women, Ozhuginasery, Nagercoil, Kanyakumari District 629001",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.9,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P S N Institute of Technology & Science, Melathediyoor, Tirunelveli District 627152",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.7,
    established: 2005,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "C S I Institute of Technology, Thovalai, Kanyakumari District 629302",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.8,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "CAPE Institute of Technology, Levingipuram, Tirunelveli District 627114",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.8,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dr. Sivanthi Aditanar College of Engineering, Tiruchendur, Thoothukudi District 628215",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 4.5,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Francis Xavier Engineering College, Vannarpettai, Tirunelveli District 627003",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.2,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Jayaraj Annapackiam CSI College of Engineering, Nazareth, Thoothukudi District 628617",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 3.8,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Kamaraj College of Engineering and Technology, Virudhunagar District 626001",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4.5,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mepco Schlenk Engineering College (Autonomous), Sivakasi, Virudhunagar District 626005",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4.3,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "National College of Engineering, Maruthakulam Post, Tirunelveli District 627151",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.8,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "National  Engineering College (Autonomous), Kovilpatti, Thoothukudi District 628503",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 3.6,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P S N College of Engineering and Technology (Autonomous), Melathediyoor, Tirunelveli District 627152",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.6,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P S R  Engineering College (Autonomous), Appayanaickenpatti, Sevalpatti, Virudhunagar District 626140",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "PET Engineering College, Vallioor Post, Tirunelveli District 627117",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.9,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "S Veerasamy Chettiar College of  Engineering and Technology, Puliangudi Post, Tirunelveli District 627855",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.7,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sardar Raja College of Engineering, Alangulam, Tirunelveli District 627808",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.2,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SCAD College of Engineering and Technology, Cheranmahadevi, Tirunelveli District 627414",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.6,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sree Sowdambiga  College of Engineering, Aruppukkottai Taluk, Virudhunagar District 626134",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4.5,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Xavier Catholic College of Engineering, Chunkankadai, Nagercoil, Kanyakumari District 629807",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.8,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Amrita College of Engineering and Technology, Erachakulam Post, Kanyakumari District 629902",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.7,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Rajas Engineering College , Vadakkangulam, Tirunelveli District 627116",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.9,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Engineering, Tirunelveli District 627007",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.8,
    established: 1999,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Dr. G U Pope College of Engineering, Sawyerpuram, Thoothukudi District  628251",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 3.6,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Infant Jesus College of Engineering, Thoothukudi Highway (NH7/A), Thoothukudi District 628851",
    district: "Thoothukudi",
    type: "Engineering",
    rating: 4.7,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Narayanaguru College of Engineering, Manjalumoodu, Kanyakumari District 629151",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.9,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Udaya School of Engineering, Ammandivilai Post, Kanyakumari District 629204",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.5,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "V P Muthaiah Pillai Meenakshi Ammal Engineering College for Women, Srivilliputhur Taluk, Virudhunagar District 626190",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4.3,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Einstein College of Engineering, Seethaparpanallur, Tirunelveli District 627012",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 3.5,
    established: 1991,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ponjesly College of  Engineering, Vettornimadam Post, Nagercoil, Kanyakumari District 629003",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.3,
    established: 1980,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vins Christian College of Engineering, Chunkankadai Post, Nagercoil, Kanyakumari District  629807",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.3,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Lord Jegannath College of Engineering and Technology, Kumarapuram, Thoppur Post, Kanyakumari District 629402",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.1,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Marthandam College of Engineering & Technology, Kuttakuzhi, Veeyanoor Post, Kanyakumari District 629177",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.5,
    established: 2006,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P S N Engineering College, Melathediyoor, Tirunelveli District 627152",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.3,
    established: 1983,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Bethlahem Institute of Engineering, Karungal, Kanyakumari District 629157",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.6,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Loyola Institute of Technology and Science, Loyola Nagar,  P B No.2, Thovalai, Kanyakumari District 629302",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 4.1,
    established: 1984,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "J P College of Engineering, College Road, Ayakudy, Tenkasi Taluk, Tirunelveli District 627852",
    district: "Tirunelveli",
    type: "Engineering",
    rating: 4.1,
    established: 2007,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P S R Rengasamy College of Engineering for Women, Appayanaickenpatti, Sevalpatti, Virudhunagar District 626140",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 3.7,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Vidhya College of Engineering and Technology, Sivakasi Main Road, P Kumaralinapuram, Virudhunagar District 626005",
    district: "Virudhunagar",
    type: "Engineering",
    rating: 4,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Annai Vailankanni College of Engineering, Pothaiyadi Salai, Pottalkulam, Azhagappapuram, Kanyakumari District 629401",
    district: "Kanyakumari",
    type: "Engineering",
    rating: 3.9,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Thiagarajar College of Engineering (Autonomous), Tirupparankundram, Madurai District 625015",
    district: "Madurai",
    type: "Engineering",
    rating: 4.5,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Government College of Engineering,  Melachokkanathapuram, Bodinayakkanur,â\\[Euro]\\:2030Theni District 625 582",
    district: "Theni",
    type: "Engineering",
    rating: 3.8,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Anna University Regional Campus - Madurai, Kanyakumari National Highway, Keelakuilkudi, Madurai District 625019",
    district: "Madurai",
    type: "Engineering",
    rating: 4,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Central Electrochemical Research Institute, (CECRI), Karaikudi, Sivagangai District 630006",
    district: "Sivaganga",
    type: "Engineering",
    rating: 4.5,
    established: 2002,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Ramanathapuram, Pullangudi, Ramanathapuram District 623513",
    district: "Ramanathapuram",
    type: "Engineering",
    rating: 4.2,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "University College of Engineering, Dindigul, Mangarai Pirivu, Reddiyarchathiram, Dindigul District 624622",
    district: "Dindigul",
    type: "Engineering",
    rating: 3.6,
    established: 1993,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sree Raaja Raajan College of Engineering & Technology, Amaravathi Village, Amaravathi Pudur Post, Karaikudi, Sivagangai District 630301",
    district: "Sivaganga",
    type: "Engineering",
    rating: 3.9,
    established: 2003,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SSM Institute of Engineering and Technology, Kuttathupatti Village, Sindalaigundu Post, Dindigul District 624002",
    district: "Dindigul",
    type: "Engineering",
    rating: 4.9,
    established: 2010,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vaigai College of Engineering, Therkutheru, Melur Taluk, Madurai District 625122",
    district: "Madurai",
    type: "Engineering",
    rating: 4.7,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Karaikudi Institute of Technology, KIT & KIM Technical Campus, Keeranipatti, Thalakkuvur, Karaikudi, Sivagangai District 630307",
    district: "Sivaganga",
    type: "Engineering",
    rating: 4.1,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mangayarkarasi College of Engineering, First Street, Mangayarkarasi Nagar, Paravai, Madurai District 625402",
    district: "Madurai",
    type: "Engineering",
    rating: 4.9,
    established: 2009,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Christian College of Engineering and Technology, Oddanchatram, Dindigul District 624619",
    district: "Dindigul",
    type: "Engineering",
    rating: 3.7,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Sri Subramanya College of Engineering and Technology, Sukkamanaickanpatti, Palani, Dindigul District 624615",
    district: "Dindigul",
    type: "Engineering",
    rating: 4.4,
    established: 2004,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "N P R College of Engineering and Technology, Natham, Dindigul District 624003",
    district: "Dindigul",
    type: "Engineering",
    rating: 4.5,
    established: 2001,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Madurai Institute of Engineering & Technology, Pottapalayam Village, Manamadurai Taluk, Sivagangai District 630611",
    district: "Sivaganga",
    type: "Engineering",
    rating: 3.8,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Veerammal Engineering College, K Singarakottai, Dindigul District 624708",
    district: "Dindigul",
    type: "Engineering",
    rating: 4.2,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "R V S Educational Trustâ\\[Euro](TM)s Groups of Institutions (Integrated Campus), N Paraipatti Post, Vedasandur Taluk, Dindigul District 624005",
    district: "Dindigul",
    type: "Engineering",
    rating: 4.1,
    established: 1995,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Nadar Saraswathi College of Engineering and Technology, Vadupudupatti, Annanji Post, Theni District 625531",
    district: "Theni",
    type: "Engineering",
    rating: 4.2,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Alagappa Chettair Government College of Engineering and Technology (Autonomous), Karaikudi, Sivagangai District 630004",
    district: "Sivaganga",
    type: "Engineering",
    rating: 4.6,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Bharath Niketan Engineering College, Thimmarasanaickanoor, Aundipatti, Theni District 625536",
    district: "Theni",
    type: "Engineering",
    rating: 4.5,
    established: 1990,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K L N College of Information Technology, Pottapalayam, Sivagangai District  630611",
    district: "Sivaganga",
    type: "Engineering",
    rating: 3.8,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "K L N College of Engineering, Pottapalayam, Sivagangai District 630611",
    district: "Sivaganga",
    type: "Engineering",
    rating: 3.9,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Mohamed Sathak Engineering College, Kilakarai, Ramanathapuram District 623806",
    district: "Ramanathapuram",
    type: "Engineering",
    rating: 4.8,
    established: 1997,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P S N A Colllege of Engineering and Technology, Dindigul District 624622",
    district: "Dindigul",
    type: "Engineering",
    rating: 4.9,
    established: 1989,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "P T R College of Engineering and Technology, Austinpatty Post, Madurai District 625008",
    district: "Madurai",
    type: "Engineering",
    rating: 4.3,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Pandian Saraswathi Yadav Engineering College, Thirumansolai Post, Sivagangai District 630 561",
    district: "Sivaganga",
    type: "Engineering",
    rating: 4.2,
    established: 1996,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ratnavel Subramaniam College of Engineering and Technology, N Paraipatti Post, Dindigul District 624005",
    district: "Dindigul",
    type: "Engineering",
    rating: 4.3,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SOLAIMALAI COLLEGE OF ENGINEERIG, Veerapanjan, Madurai District 625020",
    district: "Madurai",
    type: "Engineering",
    rating: 4.2,
    established: 1987,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SACS-M A V M M Engineering College, Kidaripatty Post, Madurai District 625001",
    district: "Madurai",
    type: "Engineering",
    rating: 4.8,
    established: 1985,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "St. Michael College of Engineering and Technology, Kalayarkoil, Sivagangai District 630551",
    district: "Sivaganga",
    type: "Engineering",
    rating: 4.8,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Syed Ammal Engineering College, Achunthanvayal Post, Ramanathapuram District-623502",
    district: "Ramanathapuram",
    type: "Engineering",
    rating: 4.3,
    established: 1986,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Vickram College of Engineering, Enathi Post, Sivagangai District 630561",
    district: "Sivaganga",
    type: "Engineering",
    rating: 4.9,
    established: 1988,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ganapathy Chettiar College of Engineering and Technology, Melakavanur Post, Paramakudi, Ramanathapuram District 623706",
    district: "Ramanathapuram",
    type: "Engineering",
    rating: 3.7,
    established: 2015,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "SBM College of Engineering and Technology, Thamaraipady, T N Paraipatti Pirivu, Dindigul District 624005",
    district: "Dindigul",
    type: "Engineering",
    rating: 3.6,
    established: 1982,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Fatima Michael College of Engineering & Technology, Sengottai Village, Sivagangai Main Road, Madurai District 625020",
    district: "Sivaganga",
    type: "Engineering",
    rating: 4.9,
    established: 1981,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Ultra College of Engineering & Technology , Kodikulam, 1 Bit Village, Madurai-Chennai Highway, Madurai District 625104",
    district: "Madurai",
    type: "Engineering",
    rating: 4.3,
    established: 2012,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Velammal College of Engineering and Technology, Madurai - Rameshwaram High Road, Viraganoor, Madurai District 625009",
    district: "Madurai",
    type: "Engineering",
    rating: 4.3,
    established: 1992,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Theni Kammavar Sangam College of Technology, Theni Main Road, Koduvillarpatti Post, Theni District 625534",
    district: "Theni",
    type: "Engineering",
    rating: 4.1,
    established: 2011,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    popularCourse: "Computer Science Engineering"
  },
  {
    name: "Latha Mathavan Engineering College, Kidaripatti Post, Alagarkoil (Via), Melur Taluk, Madurai District 625301",
    district: "Madurai",
    type: "Engineering",
    rating: 4.8,
    established: 2014,
    courses: [
      "B.Tech",
      "M.Tech",
      "MBA",
      "MCA"
    ],
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
    image: "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
    popularCourse: "Computer Science Engineering"
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
                // key={college.id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="college-image-container">
                  <img
                    src={college.image}
                    className="college-image"
                    alt={college.name}
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
                      Popular Course: <span>{college.popularCourse}</span>
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
                </div><br />
              </div>
            ))
          ) : (
            <div className="no-results">
              <i className="fas fa-university"></i>
              <h3>No colleges found matching your criteria</h3>
              <p>Try adjusting your search filters</p>
            </div>
          )}
        </div><br />

        {!showAllColleges && filteredColleges.length > 0 && (
          <div className="text-center mt-4">
            <button className="load-more-btn" onClick={loadMoreColleges}>
              Show All Colleges
            </button><br />
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
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Computer Science"
            />
            <div className="course-content">
              <h3>Computer Science</h3>
              <p>B.E/B.Tech in Computer Science and Engineering</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="150">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Medical"
            />
            <div className="course-content">
              <h3>MBBS</h3>
              <p>Bachelor of Medicine and Bachelor of Surgery</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Mathematics"
            />
            <div className="course-content">
              <h3>B.Sc Mathematics</h3>
              <p>Bachelor of Science in Mathematics</p>
            </div>
          </div>
          <div className="course-card" data-aos="fade-up" data-aos-delay="250">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
