import React from "react";

const Certifications: React.FC = () => {
  return (
    <div className="container mx-auto mt-20 px-4 mb-20" style={{ width: "90%" }}>
      <h2 className="text-4xl text-center bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] bg-clip-text text-transparent">
        Certifications
      </h2>
      <p className="text-xl text-center text-muted-foreground mb-12">
        My Completed Certifications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* CS50x Certification */}
        <div className="bg-card/70 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg flex flex-col items-center text-center">
          <img
            src="/img/cs50x.png"
            alt="CS50x Certification"
            className="w-full h-auto mb-6 rounded-lg shadow-md"
          />
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            CS50x: Introduction to Computer Science
          </h3>
          <p className="text-xl font-medium text-primary mb-4">
            Harvard University
          </p>
          <p className="text-muted-foreground text-lg">
            Comprehensive introduction to the intellectual enterprises of computer science and the art of programming.
          </p>
        </div>

        {/* CS50 AI Certification */}
        <div className="bg-card/70 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg flex flex-col items-center text-center">
          <img
            src="/img/cs50ai.png"
            alt="CS50 AI Certification"
            className="w-full h-auto mb-6 rounded-lg shadow-md"
          />
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            CS50's Introduction to Artificial Intelligence with Python
          </h3>
          <p className="text-xl font-medium text-primary mb-4">
            Harvard University
          </p>
          <p className="text-muted-foreground text-lg">
            Covers concepts and algorithms at the foundation of modern artificial intelligence, diving into Python libraries for AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 