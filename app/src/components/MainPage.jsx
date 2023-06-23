import React from 'react';
import Trails from "../components/Rails";
import MainMenu from "../components/main-menu";
import LogoDevPlay from "../images/DevPlayLogo.svg";
import { FaBars } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import SidebarVideo from "../components/Sidebar";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import courses from "../data/courses.json";

export async function loader({ params }) {
  const selectedCourse = courses.find(course => course.titleId === parseInt(params.titleId));
  return { selectedCourse };
}

function MainPage() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const { selectedCourse } = useLoaderData() || {};

  return (
    <>
      <TopBar>
        <FaBars
          size="20px"
          onClick={() => setMenuVisibility(!menuVisibility)}
        />

        <img
          src={LogoDevPlay}
          alt="Logo"
          width="150px"
        />

        <FiUser size="20px" />
      </TopBar>

      <main>
        <MainMenu menuVisibility={menuVisibility} />
        <Trails courses={courses} />
      </main>

      {selectedCourse && (
        <SidebarVideo selectedCourse={selectedCourse} />
      )}
    </>
  );
}

export default MainPage;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #076094;
  align-items: center;
`;
 