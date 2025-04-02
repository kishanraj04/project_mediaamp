import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { apiCalling } from "../../api/apiCalling";
import { setAllGames } from "../../store/gameData";

export default function PaginationComp() {
  const totalPages = 20;
  const dispatch = useDispatch();
  const [selectedPage, setSelectedPage] = useState(1); // Track active page

  const handlePagination = async (e, pageNumber) => {
    setSelectedPage(pageNumber); // Update active page
    const option = {
      method: "GET",
      url: `https://api.rawg.io/api/games?key=6d633194af394581991e28eb88ce8c1d&page=${pageNumber}`,
    };
    const resp = await apiCalling(option);
    dispatch(setAllGames({ data: resp?.data?.results }));
  };

  return (
    <Swiper
      slidesPerView={10}
      centeredSlides={true}
      spaceBetween={30}
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
              style={{
                backgroundColor: selectedPage === pageNumber ? "#007bff" : "transparent",
                color: selectedPage === pageNumber ? "white" : "black",
                borderRadius: "5px",
                padding: "8px 12px",
                border: "1px solid #007bff",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            >
              {pageNumber}
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
