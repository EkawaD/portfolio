type User = {
    id?: string
    email: string,
    name: string,
    image: string,
    profil: Profil,
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
  type Profil = {
    id?: string,
    userId?: number,
    name: string,
    color: string,
    avatar: string,
    firstname: string,
    address: string
    intro: string,
    website: string,
    tel: string,
    mail: string,
    linkedin: string,
    github?: string,
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
  