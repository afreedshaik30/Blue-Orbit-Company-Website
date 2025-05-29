import React, { useState, useRef } from "react"; //step-1

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

import work1 from "../assets/images/workImg/work1.jpeg";
import work2 from "../assets/images/workImg/work2.jpeg";
import work3 from "../assets/images/workImg/work3.jpeg";
import work4 from "../assets/images/workImg/work4.jpeg";
import work5 from "../assets/images/workImg/work5.jpeg";
import work6 from "../assets/images/workImg/work6.jpeg";
import work7 from "../assets/images/workImg/work7.jpeg";
import work8 from "../assets/images/workImg/work8.jpeg";
import work9 from "../assets/images/workImg/work9.jpeg";
import work10 from "../assets/images/workImg/work10.jpeg";
import work11 from "../assets/images/workImg/work11.jpeg";
import work12 from "../assets/images/workImg/work12.jpeg";
import work13 from "../assets/images/workImg/work13.jpeg";
import work14 from "../assets/images/workImg/work14.jpeg";
import work15 from "../assets/images/workImg/work15.jpeg";

const worksData = [
  { id: 1, image: work1, title: "Progressive Web App", subtitle: "Frontend" },
  {
    id: 2,
    image: work2,
    title: "Responsive Frontend Design",
    subtitle: "Frontend",
  },
  { id: 3, image: work3, title: "Microservices Backend", subtitle: "Backend" },
  {
    id: 4,
    image: work4,
    title: "Scalable Web App Backend",
    subtitle: "Backend",
  },
  { id: 5, image: work5, title: "Creative UI/UX Design", subtitle: "UI/UX" },
  { id: 6, image: work6, title: "Mobile App UI", subtitle: "UI/UX" },
  {
    id: 7,
    image: work7,
    title: "Mobile App with Firebase",
    subtitle: "Android",
  },
  { id: 8, image: work8, title: "Native Android App", subtitle: "Android" },
  {
    id: 9,
    image: work9,
    title: "Full-Stack Web App",
    subtitle: "Web Development",
  },
  {
    id: 10,
    image: work10,
    title: "eCommerce Website",
    subtitle: "Web Development",
  },
  {
    id: 11,
    image: work11,
    title: "Cloud-Powered Platform",
    subtitle: "Cloud Integration",
  },
  { id: 12, image: work12, title: "Cloud-Integration", subtitle: "Cloud" },
  { id: 13, image: work13, title: "CI/CD Pipeline Setup", subtitle: "DevOps" },
  { id: 14, image: work14, title: "SEO Optimization", subtitle: "SEO" },
  {
    id: 15,
    image: work15,
    title: "Mobile-Friendly Website",
    subtitle: "Mobile Design",
  },
];

let itemsPerPage = 6; // step-2 : item per single page

const WorkSection = () => {
  // step - 3 : useState and Pagination Logic
  const [activePage, setActivePage] = useState(1); // For current active page

  const totalPages = Math.ceil(worksData.length / itemsPerPage); // To calculate total number of pages based on data (15/6 = 3 pages)

  // Function to handle page change and scroll to top
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get index of first and last item for current page - 0 based index(0-14)
  const indexOfLastItem = activePage * itemsPerPage; // 1 * 6 = 6, 2 * 6  = 12, 3 * 6 = 18

  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 6 - 6 = 0, 12 - 6 = 6,  18 - 6 = 12

  // Slice the data array to show only current page's items
  const currentItems = worksData.slice(indexOfFirstItem, indexOfLastItem); //.slice(0,6)=0-5, .slice(6,12)=6-11, .slice(12,18)=12-14 cause No 15,16,17 index

  const sectionRef = useRef(null);

  return (
    <section id="works" className="block works-block" ref={sectionRef}>
      <Container fluid>
        <div className="title-holder">
          <h2>Our Works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {/* step - 4 : Replace .map() in <Row> with currentItems.map() */}
          {currentItems.map((data) => {
            return (
              <Col sm={4} key={data.id}>
                <div className="portfolio-wrapper">
                  <a href={data.link}>
                    <Image src={data.image} alt={data.title + ".jpg"} />
                    <div className="label text-center">
                      <h3 style={{ color: "yellow" }}>{data.title}</h3>
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
