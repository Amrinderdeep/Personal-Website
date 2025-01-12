import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
    {
      name: "Bizzplus Venture",
      username: "Freelance Company",
      body: "Founded and successfully operated Bizzplus, a freelance company specializing in software solutions, delivering exceptional results to clients.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Red Cross Site",
      username: "Government of India Collaboration",
      body: "Contributed to the development of the Indian Red Cross Society Ludhiana website in collaboration with the GNDEC and DC office, streamlining operations and outreach.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Causmic Club | Technical Head",
      username: "Guru Nanak Dev Engineering College (Apr 2023 - Dec 2024)",
      body: "Led a team of developers in creating websites for ongoing events, showcasing technical expertise and leadership skills.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Initiators of Change | Volunteer",
      username: "Civic Engagement (Sept 2023 - Present)",
      body: "Educated underprivileged children under the USAARI project, conducted civic seminars, and participated in community outreach initiatives.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Hackathon Victory | Palloc Project",
      username: "Internal College Hackathon",
      body: "Secured first place by leading the development of Palloc, a project revolutionizing parking allocation within the campus.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "LeetCode Mastery",
      username: "Algorithmic Excellence",
      body: "Solved 350+ problems on LeetCode with a 115-day streak, mastering data structures and algorithmic concepts.",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "Flipkart GRID",
      username: "Tech Competition",
      body: "Advanced to the final round of the Flipkart Grid competition, showcasing exceptional problem-solving and technical skills.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Game Development Workshop",
      username: "Guru Nanak Dev Engineering College",
      body: "Conducted a month-long Unity and C# workshop where participants created their own games as a final project.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "MBCIE Internship",
      username: "AR/VR Development (June 2024 - July 2024)",
      body: "Integrated 3D models with Three.js, contributed to AR/VR development using Unity, and co-authored a research paper on VR advancements.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "CS50x & CS50AI Certifications",
      username: "Harvard Online",
      body: "Earned certifications in CS50x and CS50AI, demonstrating a strong foundation in computer science and artificial intelligence.",
      img: "https://avatar.vercel.sh/jane",
    },
  ];
  
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Achievements() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <h2 className="text-4xl  text-center bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent mb-4">
        Achievements
      </h2>
      <p className="text-center text-gray-600 mb-8 text-lg">
        Milestones of Excellence
      </p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
