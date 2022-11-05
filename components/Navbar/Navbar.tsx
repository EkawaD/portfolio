import * as React from 'react';
import { Header, Anchor, Group } from '@mantine/core';
import { AiFillHome } from 'react-icons/ai'
import DropdownMenu from './DropdownMenu';
import createStyles from './Navbar.styles';


export default function Navbar({ height, links, homeButton, className }: { height: string, links: string[], homeButton?: React.ReactNode, className?: string }) {
    const { classes } = createStyles();


    return (
        <>
            <Header height={height} className={className || classes.navbar} fixed >
                <Anchor className={classes.homeButton} href="/"> {homeButton || <AiFillHome size="1.5em" />}</Anchor>
                <Group aria-label="menu">
                    <DropdownMenu links={links} />
                </Group>
            </Header>





        </>
    );
}

