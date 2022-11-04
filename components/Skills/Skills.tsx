import * as React from "react";
import { Skill } from "./Skill";

export default function Skills({ skills, className }: { skills: Skill[], className?: string }) {

    const tech = skills.filter((s) => s.tech)
    return (
        <>
            <ul className={className}>
                {tech.map((skill: Skill, key) =>
                    <li key={key}><Skill className={"icon"} skill={skill.skill} /></li>
                )}
            </ul>

        </>
    )
}
