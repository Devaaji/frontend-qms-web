import { useEffect } from "react";

import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { useDashboard } from "../../../context/dashboard/DashboardProvider";
import DashboardSidebarItem from "../DashboardSidebarItem";

const DashboardSidebarMobile = ({ items }) => {
  const { pathname } = useRouter();
  const { isMobileSidebarOpened, onSidebarToggle } = useDashboard();

  useEffect(() => {
    if (isMobileSidebarOpened) onSidebarToggle();
  }, [pathname]);

  return (
    <Box>
      <Drawer
        isOpen={isMobileSidebarOpened}
        onClose={onSidebarToggle}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box py="6" h="100vh" overflow="auto" bg="white">
            <Center>
              <Text>Logo</Text>
            </Center>
            <Flex as="nav" flexDirection="column" align="stretch" mt="12">
              {items.map((item, index) => (
                <DashboardSidebarItem
                  key={index}
                  item={item}
                  pathname={pathname}
                />
              ))}
            </Flex>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default DashboardSidebarMobile;
