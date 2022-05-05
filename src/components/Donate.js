import React from "react";
import { List, ThemeIcon } from "@mantine/core";
import { SiZelle } from "react-icons/si";
import { FaMoneyCheck } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import PrimaryButton from "./PrimaryButton";
const Donate = () => {
  const donationOptions = [
    { o: "Zelle: puyallupmasjid@gmail.com", i: <SiZelle /> },
    { o: 'Check to: "Puyallup Islamic Center Community"', i: <FaMoneyCheck /> },
    { o: "Cash: Visit Fundraiser", i: <BsCash /> },
  ];
  return (
    <div id="donation" className="section -mt-8 md:mt-0">
      <h1 className="heading">Donation</h1>
      <p className="desc text-left">
        <h3>Options</h3>
        <List size="sm">
          {donationOptions.map((g) => (
            <List.Item
              className="lg:text-lg"
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
              {g.o}
            </List.Item>
          ))}
        </List>
      </p>
      <div className="w-max relative m-auto rounded-md pt-3">
        <a
          className="mt-3 sm:mt-0 sm:ml-3"
          target="_blank"
          rel="noreferrer"
          href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiUHV5YWxsdXAgSXNsYW1pYyBDb21tdW5pdHkgQ2VudGVyIiwiYWN0aW9uIjoicGF5bWVudCIsInRva2VuIjoicHV5YWxsdXBtYXNqaWRAZ21haWwuY29tIn0="
        >
          <PrimaryButton icon={<SiZelle />} text={"Donate with Zelle"} />
        </a>
      </div>
    </div>
  );
};

export default Donate;
