import React, { Component } from "react";
import Content from "./CVContent";
import Header from "./CVHeader";
import Sidebar from "./CVSidebar";

//react-to-print package prints only class components

class CVExample extends Component {
  render() {
    const { cv } = this.props;

    return (
      <div className="bg-zinc-100 shadow-2xl flex flex-col lg:grid lg:grid-cols-[2.5fr_1fr] lg:grid-rows-[1fr_8.5fr] lg:sticky lg:top-2.5 lg:self-start lg:w-full">
        <Header personalInfo={cv.personalInfo} />
        <Content
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
        />
        <Sidebar personalInfo={cv.personalInfo} />
      </div>
    );
  }
}

export default CVExample;
