import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard';
import Portrait from './assets/portrait.svg'

type Project = {
  projectName: string;
  description: string;
  githubLink?: string
}

const projectInfo: Project[] = [
  {
    projectName: "Forge Website",
    description: "A Work-In-Progress overhaul for the website of The Forge, managing makerspace machine usage and membership for 300+ students.",
    githubLink: "https://github.com/BreadInvasion/forge-new-website"
  },
  {
    projectName: "HelpAlign",
    description: "My RPI Hackathon X project - my goal was to build a service where people could find therapists in their area and securely message them.",
    githubLink: "https://github.com/BreadInvasion/HelpAlign"
  },
  {
    projectName: "This Website!",
    description: "Built in roughly an hour, just to have some brief summaries and links to my work all in one place!",
    githubLink: "https://github.com/BreadInvasion/portfolio"
  },
  {
    projectName: "DayDreamers",
    description: "A semester-long project for Software Design and Documentation, in which I built a calendar app with online storage and user invites with the help of a team.",
    githubLink: "https://github.com/BreadInvasion/Day-Dreamers"
  },
  {
    projectName: "Boeing SIRA",
    description: "My master's research project in collaboration with Boeing. The Semi-Independent Robotic Assistance project used computer vision to identify and manipulate 100+-pound cables!"
  }
]

function App() {
  return (
    <Box textAlign={"center"}>
      <Heading marginTop={12} size={"4xl"}>Mark Haddleton</Heading>
      <Image maxW={"25%"} marginLeft={"auto"} marginRight={"auto"} borderRadius={20} src={Portrait}/>
      <SimpleGrid spacing={4} columns={3} maxWidth={"70%"} marginLeft={"auto"} marginRight={"auto"} marginTop={8}>
        {projectInfo.map((value: Project) => {return <ProjectCard projectName={value.projectName} description={value.description} githubLink={value.githubLink} />})}
      </SimpleGrid>
    </Box>
  )
}

export default App
