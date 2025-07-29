import React, { useRef, useEffect } from "react";
import "./Hero.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const eventBanners = [
    { id: 1, image: "/Images/event1.jpg", alt: "Concert" },
    { id: 2, image: "/Images/event2.jpg", alt: "Halwa Show" },
    { id: 3, image: "/Images/event3.jpg", alt: "Unlock Comedy" },
    { id: 4, image: "/Images/event4.jpg", alt: "Music Night" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 600;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // 🔄 Auto-scroll loop
  useEffect(() => {
    const container = scrollRef.current;

    intervalRef.current = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1
      ) {
        // Reached end — loop back to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, 3000); // 3 seconds

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="hero">

      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <ChevronLeft />
        </button>
        <div className="hero-cards" ref={scrollRef}>
          {eventBanners.map((event) => (
            <div className="hero-card" key={event.id}>
              <img src={event.image} alt={event.alt} />
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <ChevronRight />
        </button>
      </div>
      {/* <div className="hero-content">
        <h1>Discover and Book Events Around Tricity</h1>
        <p>Concerts, Plays, Sports, and more!</p>
        <button>Explore Now</button>
      </div> */}
    </section>
  );
}
