import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export default function Icons() {
  return (
    <Container sx={{}}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Mybox
          icon={<ElectricBolt />}
          title={"Fast Delivery"}
          suptitle={"Start from $10"}
        />
        <Mybox
          icon={<WorkspacePremiumOutlined />}
          title={"Money Guarantee"}
          suptitle={"7 Days Back"}
        />
        <Mybox
          icon={<AccessAlarmOutlined />}
          title={"365 Days"}
          suptitle={"For free return"}
        />
        <Mybox
          icon={<CreditScoreOutlined />}
          title={"Pyment"}
          suptitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

interface MyboxProps {
  icon: React.ReactNode;
  title: string;
  suptitle: string;
}

const Mybox = ({ icon, title, suptitle }: MyboxProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        justifyContent: "center",
        flexGrow: 1,
        gap: 3,
        alignItems: "center",
        py: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {suptitle}
        </Typography>
      </Box>
    </Box>
  );
};
