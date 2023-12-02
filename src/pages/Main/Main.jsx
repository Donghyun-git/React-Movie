import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dateRef = useRef();
  const navigate = useNavigate();

  /**
   * ------- 코드 옮기는중
   */
  const [date, setDate] = useState("20120101");

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleSetDate = () => {
    dateRef.current.value === ""
      ? setDate("20120101")
      : setDate(dateRef.current.value);
  };

  const handleBoxOfficeMove = () => {
    navigate("/list", { state: { date: date } });
  };

  const handleSearch = () => {
    handleSetDate();
    handleBoxOfficeMove();
  };

  return (
    <div align="center">
      <div id="div1">
        <p> 입력된 date : [ {date} ]</p>
        <p>
          <input
            ref={dateRef}
            id="Cdate"
            name="Cdate"
            placeholder="date값 입력 ex)20120101"
            onChange={handleChangeDate}
          />{" "}
        </p>
        <button onClick={handleSearch}>박스오피스 순위 보기</button>
      </div>
      <hr />
      <div>
        <h1> App.js </h1>{" "}
        <h3>
          {" "}
          상단에 date값을 변경하고 박스오피스 순위를 불러오세요. ex) 20221225{" "}
        </h3>
        <p> (Input값 없이 순위 조회 시 default값 20120101 설정) </p>
      </div>
    </div>
  );
};

export default Main;
