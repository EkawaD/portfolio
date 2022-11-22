type Profil = {
  id?: number
  avatar: string,
  color: string, 
  mail: string,
  address: string,
  name: string, 
  firstname: string,
  tel: string,
  linkedin: string,
  github: string,
  website: string, 
  intro: string,
  experiences: Experience[],
  diplomes: Diplome[],
  skills: Skill[],
  hobbies: Hobby[],
  projects: Project[],
}
  type Diplome = {
    id?: string,
    userId?: number,
    title: string,
    diplomaDate: string,
    school: string,
    place: string,
    description: string,
  }
  type Experience = {
    id?: string,
    userId?: number,
    entreprise: string,
    poste: string,
    place: string,
    description: string,
    startDate: string,
    endDate: string,
  }

  type Project = {
    id?: string,
    userId?: number,
    image: string,
    title: string,
    description: string,
    github: string,
    demo: string,
    tags?: string[],
  }
  type Skill = {
    id?: string,
    userId?: number,
    skill: string,
    tech: boolean,
    category: "known" | "fluent" | "interested" | "tool" | "hobby"
  }
  type Hobby = {
    id?: string,
    userId?: number,
    name: string,
  }
  