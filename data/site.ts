// Central content for the STRIKE homepage recreation.
// Keeping copy/data out of the presentation components.

export const NAV_ITEMS = [
  'Home',
  'Courses',
  'Practice',
  'CodeArena',
  'Quiz',
  'System Design',
  'Contests',
] as const

export type PlanDuration = '2 Years' | '3 Years' | '4 Years'

export interface Plan {
  id: 'plus' | 'ultra'
  name: string
  tag: string
  description: string
  theme: 'silver' | 'gold'
  bestValue?: boolean
  // price per duration, [discountedINR, originalINR]
  pricing: Record<PlanDuration, { price: number; original: number }>
  features: string[]
}

export const PLANS: Plan[] = [
  {
    id: 'plus',
    name: 'Strike Plus',
    tag: 'MEMBERSHIP PLAN',
    description:
      'All existing Strike courses with access for your selected duration.',
    theme: 'silver',
    pricing: {
      '2 Years': { price: 9999, original: 15999 },
      '3 Years': { price: 11499, original: 17999 },
      '4 Years': { price: 12499, original: 19999 },
    },
    features: [
      'All current courses included',
      'HD recordings',
      'Live class access during plan',
      'Notes',
      'Resume Review',
      'Certificates',
      'System Design Platform',
      'DSA Platform',
      'Coder Arena Platform',
    ],
  },
  {
    id: 'ultra',
    name: 'Strike Ultra',
    tag: 'MEMBERSHIP PLAN',
    description:
      'This plan includes all existing courses, plus upcoming courses for your selected duration.',
    theme: 'gold',
    bestValue: true,
    pricing: {
      '2 Years': { price: 10999, original: 19999 },
      '3 Years': { price: 12499, original: 22999 },
      '4 Years': { price: 13499, original: 24999 },
    },
    features: [
      'Everything in Strike Plus',
      'Upcoming batches included',
      'Coder Arena Platform',
      'Certificates',
      'Resume Review',
      'Notes',
      'System Design Platform',
      'DSA platform',
    ],
  },
]

export interface Course {
  title: string
  stack: string
  duration: string
  image: string
  badge?: string
  hours?: string
}

export const COURSES: Course[] = [
  {
    title: 'Thunder: 100 Days of Code',
    stack: 'Web Development + System Design + Security + DevOps',
    duration: '100 Days',
    image: '/course-thunder.png',
  },
  {
    title: 'Devops: From Foundations to Production',
    stack: 'Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud',
    duration: '8 weeks',
    image: '/course-devops.png',
  },
  {
    title: 'DSA + GenAI Combo',
    stack: 'Complete tech stack with DSA and AI',
    duration: '4 months',
    image: '/course-dsa-genai.png',
    badge: 'POPULAR',
    hours: '100+ Hours',
  },
  {
    title: 'Data Structure & Algorithms',
    stack: 'Master DSA with C++ from basics to advanced level',
    duration: '4 months',
    image: '/course-dsa.png',
    hours: '100+ Hours',
  },
  {
    title: 'Generative AI',
    stack: 'Build autonomous AI agents from scratch',
    duration: '4 months',
    image: '/course-genai.png',
    hours: '50+ Hours',
  },
]

export interface CompanyLogo {
  name: string
  logo: string
  width: number
  height: number
}

// Same brand marks used on strikes.in's "Premium Questions" logo marquee.
export const FAANG: CompanyLogo[] = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    width: 120,
    height: 40,
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
    width: 100,
    height: 36,
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/960px-Amazon-logo-white.svg.png',
    width: 110,
    height: 36,
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    width: 40,
    height: 48,
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    width: 130,
    height: 32,
  },
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
    width: 120,
    height: 42,
  },
  {
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
    width: 120,
    height: 32,
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    width: 110,
    height: 28,
  },
]

export interface Mentor {
  name: string
  role: string
  bio: string
  image: string
  tags: string[]
}

export const MENTORS: Mentor[] = [
  {
    name: 'Rohit Negi',
    role: 'Founder & Lead Instructor',
    bio: 'Heartfelt Problem Solver, Instructor, and Visionary Leader. Got Highest Placement in India of 2 Cr+. Post Graduate from IIT G, GATE-CSE\u201920 AIR - 202.',
    image: '/mentor-1.png',
    tags: ['Ex-@Uber', 'IIT Graduate', '2 Cr+ Package'],
  },
  {
    name: 'Aditya Tandon',
    role: 'Co-Founder & Senior Instructor',
    bio: 'Senior Software Engineer passionate about scalable systems and elegant algorithms. Dedicated mentor committed to teaching, learning, and inspiring future developers.',
    image: '/mentor-2.png',
    tags: ['Ex-Ola | @Oxyzo', 'IIT Guwahati', 'Ex-Ola'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Namita Singh',
    text: 'I learned everything from beginner to advanced levels and built multiple real-world projects that strengthened my skills and boosted my confidence as a full-stack developer.',
  },
  {
    name: 'Gopal Kumar Jha',
    text: "Completed Nexus MERN in 8-9 months. Rohit Bhaiya taught not just 'what' but 'why' behind everything. My consistency broke many times, but I finally made it!",
  },
  {
    name: 'Adheli Priyanka',
    text: 'Nexus builds from basics with in-depth explanations. Daily homework, live classes, and project contests with rewards kept me motivated throughout my learning journey.',
  },
  {
    name: 'Alok',
    text: 'The live classes, HD recordings, and daily practice problems made learning smooth. Real-world projects prepared me for actual development work in the industry.',
  },
  {
    name: 'Aryan Verma',
    text: 'Best decision I made was joining Nexus. The First Principles teaching helped me understand concepts deeply, not just memorize solutions like other courses.',
  },
  {
    name: 'Shree',
    text: 'From zero coding knowledge to building full-stack projects, Nexus transformed my career. The mentorship and doubt support made all the difference in my journey.',
  },
  {
    name: 'Navlesh Kumar',
    text: "Rohit Sir's First Principles approach transformed how I build applications. From beginner to advanced, every concept clicked perfectly and boosted my confidence.",
  },
  {
    name: 'Mehul Prajapati',
    text: 'The way complex topics like System Design and Blockchain are taught in Nexus is unmatched. I built 5+ projects that directly helped me crack multiple interviews.',
  },
  {
    name: 'Sonu',
    text: 'Nexus gave me everything I needed - MERN Stack, DSA, System Design, all in one place. The community support and regular contests pushed me beyond my limits.',
  },
]

export const FAQS = [
  {
    q: 'What programming languages can I learn on the platform?',
    a: 'Strike offers comprehensive courses in JavaScript, Python, Java, C++, React, Node.js, and many more. We also provide courses on Data Structures, Algorithms, System Design, and Full-Stack Development with hands-on projects.',
  },
  {
    q: 'What will I learn in the DSA + Gen AI course?',
    a: "This course covers Data Structures & Algorithms from basics to advanced level, along with Generative AI fundamentals. You'll learn arrays, trees, graphs, dynamic programming, and how to build AI-powered applications using modern frameworks. The course includes 200+ problems, live doubt sessions, and real-world AI projects.",
  },
  {
    q: 'Do I need prior coding experience to join DSA + Gen AI course?',
    a: "Basic programming knowledge in any language (C++, Java, or Python) is recommended. If you're completely new, we suggest starting with our beginner programming course first. The DSA + Gen AI course is designed for learners who know basic syntax and want to master algorithms and AI together.",
  },
  {
    q: 'How is Gen AI integrated with DSA in this course?',
    a: "You'll learn how AI models use data structures internally, optimize algorithms for AI applications, and build Gen AI projects like chatbots, code generators, and recommendation systems. We teach practical AI integration with strong DSA fundamentals, preparing you for modern tech roles.",
  },
  {
    q: 'Will this course help me crack product-based company interviews?',
    a: "Absolutely! The course is specifically designed for interview preparation. You'll solve 200+ problems from FAANG interview archives, learn First Principles problem-solving approach, and get weekly mock interviews. Our students have cracked interviews at Google, Microsoft, Amazon, and top startups.",
  },
  {
    q: 'How long does it take to complete the DSA + Gen AI course?',
    a: 'The course is designed to be completed in 6-8 months with consistent daily practice. However, you get lifetime access to all course materials, so you can learn at your own pace. Most students spend 2-3 hours daily on lectures, practice problems, and projects to stay on track.',
  },
]
