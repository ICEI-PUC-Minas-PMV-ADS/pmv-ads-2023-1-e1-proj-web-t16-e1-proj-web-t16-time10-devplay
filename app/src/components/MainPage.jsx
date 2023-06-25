import React, { useState } from 'react';
import Trails from "../components/Rails";
import MainMenu from "../components/main-menu";
import LogoDevPlay from "../images/DevPlayLogo.svg";
import { FaBars } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import SidebarVideo from "../components/Sidebar";
import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
import styled from "styled-components";
import courses from "../data/courses.json";
import UserInfoModal from '../components/UserInfoModal';

export async function loader({ params }) {
  const selectedCourse = courses.find(course => course.titleId === parseInt(params.titleId));
  return { selectedCourse };
}

function MainPage() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedCourse } = useLoaderData() || {};

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

        <FiUser size="20px" onClick={handleOpenModal} />
      </TopBar>

      <main>
        <MainMenu menuVisibility={menuVisibility} />
        <Trails courses={courses} />
      </main>

      {selectedCourse && (
        <SidebarVideo selectedCourse={selectedCourse} />
      )}

      {isModalOpen && <UserInfoModal onClose={handleCloseModal} />}
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
