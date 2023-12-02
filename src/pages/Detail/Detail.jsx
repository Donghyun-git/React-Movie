import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { movieDetailGetFetch } from "../../apis/movieDetailGetFetch";

const Detail = () => {
  const params = useParams();
  const { id: movieCd } = params;

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const call = async () => {
      try {
        const {
          data: {
            movieInfoResult: { movieInfo },
          },
        } = await movieDetailGetFetch(movieCd);

        setInfo({ ...movieInfo });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(info);

  const {
    actors,
    audits,
    directors,
    genres,
    movieNm,
    movieNmEn,
    prdtStatNm,
    prdtYear,
    typeNm,
  } = info;

  return loading ? (
    <div>로딩중입니다..</div>
  ) : (
    <div>
      <div>
        <h1>
          {movieNm} ({movieNmEn})
        </h1>
        <div>
          <div>감독</div>
          <div>
            {directors?.map((director, i) => (
              <>
                <span key={i}>{director.peopleNm}</span> <br />
              </>
            ))}
          </div>
        </div>
        <div>{audits?.map((rule) => rule.watchGradeNm)}</div>
        <div>
          {prdtYear}년 {prdtStatNm}
        </div>
      </div>

      <div>
        <div>장르</div>
        <div>
          {genres?.map((genres, i) => (
            <div key={i}>{genres.genreNm}</div>
          ))}
        </div>
      </div>

      <div>
        배우들
        <ul style={{ listStyle: "none" }}>
          {actors?.map((actor, i) => (
            <li key={i}>
              <div>
                이름:{actor.peopleNm} 배역:{actor.cast}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>영화 유형: {typeNm}</div>
    </div>
  );
};

export default Detail;
