import React from "react";

interface Blog {
  week: string;
  title: string;
  description: string;
  commits: string[];
}

const blogs: Blog[] = [
  {
    week: "Week 1",
    title: "Initial Setup and Basic Features",
    description:
      "This week, we focused on setting up the core structure of the project, integrating a basic chat system, and implementing initial UI changes for better user experience. We also worked on creating foundational API endpoints, ensuring a smooth flow between frontend and backend components. The initial tests were conducted to verify stability, and minor adjustments were made based on feedback.",
    commits: [
      "Basic implementation of ollama generate page",
      "Markdown format and stream response added",
      "Chat system and Context storage per session",
    ],
  },
  {
    week: "Week 2",
    title: "Enhancing Chat System and UI Improvements",
    description:
      "Further enhancements to the chat system were made, ensuring session-based context storage. We also introduced UI changes for a more intuitive experience. Alongside these improvements, we started integrating a real-time feedback mechanism to collect user input regarding usability and responsiveness. Performance optimizations were also introduced to improve API response times.",
    commits: [
      "Navbar and other basic UI changes",
      "Generate notes and PDF feature",
      "Minor format changes for PDFs",
    ],
  },
  {
    week: "Week 3",
    title: "Quiz System and Backend Optimization",
    description:
      "We introduced a basic quiz system and focused on backend optimizations for faster response times. The implementation of dynamic quiz generation required us to fine-tune database queries to ensure minimal latency. We also worked on improving authentication processes to enhance security. Additionally, efforts were made to refine the user dashboard, making it easier to navigate and access key functionalities.",
    commits: [
      "Basic Quiz page",
      "Dependency added",
      "Quiz generate and attempt feature",
    ],
  },
  {
    week: "Week 4",
    title: "Infinite Scrolling and Performance Fixes",
    description:
      "This week was about implementing infinite scrolling and fixing issues related to content inconsistency. The infinite scrolling feature aimed to make the browsing experience seamless, allowing users to load more content without manually clicking buttons. Several bug fixes were applied to ensure smooth functionality, and we also introduced a caching mechanism to optimize database queries. Additional UI enhancements were made to refine the overall aesthetic appeal of the application.",
    commits: [
      "Infinite Scroll implementation",
      "Bug fixes in quiz and facts selection",
      "Improved response handling",
    ],
  },
  {
    week: "Week 5",
    title: "Security Improvements and Account Verification",
    description:
      "Account security was enhanced with email verification and additional checks for user authentication. This was a crucial step in ensuring that only legitimate users could access the platform. We also implemented password reset functionality and multi-factor authentication options. During testing, we identified and fixed security loopholes that could have led to potential vulnerabilities. Logging mechanisms were improved to track unauthorized access attempts.",
    commits: [
      "Email verification system",
      "Account verification implementation",
      "Root package fix",
    ],
  },
  {
    week: "Week 6",
    title: "Enhancing Study Page and Chat History",
    description:
      "The study page received major updates, including a structured chat history and session persistence. Users can now access past interactions and retrieve relevant information from previous discussions. This feature significantly enhances the learning experience by providing context-aware recommendations. We also introduced an auto-save feature to prevent data loss. Further UI refinements were applied to make navigation more intuitive.",
    commits: [
      "Chat history system",
      "History for study page",
      "LLM naming chat on creation",
    ],
  },
  {
    week: "Week 7",
    title: "Vercel Deployment and UI Enhancements",
    description:
      "Finalizing hosting with Vercel and making necessary UI refinements for an optimized experience. The transition to Vercel allowed us to achieve better scalability and improve deployment efficiency. We worked on fixing deployment-related bugs and ensuring that all API calls performed optimally in a cloud environment. A series of UI tweaks were made to align the design with modern standards, improving accessibility and responsiveness across devices.",
    commits: [
      "Vercel config added",
      "Posthog commented out",
      "Navbar UI changes",
    ],
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center mb-2">
          <img src="/img/skillstack.png" alt="SkillStack Logo" className="w-64 h-64" />
        </div>
        {/* <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">SkillStack Weekly Report</h1> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                {blog.week}: {blog.title}
              </h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <ul className="list-disc list-inside text-gray-600">
                {blog.commits.map((commit, idx) => (
                  <li key={idx}>{commit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
