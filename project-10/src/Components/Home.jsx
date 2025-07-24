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

      {errMSG && <p className="text-center text-danger">{errMSG}</p>}

      {isLoading ? (
        <div className="text-center mt-5">
          <h2>Loading...</h2>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container className="mt-3 mb-5">
          {movies.length === 0 ? (
            <h4 className="text-center mt-5">No Movies Found...</h4>
          ) : (
            <Row className="g-4">
              {movies.map((movie) => (
                <Col key={movie.id} sm={6} md={4} lg={3}>
                  <div className="product-card">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="product-image"
                    />
                    <div className="product-card-body">
                      <div className="product-title">{movie.title}</div>
                      <div className="product-info text-muted">
                        {movie.desc}
                        <br />
                        <strong>Category:</strong> {movie.category}
                      </div>
                      <div className="product-actions">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleEdit(movie.id)}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => handleView(movie.id)}
                        >
                          <FaEye />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(movie.id)}
                        >
                          <FaRegTrashAlt />
                        </Button>
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
