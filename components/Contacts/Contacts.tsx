import { Anchor, createStyles } from '@mantine/core';
import { Group } from '@mantine/core';
import { IoLogoGithub } from 'react-icons/io';
import { BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import * as React from 'react';



const style = createStyles((theme) => ({
    icon: {
        color: theme.colorScheme === "light" ? theme.black : theme.white,
    },

}));

export default function Contacts() {
    const { classes } = style();
    return (
        <>
            <Group spacing="xl">
                <Anchor className={classes.icon} href="https://github.com/EkawaD" target="_blank" rel="noopener noreferrer"><IoLogoGithub size="1.5em" /></Anchor>
                <Anchor className={classes.icon} href="https://www.linkedin.com/in/bastien-ederhy/" target="_blank" rel="noopener noreferrer"><BsLinkedin size="1.3em" /></Anchor>
                <Anchor className={classes.icon} href={`mailto:ederhy.bastien@gmail.com`} target="_blank" rel="noopener noreferrer"><GrMail size="1.4em" /></Anchor>
                <Anchor className={classes.icon} href={`tel:0785804336`} target="_blank" rel="noopener noreferrer"><BsFillTelephoneFill size="1.2em" /></Anchor>
            </Group>
        </>
    );

}