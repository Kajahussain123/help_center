import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import './Home.css';  // Import custom CSS
import { getAllCards } from '../services/api';

function Home() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getAllCards(); 
        setCards(data);
      } catch (error) {
        setError('Failed to fetch cards. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  // Filter cards based on search query
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      
      <div className="search-section py-5">
        <Container className="text-center">
          <h1 className="mb-4">How can we help?</h1>
          <Form className="d-flex justify-content-center">
            <Form.Control 
              type="text" 
              placeholder="Search..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </Container>
      </div>

      <Container className="cards-section my-5">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <Row className="justify-content-center">
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <Col xs={12} sm={6} lg={5} className="mb-4" key={card.id}>
                  <Card className="h-100 card-custom">
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <hr />
                      <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="text-center">No results found.</div>
            )}
          </Row>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
