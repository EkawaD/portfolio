import createStyles from './Navbar.styles';
import { Burger, MediaQuery, useMantineTheme, Anchor, Menu } from '@mantine/core';
import { useState } from 'react';
import { Group } from '@mantine/core';
import * as React from 'react';






export default function DropdownMenu({ links }: { links: string[] }) {
    const { classes } = createStyles();
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();


    const executeScroll = (link: string) => {
        const id = link.replace(/\s/g, '').toLowerCase()
        document.getElementById(id)?.scrollIntoView()
    }

    return (
        <>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Menu shadow="md" width={150}>
                    <Menu.Target>
                        <Burger
                            opened={opened}
                            onClick={() => {
                                setOpened((o) => !o)
                            }
                            }
                            size="sm"
                            color={theme.colors.gray[6]}
                            m={0}
                        >

                        </Burger>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {links && links.map((link, key) => (
                            <Menu.Item key={key} onClick={() => executeScroll(link)}> {link.toUpperCase()} </Menu.Item>
                        ))}

                    </Menu.Dropdown>

                </Menu>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Group>
                    {links && links.map((link, key) => (
                        <Anchor className={classes.link} onClick={() => executeScroll(link)} key={key}> {link.toUpperCase()} </Anchor>
                    ))}
                </Group>
            </MediaQuery>


        </>
    );
}