import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import { useState } from "react";
  import { me } from "../../../me";
  import { Button } from "react-bootstrap";
  import { TbArrowWaveLeftDown } from "react-icons/tb";
  
  export const profile = () => {
    const [profile] = useState(me.profile);
  
    return (
      <Flex
        id="profile"
        w={"full"}
        maxW={"container.xl"}
        align={"center"}
        justify={"center"}
        direction={"column"}
        p={{ base: 4, md: 8, lg: 16 }}
        tabIndex={-1}
      >
        <Box w={"full"}>
          <Heading as={"h2"} fontSize={{ base: "2xl", md: "3xl" }}>
            Technical Profiles :
          </Heading>
          <br />
          <TryDraggingMe />
  
          <Grid
            mt={4}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={6}
          >
            {profile.map((profile, i) => (
              <GridItem key={`Profile-${i}`}>
                <SingleProject {...profile} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    );
  };
  
  const SingleProject = ({ name, technologies, links, image }: { name: string; technologies: readonly string[]; links: readonly { name: string; uri: string; }[]; image?: string; }) => {
    return (
      <Stack
        direction={"column"}
        w={"full"}
        h={"full"}
        borderRadius={"2xl"}
        border={"1px"}
        bg={useColorModeValue("brand.100", "brand.900")}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        as={motion.div}
        justify={"center"}
        whileTap={{ scale: 0.99, transition: { duration: 0.2 } }}
        p={4}
      >
        <Flex align={"center"} justify={"space-between"}>
          <Heading as={"h3"} fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
            {name}
          </Heading>
          {image && (
            <Image src={image} h={{ base: "85px", md: "75px", lg: "85px" }} w={{ base: "85px", md: "75px", lg: "85px" }} borderRadius={"2xl"} objectFit={"cover"} />
          )}
        </Flex>
        <Stack direction={{ base: "column", sm: "row" }} spacing={2} my={2} wrap={"wrap"} fontSize={"14"} fontWeight={"bold"} align={"Center"} marginRight={0} borderRadius={10} height={"35px"} width={"130px"} color={"blackAlpha.800"} backgroundColor={"brand.100"}>
          {links.map((link) => (
            <Button variant="primary" size="sm" href={link.uri} key={link.name} style={{ margin: "7px" }}>
              {link.name}
            </Button>
          ))}
        </Stack>
        <Stack direction={"row"} wrap={"wrap"} columnGap={3}>
          {technologies.map((technology) => (
            <Pill key={technology}>{technology}</Pill>
          ))}
        </Stack>
      </Stack>
    );
  };
  
  const Pill = ({ children }: { children: string }) => {
    return (
      <Box color={"brand.100"} px={2} py={0.5} borderRadius={"2xl"} fontSize={"sm"} fontWeight={"bold"}>
        {children}
      </Box>
    );
  };
  
  const TryDraggingMe = () => {
    return (
      <Stack p={2} justify={"flex-end"} direction={"row"} align={"center"}>
        <Icon as={TbArrowWaveLeftDown} h={8} w={8} />
        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight={"bold"} fontFamily={"Short Stack"}>
          Checkout the social Profiles 🚀🚀
        </Text>
      </Stack>
    );
  };
  
  export default profile;
  
