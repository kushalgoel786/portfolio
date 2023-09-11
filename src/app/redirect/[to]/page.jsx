"use client";

import { useEffect, useState } from "react";
import redirects from "@/utils/constants/redirects";
import { useRouter } from "next/navigation";

const RedirectPage = ({ params }) => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (params.to in redirects) {
        window.location.href = redirects[params.to];
      } else {
        router.push("/");
      }
    }, countdown * 1000);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(countdownInterval);
    };
  }, []);

  const valid = params.to in redirects;

  return (
    <div>
      {valid ? (
        <div className="flex min-h-screen justify-center items-center">
          <p className="text-xl">Redirecting in {countdown}...</p>
        </div>
      ) : (
        <div className="flex min-h-screen justify-center items-center">
          <p className="text-xl">
            Sorry, that link does not exist. Redirecting to home in {countdown}
            ...
          </p>
        </div>
      )}
    </div>
  );
};

export default RedirectPage;
