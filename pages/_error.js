"use client";

import { useRouter } from "next/router";
import React from "react";

function ErrorPage() {
  const router = useRouter();

  return (
    <div className="text-center">
      <h1>Error Page</h1>
      <p>
        Something went wrong kindly reload the page or{" "}
        <span
          className="underline cursor-pointer"
          onClick={() => router.back()}
        >
          go back
        </span>{" "}
        .
      </p>
    </div>
  );
}

export default ErrorPage;
