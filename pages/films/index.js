import React from "react";
import axios from "axios";
import Link from "next/link";

const index = ({ popularVideos }) => {
  return (
    <>
      <h1>Popular Movies:</h1>
      <ul>
        {popularVideos.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link href={`/films/${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const {
    data: { results: popularVideos },
  } = await axios(
    "https://api.themoviedb.org/3/movie/popular?api_key=43a2edfebe1afa26db5a2ae6f0468615&language=en-US&page=1"
  );

  return {
    props: {
      popularVideos,
    },
  };
}
