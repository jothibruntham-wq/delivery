import React from "react";
import {
  Star,
  Quote,
  Heart,
  MessageCircle,
  Utensils,
} from "lucide-react";
import "../assets/style/style.css";

const reviews = [
  {
    name: "Priya Sharma",
    date: "October 24, 2026",
    food: "Classic Cheese Burger",
    rating: 5,
    text: "Absolutely delicious! The burger was juicy, fresh, and full of flavor. The presentation was beautiful too!",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    avatar: "P",
  },
  {
    name: "Arun Kumar",
    date: "October 22, 2026",
    food: "Italian Margherita Pizza",
    rating: 5,
    text: "One of the best pizzas I have tried. The cheese was perfect and the crust was crispy. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800",
    avatar: "A",
  },
  {
    name: "Sneha Reddy",
    date: "October 20, 2026",
    food: "Creamy Pasta",
    rating: 4,
    text: "The pasta was creamy, tasty, and served fresh. I loved the flavors and the overall experience.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    avatar: "S",
  },
];

function Reviews() {
  return (
    <div id="reviews" className="reviews-page">
      <nav className="review-nav" data-aos="fade-down" data-aos-duration="600">
        <a href="/" className="review-logo">
          <span className="logo-icon"><Utensils size={23} /></span>
          Food<span className="logo-highlight">Mood</span>
        </a>

        <div className="review-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/reviews" className="active-link">Reviews</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/menu" className="nav-order-btn">Order Now ↗</a>
      </nav>

      <section className="review-hero">
        <div
          className="hero-text"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <span className="eyebrow">
            <Heart size={15} fill="currentColor" /> MADE WITH LOVE
          </span>

          <h1>
            Real food.
            <br />
            <span>Real happiness.</span>
          </h1>

          <p>
            Good food brings people together. Discover what our
            happy customers are saying about their favorite bites.
          </p>

          <a href="#customer-reviews" className="hero-review-btn">
            Read Customer Reviews <span>↘</span>
          </a>
        </div>

        <div
          className="hero-food"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1000"
            alt="Freshly prepared pizza"
          />
          <div className="floating-rating">
            <div className="rating-stars">★★★★★</div>
            <strong>4.9/5</strong>
            <small>Loved by foodies</small>
          </div>
          <div className="food-sticker">100%<br />TASTY!</div>
        </div>
      </section>

      <section className="review-stats">
        <div data-aos="zoom-in" data-aos-delay="0" data-aos-duration="600">
          <strong>4.9<span>/5</span></strong>
          <p>Average Rating</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600">
          <strong>2.5K<span>+</span></strong>
          <p>Happy Customers</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600">
          <strong>98<span>%</span></strong>
          <p>Would Recommend</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="600">
          <strong>Fresh</strong>
          <p>Every Single Day</p>
        </div>
      </section>

      <section className="customer-reviews" id="customer-reviews">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="700">
          <div>
            <span className="eyebrow">CUSTOMER LOVE</span>
            <h2>What people <span>say.</span></h2>
          </div>
          <p>
            Every bite tells a story. Here are some of our
            customers' favorite moments.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article
              className="review-card"
              key={review.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="600"
            >
              <div className="review-image-wrap">
                <img src={review.image} alt={review.food} />
                <span className="verified-tag">✓ Verified Review</span>
              </div>

              <div className="review-card-content">
                <div className="review-card-top">
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <Quote size={24} className="quote-icon" />
                </div>

                <h3>{review.food}</h3>
                <p className="review-description">"{review.text}"</p>

                <div className="review-divider" />

                <div className="review-author">
                  <div className="review-avatar">{review.avatar}</div>
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.date}</span>
                  </div>
                  <Heart className="author-heart" size={19} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="review-cta" data-aos="zoom-in" data-aos-duration="700">
        <div className="cta-icon">
          <MessageCircle size={30} />
        </div>
        <h2>Your opinion makes us better.</h2>
        <p>
          Have you tried our food? Share your experience
          and help other food lovers find their next favorite meal.
        </p>
        <button
          className="write-review-btn"
          onClick={() =>
            document.getElementById("write-review").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Write a Review <span>↗</span>
        </button>
      </section>

      <ReviewForm />

      <footer className="review-footer" data-aos="fade-in">
        <a href="/" className="review-logo">
          <Utensils size={21} /> Food<span className="logo-highlight">Mood</span>
        </a>
        <p>Good food. Good mood. Great memories.</p>
        <span>© 2026 FoodMood. Made with ♥</span>
      </footer>
    </div>
  );
}

function ReviewForm() {
  const [name, setName] = React.useState("");
  const [food, setFood] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="write-review-section" id="write-review">
      <div className="write-review-card" data-aos="fade-up" data-aos-duration="800">
        <span className="eyebrow">YOUR TURN</span>
        <h2>Share your <span>food story.</span></h2>
        <p>Tell us what you loved about your meal.</p>

        {submitted ? (
          <div className="review-success">
            <div className="success-icon">✓</div>
            <h3>Thank you, {name}!</h3>
            <p>Your review has been added to this session.</p>
            <button onClick={() => {
              setSubmitted(false);
              setName("");
              setFood("");
              setRating(5);
              setComment("");
            }}>
              Write Another Review
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="review-form">
            <label htmlFor="review-name">Your Name</label>
            <input
              id="review-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />

            <label htmlFor="review-food">Food You Tried</label>
            <input
              id="review-food"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="e.g. Cheese Burger"
              required
            />

            <label>Your Rating</label>
            <div className="rating-picker">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  onClick={() => setRating(star)}
                  className={star <= rating ? "selected-star" : ""}
                >
                  <Star
                    size={30}
                    fill={star <= rating ? "currentColor" : "none"}
                  />
                </button>
              ))}
              <span>{rating}/5</span>
            </div>

            <label htmlFor="review-comment">Your Review</label>
            <textarea
              id="review-comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={4}
              required
            />

            <button type="submit" className="submit-review-btn">
              Submit Review ↗
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Reviews;