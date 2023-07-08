import { Box, Flex, Icon, Link, } from "@chakra-ui/react";
import { TopNavItems } from "../utils/navigation.util";

export function TopNav() {
  return (
    <Box minH="100vh">
      <Box
        pos="fixed"
        h="full"
      >
        <Flex
          alignItems="center"
          justifyContent="end"
        >
          {TopNavItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          color: "primary",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
