import React from 'react';
import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { useRouter } from 'next/router';

const DashboardUserNavbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <>
      <Menu placement="bottom-end" isLazy>
        <MenuButton aria-label="Options" bg="transparent" variant="ghost">
          <Box>
            <Avatar
              loading="lazy"
              variant="outline"
              src=""
              size={{ base: 'sm', md: 'md' }}
            />
          </Box>
        </MenuButton>
        <Portal>
          <MenuList zIndex={15}>
            <HStack m="3">
              <VStack alignItems="left">
                <HStack>
                  <Text fontSize="md" fontStyle="heading" fontWeight="bold">
                    Hai,
                  </Text>
                  <Text
                    size="title-small"
                    fontStyle="heading"
                    fontWeight="bold"
                  >
                    Deva Aji
                  </Text>
                </HStack>
                <Text fontSize="sm" fontStyle="heading">
                  Divisi : Kendaraan Khusus
                </Text>
              </VStack>
            </HStack>
            <NextLink href="/profile" passHref>
              <MenuItem as="a" icon={<FiUsers />}>
                Profil Pengguna
              </MenuItem>
            </NextLink>
            <MenuItem
              onClick={handleLogout}
              color="red"
              icon={<FiLogOut color="ims-red" />}
            >
              Keluar
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
};

export default DashboardUserNavbar;
