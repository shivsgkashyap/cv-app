import React, { Component } from "react";
import Content from "./CVContent";
import Header from "./CVHeader";
import Sidebar from "./CVSidebar";

//react-to-print package prints only class components

class CVExample extends Component {
  render() {
    const { cv } = this.props;

    return (
      <div className="grid grid-cols-[2.5fr_1fr] grid-rows-[1fr_8.5fr] sticky top-2.5 self-start bg-zinc-100 w-full shadow-2xl">
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
