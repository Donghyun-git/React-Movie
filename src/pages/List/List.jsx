import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { MovieItem } from "../../components/MovieItem";

import { dayBoxOfficeForeignGetFetch } from "../../apis/dayBoxOfiiceGetFetch";
import { dayBoxOfficeKoreaGetFetch } from "../../apis/dayBoxOfiiceGetFetch";

const List = () => {
  const location = useLocation();
  const date = location?.state?.date;

  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const call = async () => {
      try {
        const {
          data: {
            boxOfficeResult: { dailyBoxOfficeList: koreaMovieList },
          },
        } = await dayBoxOfficeKoreaGetFetch(date);
        const {
          data: {
            boxOfficeResult: { dailyBoxOfficeList: foriegnMovieList },
          },
        } = await dayBoxOfficeForeignGetFetch(date);

        setMovieList([...koreaMovieList, ...foriegnMovieList]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <div>
      <h2>로딩중입니다.</h2>
    </div>
  ) : (
    movieList?.map((movie) => (
      <MovieItem
        key={movie.movieCd}
        movieCd={movie.movieCd}
        title={movie.movieNm}
        audiCnt={movie.audiCnt}
        rank={movie.rank}
      />
    ))
  );
};

export default List;
