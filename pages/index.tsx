import type { NextPage } from "next";
import tw from "tailwind-styled-components";

const Container = tw.div`
  bg-sky-300
  py-10
  px-5
  grid
  grid-cols-4
  gap-2
`;

const Box = tw.div`
  bg-red-100
  flex
  p-10
  rounded-2xl
  shadow-xl
`;

const Home: NextPage = () => {
  console.log("client console.");
  return (
    <Container>
      <Box />
      <Box />
      <Box />
      <Box />
    </Container>
  );
};

export default Home;
