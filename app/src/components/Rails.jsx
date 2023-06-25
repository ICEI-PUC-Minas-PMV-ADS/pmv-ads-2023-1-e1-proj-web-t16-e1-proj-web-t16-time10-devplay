import React, { useState } from 'react';
import courses from '../data/courses.json';
import styled from 'styled-components';
import ExemploDeThumb from "../images/Exemplo2.svg";
import SidebarVideo from './Sidebar';

const Trail = () => {
  const uniqueTypes = Array.from(new Set(courses.flatMap(course => course.type || [])));
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openSidebar = (course) => {
    setSelectedCourse(course);
  };

  const closeSidebar = () => {
    setSelectedCourse(null);
  };

  return (
    <TrailContainer>
      {uniqueTypes.map(type => (
        <CourseGroup key={type}>
          <CourseType>{type}</CourseType>
          <CourseList>
            {courses
              .filter(course => course.type && course.type.includes(type))
              .map(course => (
                <CourseCard key={course.titleId} onClick={() => openSidebar(course)}>
                  <CourseImage src={ExemploDeThumb} alt={course.nome} />
                  <CourseName>{course.nome}</CourseName>
                </CourseCard>
              ))}
          </CourseList>
        </CourseGroup>
      ))}
      <SidebarVideo active={selectedCourse !== null} closeSidebar={closeSidebar} course={selectedCourse} />
    </TrailContainer>
  );
};

const TrailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CourseGroup = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const CourseType = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
`;

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CourseCard = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #01002f;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 20px;
  color: white;
`;

const CourseImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CourseName = styled.h3`
  font-size: 18px;
`;

export default Trail;
