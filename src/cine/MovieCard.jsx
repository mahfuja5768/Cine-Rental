import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);
  console.log(state?.cardData);

  function handleAddToCart(event, movie) {
    event.stopPropagation();

    const found = state?.cartData?.find((item) => {
      console.log(item);
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      // toast.success(`Added  ${movie.title} to Cart !`, {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      // });
    } else {
      // toast.error( `The movie ${movie.title} has been added to the cart already`, {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      // });
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onCartAdd={handleAddToCart}
          onClose={() => {
            setSelectedMovie(null);
            setShowModal(false);
          }}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a
          href="#"
          onClick={() => {
            setSelectedMovie(movie);
            setShowModal(true);
          }}
        >
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
