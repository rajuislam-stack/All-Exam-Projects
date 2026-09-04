//monthly-Exam 7

import CourseList from "./components/CourseList";

const courses = [
    {  
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      lessons: 25,
      duration: "6 Weeks",
      price: 49,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      instructor: "Jane Smith",
      lessons: 40,
      duration: "8 Weeks",
      price: 59,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tailwind CSS Crash Course",
      instructor: "Alex Johnson",
      lessons: 18,
      duration: "4 Weeks",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      instructor: "Michael Brown",
      lessons: 50,
      duration: "12 Weeks",
      price: 79,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Responsive Web Design",
      instructor: "Sarah Wilson",
      lessons: 22,
      duration: "5 Weeks",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Advanced React Patterns",
      instructor: "David Miller",
      lessons: 32,
      duration: "7 Weeks",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
  ];

export default function App() {
  return (
    <>
   <CourseList courses ={courses}/>
    </>
  )
}
