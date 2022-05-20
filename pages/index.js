import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div className="detail">
      <Link href={"/films"}>
        <button>Bekijk de populaire films</button>
      </Link>
    </div>
  );
};

export default Index;
