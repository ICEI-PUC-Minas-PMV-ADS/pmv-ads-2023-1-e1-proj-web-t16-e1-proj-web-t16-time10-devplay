import React from "react";
import styled from "styled-components";
import ItemTrail from "./ItemTrail";

export default function Trails({ courses }) {
  const uniqueTypes = Array.from(new Set(courses.map(course => course.type)));

  return (
    <Wrapper>
      {uniqueTypes.map(type => {
        const filteredCourses = courses.filter(
          course => course.type && course.type.includes(type)
        );

        return (
          <div key={type}>
            <h1>{type}</h1>
            <TrailItems>
              {filteredCourses.map(course => (
                <ItemTrail key={course.titleId} course={course} />
              ))}
            </TrailItems>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TrailItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

// Resto do código...
