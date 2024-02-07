import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import ProjectCard from './ProjectCard';

type Project = {
  projectName: string;
  description: string;
  githubLink: string;
}

const projectInfo: Project[] = [
  {
    projectName: "Forge Website",
    description: "A Work-In-Progress overhaul for the website of The Forge, managing makerspace machine usage and membership for 300+ students",
    githubLink: "https://github.com/BreadInvasion/forge-new-website"
  },
  {
    projectName: "HelpAlign",
    description: "My RPI Hackathon X project - my goal was to build a service where people could find therapists in their area and securely message them.",
    githubLink: "https://github.com/BreadInvasion/HelpAlign"
  }
]

function App() {
  return (
    <Box textAlign={"center"}>
      <Heading marginTop={12} size={"4xl"}>Mark Haddleton</Heading>
      <Flex>
        {projectInfo.map((value: Project) => {return <ProjectCard projectName={value.projectName} description={value.description} githubLink={value.githubLink} />})}
      </Flex>
    </Box>
  )
}

export default App
