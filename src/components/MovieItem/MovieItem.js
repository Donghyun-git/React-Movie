import { useNavigate } from "react-router-dom";

function Movie({ movieCd, title, audiCnt, rank }) {
  const navigate = useNavigate();

  const handleDetailMove = () => {
    navigate(`/list/${movieCd}`);
  };

  return (
    <div>
      <h2>
        영화제목 : {title} {movieCd}{" "}
      </h2>
      <h4>
        {" "}
        관객수 : {audiCnt}, 일간 박스오피스 랭킹 : {rank}
        <br></br>
        <br></br>
      </h4>
      <button onClick={handleDetailMove}> 상세정보 </button>
    </div>
  );
}

export default Movie;
