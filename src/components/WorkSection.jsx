import React, { useState } from "react"; //step-1

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    title: "Modern Workspace",
    subtitle: "Web Design",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    title: "Brainstorming Session",
    subtitle: "Branding",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg",
    title: "UX Planning",
    subtitle: "Photography",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg",
    title: "Wireframe Sketches",
    subtitle: "Web Design",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg",
    title: "Color Palette",
    subtitle: "Branding",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg",
    title: "Typography Exploration",
    subtitle: "Photography",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg",
    title: "Mood Board",
    subtitle: "Web Design",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
    title: "Logo Concepts",
    subtitle: "Branding",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
    title: "User Testing",
    subtitle: "Photography",
  },
  {
    id: 10,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184472/pexels-photo-3184472.jpeg",
    title: "Creative Brief",
    subtitle: "Photography",
  },
  {
    id: 11,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
    title: "Brand Guidelines",
    subtitle: "Branding",
  },
  {
    id: 12,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184473/pexels-photo-3184473.jpeg",
    title: "Design System",
    subtitle: "Web Design",
  },
  {
    id: 13,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
    title: "Content Strategy",
    subtitle: "Photography",
  },
  {
    id: 14,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184474/pexels-photo-3184474.jpeg",
    title: "SEO Optimization",
    subtitle: "Branding",
  },
  {
    id: 15,
    link: "https://www.google.com",
    image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    title: "Final Presentation",
    subtitle: "Web Design",
  },
];

let itemsPerPage = 6; // step-2 : item per single page

const WorkSection = () => {
  // step - 3 : useState and Pagination Logic
  const [activePage, setActivePage] = useState(1); // For current active page

  const totalPages = Math.ceil(worksData.length / itemsPerPage); // To calculate total number of pages based on data (15/6 = 3 pages)

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  // Get index of first and last item for current page - 0 based index(0-14)
  const indexOfLastItem = activePage * itemsPerPage; // 1 * 6 = 6, 2 * 6  = 12, 3 * 6 = 18
  
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 6 - 6 = 0, 12 - 6 = 6,  18 - 6 = 12

  // Slice the data array to show only current page's items
  const currentItems = worksData.slice(indexOfFirstItem, indexOfLastItem); //.slice(0,6)=0-5, .slice(6,12)=6-11, .slice(12,18)=12-14 cause No 15,16,17 index

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {/* step - 4 : Replace .map() in <Row> with currentItems.map() */}
          {currentItems.map((data) => {
            return (
              <Col sm={4}>
                <div className="portfolio-wrapper">
                  <a href={data.link}>
                    <Image src={data.image} alt={data.title + ".jpg"} />
                    <div className="label text-center">
                      <h3>{data.title}</h3>
                      <p>{data.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Pagination Component */}
        <Pagination className="justify-content-center mt-4">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={activePage === 1}
          />
          {/* <Pagination.Prev
            onClick={() => handlePageChange(activePage - 1)}
            disabled={activePage === 1}
          /> */}

          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
            (pageNumber) => (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === activePage}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            )
          )}
          {/*
              Array.from({object of totalPages as length}, (_, idx) => idx+1 for 1-Based index) is a static method to create a shallow-copied arr from an iterable arr/obj.
                   Creates an array with totalPages elements.
                   Each element is its 1-based index (page number). 
              
              Array.from().map((pageNumber) => <Pagination.Item></Pagination.Item)     
              */}
          {/* <Pagination.Next
            onClick={() => handlePageChange(activePage + 1)}
            disabled={activePage === totalPages}
          /> */}
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={activePage === totalPages}
          />
        </Pagination>
      </Container>
    </section>
  );
};

export default WorkSection;
