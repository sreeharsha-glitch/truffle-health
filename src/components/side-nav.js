import { Box, Flex, Spacer, Icon, Image, Link, useStyleConfig } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { BottomItems, LinkItems } from "../utils/navigation.util";

export function SideNav() {
  return (
    <Box minH="100vh">
      <Box
        w={60}
        pos="fixed"
        h="full"
      >
        <Flex direction="column" h="full" pt="3rem" pb="2rem">
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
            <Image src='/images/truffle_logo.svg' alt='Truffle Health' boxSize="40px" />
          </Flex>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} href={link.href}>
              {link.name}
            </NavItem>
          ))}
          <Spacer />
          {BottomItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} href={link.href}>
              {link.name}
            </NavItem>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

const NavItem = ({ icon, href, children, ...rest }) => {
  return (
    <Link as={RouterLink}
      to={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        py="2"
        px="4"
        mx="2"
        borderRightRadius="full"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "primary",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
