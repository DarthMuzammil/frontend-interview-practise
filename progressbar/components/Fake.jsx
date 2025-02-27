"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ApiRequestSimulator = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const simulateApiCall = () => {
    setProgress(0);
    setStatus("loading");

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 80) clearInterval(interval);
      setProgress(Math.min(currentProgress, 80));
    }, 300);

    const apiDuration = Math.random() * 3000 + 1000; // 1s - 4s

    setTimeout(() => {
      clearInterval(interval);
      const success = Math.random() > 0.2; // 80% chance success
      if (success) {
        setProgress(100);
        setStatus("success");
      } else {
        setProgress(100);
        setStatus("error");
      }
    }, apiDuration);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <ProgressBar progress={progress} status={status} />
      <button
        onClick={simulateApiCall}
        className="px-4 py-2 bg-blue-600 text-black rounded-lg"
      >
        Start API Request
      </button>
      <p className="text-lg">
        {status === "idle" && "Click the button to start"}
        {status === "loading" && "Loading..."}
        {status === "success" && "Success ✅"}
        {status === "error" && "Failed ❌"}
      </p>
    </div>
  );
};

export default ApiRequestSimulator;
