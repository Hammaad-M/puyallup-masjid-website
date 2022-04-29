import React from "react";
import { List, ThemeIcon } from "@mantine/core";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Contact = () => {
  const contactOptions = [
    {
      o: "Email: Puyallupmasjid@gmail.com",
      i: <HiOutlineMail />,
      link: "mailto:Puyallupmasjid@gmail.com",
    },
    {
      o: "Phone: Abdul Karim Khan (775 315 7301)",
      i: <HiOutlinePhone />,
      link: "tel:7753157301",
    },
    {
      o: "Address: 11202 152nd St E, Puyallup, WA 98374",
      i: <HiOutlineLocationMarker />,
      link: "https://goo.gl/maps/b2nyZQX9i8q7Uspn6",
    },
  ];
  return (
    <div id="contact" className="section">
      <h1 className="heading">Contact</h1>
      <List size="sm">
        {contactOptions.map((g) => (
          <List.Item
            className="lg:text-lg flex content-center underline text-primary"
            icon={
              <ThemeIcon
                className="bg-primary lg:px-2 lg:w-9 lg:h-9"
                size={24}
                radius="xl"
                my={2}
              >
                {g.i}
              </ThemeIcon>
            }
          >
            <a className="" target="_blank" rel="noreferrer" href={g.link}>
              {g.o}
            </a>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default Contact;
