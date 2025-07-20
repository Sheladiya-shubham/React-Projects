import { useEffect } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteMovie,
  getAllMovies,
  getAllMoviesAsync,
  loading,
} from "../Services/actions/MovieActions";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";

const Home = () => {
 const { movies, isLoading } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-movie/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };
  const handleView = (id) => {
    navigate(`/single-movie/${id}`);
  };

  useEffect(() => {
    dispatch(getAllMoviesAsync());
  }, []);

  return (
      <>
      <h1 className="text-center mt-4">Home Page</h1>

      {isLoading ? (
        <div className="text-center mt-5">
          <h2>Loading...</h2>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container className="mt-4 mb-5">
          {movies.length === 0 ? (
            <h2 className="text-center mt-5">No Movies Found...</h2>
          ) : (
            <Row className="g-4">
              {movies.map((movie) => (
                <Col key={movie.id} sm={6} md={4} lg={3}>
                  <div className="product-card ">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="product-image"
                      />
                    <div className="product-card-body">
                      <div className="product-title text-center">{movie.title}</div>
                      <div className="product-info text-center">{movie.desc}
                        <br />
                        <strong>Category:</strong> {movie.category} <br />
                      </div>
                      <div className="product-actions">
                        <Button variant="primary" size="sm" onClick={() => handleEdit(movie.id)}>
                          <FaEdit /> </Button>
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => handleView(movie.id)}
                        >
                          <FaEye />
                        </Button>
                        <Button
                          variant="danger"
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