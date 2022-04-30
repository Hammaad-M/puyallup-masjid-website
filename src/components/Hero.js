import React from "react";
import { Title, Button, Overlay, createStyles } from "@mantine/core";
import { BsChevronDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 180,
    paddingBottom: 130,
    backgroundImage: "url(images/masjid.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 90,
      paddingBottom: 70,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
    "@media (max-width: 520px)": {
      width: "50%",
      position: "relative",
      margin: "auto",
      textAlign: "center",
    },
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: 0,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 32,
      width: "max-content",
      padding: "0",
      textAlign: "center",
      position: "relative",
      margin: "0 auto",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "center",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 640px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
  },
}));

export default function Hero() {
  const { classes, cx } = useStyles();
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div className={classes.wrapper + " relative"}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner + " w-full text-center text-primary"}>
        <Title className={classes.title}>
          {/* <Text
            component="span"
            mr={3}
            inherit
            className={classes.highlight + " text-secondary"}
          >
            Puyallup
          </Text> */}
          Puyallup Masjid
        </Title>

        {/* <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container> */}

        <div
          className={
            classes.controls +
            " w-max relative m-auto mt-12 sm:mt-6 sm:flex sm:gap-3"
          }
        >
          <Button
            onClick={() => {
              gsap.to(window, { duration: 1, scrollTo: "#donation" });
            }}
            className={
              classes.control +
              " bg-primary text-white rounded-sm transition hover:scale-110 hover:mr-1"
            }
            variant="white"
            size="lg"
          >
            Donate
          </Button>
          <a
            className="mt-3 sm:mt-0 "
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/b2nyZQX9i8q7Uspn6"
          >
            <Button
              className={
                cx(classes.control, classes.secondaryControl) +
                " rounded-sm text-primary bg-white transition hover:scale-110 hover:ml-1 hover:bg-white"
              }
              size="lg"
            >
              View on Map
            </Button>
          </a>
        </div>
        <div className="w-5 -mb-5 m-auto relative py-2 mt-6 sm:w-8 sm:-mb-8 sm:mt-8 sm:h-8">
          <BsChevronDown
            className="animate-bounce w-full h-auto"
            color={"white"}
          />
        </div>
      </div>
    </div>
  );
}
