import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function Header() {
    return (
        <Navbar fluid className="dark:bg-white">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold">Anggara</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Anggara Yogha Prakasa </span>
                        <span className="block truncate text-sm font-medium">anggarayoghaprakasa098@gmail.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>About</Dropdown.Item>
                    <Dropdown.Item>Services</Dropdown.Item>
                    <Dropdown.Item>Pricing</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="https://www.youtube.com/@ano2242">Youtube</Navbar.Link>
                <Navbar.Link href="https:/wa.me/+6287811048006">WhatshApp</Navbar.Link>
                <Navbar.Link href="https://www.instagram.com/elgadalopez/">Instagram</Navbar.Link>
                <Navbar.Link href="https://www.linkedin.com/in/anggara-yogha-prakasa-7802b32b7/ ">Linkendln</Navbar.Link>
                <Navbar.Link href="https://github.com/elgadalopez">Github</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
