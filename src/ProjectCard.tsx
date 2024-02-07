import { Card, Heading, IconButton, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function ProjectCard(props: {projectName: string, description: string, githubLink: string}) {
    return <Card width={80} height={64} padding={8} margin={4}>
        <Heading>{props.projectName}</Heading>
        <Text marginTop={4}>{props.description}</Text>
        <IconButton position={"absolute"} right={4} bottom={4} maxW={12} as={"a"} href={props.githubLink} icon={<FaGithub />} aria-label={"Github link to " + props.projectName} />
    </Card>
}

export default ProjectCard;