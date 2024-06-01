import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="imagenSola">
      <img
        className="imgCamion"
        src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/CAMION%20LOGINCOR%207-03.jpg?alt=media&token=b8b341bf-86fc-4699-aa3c-6c23a3e3f224"
        alt="..."
      />
    </div>
  );
};

// const Carousel = () => {
//   return (
//     <div className="carousel-wrapper">
//       <div id="carouselExampleIndicators" className="carousel slide">
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/camion%20logincor%206-03.jpg?alt=media&token=08c217e8-0656-4d92-8c9b-7c0dff370daa"
//               className="imageCarousel w-100"
//               alt="..."
//             />
//           </div>
//           {/* <div className="carousel-item">
//             <img
//               src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/IMG_8559.jpg?alt=media&token=75e075ca-4fc5-4f7d-b729-9bbc8bf2fc10"
//               className="imageCarousel w-98"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/IMG_8561.jpg?alt=media&token=d51d1e4f-47f1-4245-8ef8-abfd79c9f6b9"
//               className="imageCarousel w-98"
//               alt="..."
//             />
//           </div> */}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

export default Carousel;
