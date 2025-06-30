import React from "react";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const timelineData = [
  {
    date: "February 2022",
    title: "Application UI code in Tailwind CSS",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and more.",
  },
  {
    date: "March 2022",
    title: "Marketing UI design in Figma",
    description:
      "All of the pages and components are first designed in Figma and we maintain parity between the two versions.",
  },
  {
    date: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

const Open: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">📌 Project Timeline</h2>
      <Timeline>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelinePoint className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" />
            <TimelineContent className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <TimelineTime className="text-gray-600 font-semibold">{item.date}</TimelineTime>
              <TimelineTitle className="text-xl font-semibold text-blue-700">{item.title}</TimelineTitle>
              <TimelineBody className="text-gray-700 leading-relaxed">{item.description}</TimelineBody>
              <Button color="blue" className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 transition duration-300 px-5 py-2 rounded-lg text-white">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Open;