"use client";
import React from "react";

const ProgressBar = ({ progress, status }) => {
  const getProgressColor = () => {
    if (status === "success") return "bg-green-500";
    if (status === "error") return "bg-red-500";
    return "bg-blue-500";
  };

  return (
    <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className={`h-full transition-all duration-300 ease-out ${getProgressColor()}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
