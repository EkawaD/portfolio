import { Highlight, MantineProvider } from "@mantine/core";
import * as React from "react";
import Contacts from "../components/Contacts"
import Timeline from "../components/Timeline"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Navbar from "../components/Navbar"
import { MdSchool, MdWork } from "react-icons/md"


export default () => {


  const [user, setUser] = React.useState<User>()
  const [TLType, setTLType] = React.useState("experiences")


  React.useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`https://hephaistos-ekawad.vercel.app/api/cv/ekawa`)
        const data = await res.json()
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetcher()
  }, [])

  console.log(user)
  if (user === undefined) return <div style={{ color: "black" }}>Impossible de récupérer les données.</div>
  if (!user) return <div>Loading...</div>
  const demo = user.projects.filter((p) => p.demo)
  const github = user.projects.filter((p) => p.github && !p.demo)
  const proprio = user.projects.filter((p) => !p.demo && !p.github)
  const projects = demo.concat(github).concat(proprio)

  return (
    <>
      <MantineProvider
        withGlobalStyles
        theme={{
          colorScheme: "dark",
          colors: {
            // override dark colors to change them for all components
            dark: [
              '#d5d7e0',
              '#acaebf',
              '#8c8fa3',
              '#666980',
              '#4d4f66',
              '#34354a',
              '#151b23',
              '#232e3b',
              '#0c0d21',
              '#151b23',
            ],
          },
        }}
      >
        <div className="container">
          <Navbar height={"75px"} links={["About me", "CV", "Projets", "Contacts"]}></Navbar>
          <div className="header" id="header">
            <div className="whoami">
              <h1>{user.profil.name} {user.profil.firstname}</h1>
              <h2>Développeur Web</h2>
            </div>
            <div className="contacts">
              <Contacts />
            </div>
          </div>
          <div className="about-me" id="aboutme">
            <div className="intro">
              <h1>A propos de moi</h1>
              <p>{user?.profil.intro}</p>
            </div>
            <div className="svg">
              <img src="./dev.svg" alt="dvg of a developer" />
            </div>
          </div>
          <div className="cv-skills" id="cv">
            <div className="cv">
              <h1>CV</h1>
              <h2 onClick={() => setTLType((t: string) => t === "diplomes" ? "experiences" : "diplomes")}>
                <Highlight
                  highlight={TLType === "experiences" ? "Expériences pro" : "Diplômes"}
                  highlightStyles={(theme) => ({
                    backgroundImage: TLType === "diplomes" ? theme.fn.linearGradient(45, theme.colors.orange[5], theme.colors.red[5]) : theme.fn.linearGradient(45, theme.colors.green[5], theme.colors.blue[5]),
                    fontWeight: 700,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  })}>
                  Expériences pro | Diplômes
                </Highlight>
              </h2>
              <div className="tl">
                {TLType === "experiences"
                  ? <Timeline user={user} icon={<MdWork size={14} />} color={"teal"} type={"experiences"} />
                  : <Timeline user={user} icon={<MdSchool size={14} />} color={"orange"} type={"diplomes"} />
                }
              </div>
            </div>
            <div className="skills">
              <h1>Compétences</h1>
              <Skills skills={user.skills} className="tags" />
            </div>
          </div>
          <div className="projects" id="projets">
            <h1>Mes Projets</h1>
            <div className="projects_list">
              {projects.map((p, k) =>
                <Projects key={k} project={p} className="project_card" />
              )}
            </div>
          </div>
          <div className="footer" id="contacts">

            <Footer contact />
          </div>
        </div>
      </MantineProvider>
    </>
  );
}
