import "../sass/navigation.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stores from "../component/Stores";
import Foods from "../component/Foods";
import Shopping from "../component/Shopping";
import {
  Header,
  Container,
  Box,
  NavLink,
  Tooltip,
  Flex,
  Group,
} from "@mantine/core";

const Navigation = () => {
  return (
    <Router>
      <Header className="header">
        <Container fluid={true} className="container">
          <Flex
            mih={50}
            gap="xs"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="nowrap"
          >
            <Group spacing={5}>
              <Tooltip label="Shopping" position="right">
                <NavLink component="a" href="/shopping" label="Shopping" />
              </Tooltip>
              <Tooltip label="Foods" position="right">
                <NavLink component="a" href="/foods" label="Foods" />
              </Tooltip>
              <Tooltip label="Stores" position="right">
                <NavLink component="a" href="/stores" label="Stores" />
              </Tooltip>
            </Group>
          </Flex>
        </Container>
      </Header>
      <Box sx={{ padding: "90px 70px" }}>
        <Routes>
          <Route element={<Stores />} path="/stores"></Route>
          <Route element={<Foods />} path="/foods"></Route>
          <Route element={<Shopping />} path="/shopping"></Route>
        </Routes>
      </Box>
    </Router>
  );
};

export default Navigation;
