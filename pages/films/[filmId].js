import React from "react";
import axios from "axios";
import Link from "next/link";

const FilmById = ({ videoDetail: { original_title, overview } }) => {
  return (
    <>
      <div className="detail">
        <h1>{original_title}</h1>
        <p>{overview}</p>
        <br />
        <Link href={"/films"} className="detail__link">
          <button>Ga terug</button>
        </Link>
      </div>
    </>
  );
};

export default FilmById;

export async function getStaticPaths() {
  const {
    data: { results: popularVideos },
  } = await axios(
    "https://api.themoviedb.org/3/movie/popular?api_key=43a2edfebe1afa26db5a2ae6f0468615&language=en-US&page=1"
  );
  return {
    paths: popularVideos.map(({ id: filmId }) => ({
      params: { filmId: filmId.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.filmId;
  const { data: videoDetail } = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=43a2edfebe1afa26db5a2ae6f0468615&language=en-US`
  );
  return {
    props: {
      videoDetail,
    },
  };
}
