import { Card, Heading, IconButton, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function ProjectCard(props: {projectName: string, description: string, githubLink?: string}) {
    return <Card width={80} height={72} padding={8}>
        <Heading>{props.projectName}</Heading>
        <Text marginTop={4}>{props.description}</Text>
        {props.githubLink && <IconButton position={"absolute"} right={4} bottom={4} maxW={12} as={"a"} href={props.githubLink} target="_blank" rel="noreferrer noopener" icon={<FaGithub />} aria-label={"Github link to " + props.projectName} />}
    </Card>
}

export default ProjectCard;