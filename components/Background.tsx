"use client";
import { SparklesCore } from "./ui/sparkles";
function Background() {
  return (
    <div className="w-full absolute inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.8}
        maxSize={2.0}
        particleDensity={90}
        className="w-full h-full"
        particleColor="#4f46e5"
      />
    </div>
  );
}

export default Background;
