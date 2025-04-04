import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { apiCalling } from "../../api/apiCalling";
import { setAllGames } from "../../store/gameData";
import "../style/pagination.css"; // 👈 Import your CSS

export default function PaginationComp() {
  const totalPages = 20;
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePagination = async (e, pageNumber) => {
    setSelectedPage(pageNumber);
    const option = {
      method: "GET",
      url: `https://api.rawg.io/api/games?key=6d633194af394581991e28eb88ce8c1d&page=${pageNumber}`,
    };
    const resp = await apiCalling(option);
    dispatch(setAllGames({ data: resp?.data?.results }));
  };

  return (
    <Swiper
  slidesPerView={6}
  centeredSlides={true}
  spaceBetween={5} // Reduce space between slides
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
      {Array.from({ length: totalPages }, (_, idx) => {
        const pageNumber = idx + 1;
        return (
          <SwiperSlide key={idx}>
            <button
              onClick={(e) => handlePagination(e, pageNumber)}
              className={`pagination-button ${
                selectedPage === pageNumber ? "active" : ""
              }`}
            >
              {pageNumber}
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
