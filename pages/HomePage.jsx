"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown, BiLoaderCircle } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    id: 1,
    src: "/images/fast_furious1.jpg",
    alt: "fast_furious1",
    tag: "fast_furious",
  },
  {
    id: 2,
    src: "/images/fast_furious2.jpg",
    alt: "fast_furious2",
    tag: "fast_furious",
  },
  {
    id: 3,
    src: "/images/fast_furious3.jpg",
    alt: "fast_furious3",
    tag: "fast_furious",
  },

  { id: 4, src: "/images/godfather.jpg", alt: "godfather", tag: "godfather" },
  {
    id: 5,
    src: "/images/heart_stone.jpg",
    alt: "heart_stone",
    tag: "heart stone",
  },
  {
    id: 6,
    src: "/images/shawnshank.jpg",
    alt: "shawnshank",
    tag: "shawnshank",
  },
  {
    id: 7,
    src: "/images/spider_man1.jpg",
    alt: "spiderman",
    tag: "spiderman",
  },
  {
    id: 8,
    src: "/images/spider_man2.jpg",
    alt: "spiderman",
    tag: "spiderman",
  },
  {
    id: 9,
    src: "/images/spider_man3.jpg",
    alt: "spiderman",
    tag: "spiderman",
  },
  {
    id: 10,
    src: "/images/transformer1.jpg",
    alt: "transformer",
    tag: "transformer",
  },
  {
    id: 11,
    src: "/images/transformer2.jpg",
    alt: "transformer",
    tag: "transformer",
  },
  {
    id: 12,
    src: "/images/transformer3.jpg",
    alt: "transformer",
    tag: "transformer",
  },
];

const HomePage = () => {
  const [searchResults, setSearchResults] = useState(images);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dragged, setDragged] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const dragSection = useRef(null);
  const draggedOverSection = useRef(null);

  const handleDragStart = (index) => {
    setDragged(!dragged);
    dragSection.current = index;
  };

  const handleDragEnter = (index) => {
    setDragged(true);
    if (dragSection.current !== null) {
      draggedOverSection.current = index;
    }
  };

  const handleSort = () => {
    setDragged(!dragged);

    if (dragSection.current !== null && draggedOverSection.current !== null) {
      const searchResultsClone = [...searchResults];
      const temp = searchResultsClone[dragSection.current];
      searchResultsClone[dragSection.current] =
        searchResultsClone[draggedOverSection.current];
      searchResultsClone[draggedOverSection.current] = temp;
      setSearchResults(searchResultsClone);
      dragSection.current = null;
      draggedOverSection.current = null;
    }
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        const filteredResults = images.filter((image) =>
          image?.tag.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while searching.");
        setLoading(false);
      }
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const scrollThreshold = 80;

      if (scrollHeight > scrollThreshold && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (scrollHeight <= scrollThreshold && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarFixed]);

  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: -3000,
      delay: 0,
      duration: 400,
      easing: "ease",
      disable: () => {
        const maxWidth = 1024;
        return window.innerWidth < maxWidth;
      },
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <nav
        className={`nav ${isNavbarFixed ? "nav_fixed" : ""}`}
        data-aos="flip-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="nav_inner container_main">
          <div className="nav_left">
            <span>
              <TfiGallery />
            </span>
            <p>ImageGallery</p>
          </div>

          <div className="nav_middle">
            <div className="nav_middle_inner">
              <input
                type="text"
                placeholder="What do you want to watch?"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {loading ? (
                <BiLoaderCircle className="mr-2 animate-spin" size={22} />
              ) : (
                <span>
                  <AiOutlineSearch />
                </span>
              )}
            </div>
          </div>

          <div className="nav_right">
            <div className="nav_right_inner">
              <p>user@example.com</p>
              <span>
                <BiChevronDown />
              </span>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="mobile_search_bar container_main">
          <div className="mobile_search_bar_inner">
            {loading ? (
              <span>
                <BiLoaderCircle className="mr-2 animate-spin" size={22} />
              </span>
            ) : (
              <span>
                <AiOutlineSearch />
              </span>
            )}
            <input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <section className="hero_sec">
          <div className="hero_inner container_main">
            {loading ? (
              <p className="hero_loading_sec">
                <span>
                  <BiLoaderCircle className="mr-2 animate-spin" size={22} />
                </span>
                Loading...
              </p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : searchResults.length === 0 ? (
              <p>No results found for &quot;{searchQuery}&quot;</p>
            ) : (
              <div className="hero_image_container">
                {searchResults.map((image, index) => (
                  <div
                    key={image.id}
                    className={`hero_image_card ${dragged ? "dragged" : ""}`}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragEnd={handleSort}
                    onTouchStart={() => handleDragStart(index)}
                    onTouchMove={() => handleDragEnter(index)}
                    onTouchEnd={handleSort}
                  >
                    {/* MOBILE CARD */}
                    <div className="hero_image_card_inner mobile_card">
                      <Image
                        width={500}
                        height={500}
                        src={image.src}
                        alt={image.tag}
                      />
                    </div>

                    {/*  DESKTOP CARD */}
                    <div className="hero_image_card_inner desktop_card">
                      <Image
                        width={500}
                        height={500}
                        src={image.src}
                        alt={image.tag}
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
