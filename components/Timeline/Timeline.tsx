import { Timeline, Text } from '@mantine/core';
import * as React from "react";





export default function TL({ user, icon, color, type }: { user: User, icon: React.ReactNode, color: string, type: string }) {
    const experiences = user.experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()) as Experience[]
    const diplomas = user.diplomes.sort((a, b) => new Date(b.diplomaDate).getTime() - new Date(a.diplomaDate).getTime()) as Diplome[]
    console.log(diplomas)

    const readDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
        return new Date(date).toLocaleDateString(undefined, options)
    }

    function TimelineType({ type }: { type: string }) {
        if (type === "experiences") {
            return (
                <Timeline active={1} bulletSize={24} lineWidth={2} color={color}>
                    {experiences.map((experience: Experience, key) => (
                        <Timeline.Item bullet={icon} title={experience.poste + " chez " + experience.entreprise.toUpperCase()} key={key}>
                            <Text color="dimmed" size="sm" > {experience.description}</Text>
                            <Text size="xs" mt={4}>{readDate(experience.startDate)} - {readDate(experience.endDate)}</Text>
                        </Timeline.Item>
                    ))}
                </Timeline >
            )
        }
        if (type === "diplomes") {
            return (
                <Timeline active={0} bulletSize={24} lineWidth={2} color={color}>
                    {diplomas.map((diploma: Diplome, key) => (
                        <Timeline.Item bullet={icon} title={diploma.title} key={key}>
                            <Text color="dimmed" size="sm" > {diploma.school} à {diploma.place}</Text>
                            <Text size="xs" mt={4}>{readDate(diploma.diplomaDate)}</Text>
                        </Timeline.Item>
                    ))}
                </Timeline >
            )
        }
        return <></>

    }

    return (
        <>

            <TimelineType type={type} />

        </>
    );
}