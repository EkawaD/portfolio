import { Card, Image, Text, Button, Group, Anchor } from '@mantine/core';
import { IoLogoGithub } from 'react-icons/io';
import { FiExternalLink } from 'react-icons/fi';
import * as React from 'react';




export default function Projects({ project, className }: { project: Project, className?: string }) {
    const storageUrl = "https://hpxxxyoxbnfnfwzwymxv.supabase.co/storage/v1/object/public/olympus/"
    return (
        <>
            <Card
                shadow="md"
                p="xl"
                className={className}
            >
                <Card.Section style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                        src={storageUrl + project.image}
                        alt="project_image"
                        width={300}
                        height={300}
                    />
                    <div style={{ padding: "1rem", paddingTop: "1rem", maxWidth: "70%" }}>
                        <Text weight={500} size="lg" mt="md">
                            {project.title}
                        </Text>

                        <Text mt="xs" mb="md" color="dimmed" size="sm">
                            {project.description}
                        </Text>

                        {project.github &&
                            <Button
                                variant="outline"
                                color="gray"
                                mr={10}
                                mb={10}
                                component='a'
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.github as string}

                            >
                                <IoLogoGithub style={{ marginRight: "0.5rem" }} /> GitHub
                            </Button>
                        }
                        {project.demo &&
                            <Button
                                variant="outline"
                                color="teal"
                                component='a'
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.demo as string}
                            >
                                <FiExternalLink style={{ marginRight: "0.5rem" }} /> Démo
                            </Button>

                        }
                    </div>

                </Card.Section>


            </Card>

        </>
    );
}