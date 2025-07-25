import { useEffect } from "react";
import { Button, Col, Container, Row, Spinner, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Home.css";
import {
  deleteMoviesAsync,
  getAllMoviesAsync,
} from "../Services/Actions/MovieAction";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";

const Home = () => {
  const { movies, isLoading, errMSG } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllMoviesAsync());
  }, []);

  const handleEdit = (id) => navigate(`/edit-movie/${id}`);
  const handleDelete = (id) => dispatch(deleteMoviesAsync(id));
  const handleView = (id) => navigate(`/single-movie/${id}`);

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-image"
              src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1752480481315_untildawnflashsaleweb.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-image"
              src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744877848242_revplaycard1240x300.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-image"
              src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1749205596171_krishnaahmedabaddesktopjune.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container><h3 className="section-title text-center mt-5 mb-4">Recommended Movies</h3></Container>

      {errMSG && <div className="error-banner text-center"><p className="error-text">{errMSG}</p></div>}

      {isLoading ? (
        <div className="loading-section">
          <div className="custom-spinner spinner-border text-danger"></div>
          <p className="loading-text">Loading...</p>
          <p className="loading-subtext">Please wait while we fetch your movies.</p>
        </div>
      ) : (
        <Container className="movies-container">
          {movies.length === 0 ? (
            <div className="no-movies-section">
              <div className="no-movies-icon">🎬</div>
              <div className="no-movies-title">No Movies Found...</div>
              <p className="no-movies-text">Try adding a new movie to get started with your collection.</p>
            </div>
          ) : (
            <Row className="movies-grid">
              {movies.map((movie) => (
                <Col key={movie.id} sm={6} md={4} lg={3} className="movie-col">
                  <div className="product-card">
                    <div className="movie-poster">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="product-image"
                      />
                      <div className="movie-overlay">
                        <div className="overlay-content">
                          <button
                            className="action-btn edit-action"
                            onClick={() => handleEdit(movie.id)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="action-btn view-action"
                            onClick={() => handleView(movie.id)}
                          >
                            <FaEye />
                          </button>
                          <button
                            className="action-btn delete-action"
                            onClick={() => handleDelete(movie.id)}
                          >
                            <FaRegTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product-card-body">
                      <div className="product-title">{movie.title}</div>
                      <div className="movie-genre">{movie.category}</div>
                      <p className="product-info">{movie.desc}</p>
                      <div className="book-section">
                        <button className="book-ticket-btn">Book Now</button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      )}
    </>
  );
};

export default Home;
