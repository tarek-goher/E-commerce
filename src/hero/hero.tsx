import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import Icons from "./hero-icons";

export default function Hero() {
  const theme = useTheme();

  const myslider = [
    { text: "wOMEN", link: "src/assets/istockphoto-1018293976-612x612.jpg" },
    { text: "MEN", link: "src/assets/banner-15.jpg" },
  ];
  return (
    <Container>
      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 1,
          ".slid-border": {
            ":hover": { cursor: "grab" },
            ":active": { cursor: "grabbing" },
          },
        }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {myslider.map((index) => {
            return (
              <SwiperSlide key={index.link} className="slid-border">
                <img className="imges" src={index.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "8%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: "5px",
                      pb: "6px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h6"
                  >
                    LiFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 400,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {" "}
                    {index.text}
                  </Typography>
                  <Stack
                    sx={{ justifyContent: "center" }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
                    <Typography variant="h4" color="#D23F57">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                  >
                    Get Free Shoping On Orders Over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      bgcolor: "#222",
                      color: "#fff",
                      boxshadow: " 0px 4px 16px rgba( 43, 52, 69, 0.1 )",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxshadow: " 0px 4px 16px rgba( 43, 52, 69, 0.1 )",
                      },
                    }}
                  >
                    SHOPE NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box
          sx={{ display: { xs: "none", md: "block", minWidth: "27%", my: 1 } }}
        >
          <Box
            sx={{
              mb: "3px",
              position: "relative",
            }}
          >
            <img src="src\assets\banner-17.jpg" width={"100%"} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "31PX",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                {" "}
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                {" "}
                sUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                {" "}
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: "15px",
                  "&:hover": { color: "#D23F57" },
                }}
                href=""
                underline="none"
              >
                shope now
                <ArrowForward sx={{ fontSize: "15px" }} />
              </Link>
            </Stack>
          </Box>
          <Box
            className=""
            sx={{
              position: "relative",
            }}
          >
            <img src="src\assets\banner-16.jpg" width={"100%"} />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "31PX",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                {" "}
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                {" "}
                DESKTOPS &
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                {" "}
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: "15px",
                  "&:hover": { color: "#D23F57" },
                }}
                href=""
                underline="none"
              >
                shope now
                <ArrowForward sx={{ fontSize: "15px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Icons />
    </Container>
  );
}
