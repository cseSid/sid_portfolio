import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import FullProjectModel from './FullProjectModel';

const ProjectCards = (props : any) => {
  const [opened, { open, close }] = useDisclosure(false);
  return ( 
    <div data-aos  = 'fade-up' data-aos-duration = '800'>
       <Card className='!bg-bgColor !border-primaryColor border-2 hover:scale-[1.03] transition-transform duration-300 ease-in-out hover:!shadow-[0_0_10px_1px_#64FFDA]' w = "460px" shadow="lg" padding="sm" radius="lg" withBorder>
      <Card.Section className='p-3'>
        <Image
        className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
          src={props.image}
          alt={props.image}
        />
      </Card.Section>

      <Group justify="space-between" mt="xs" mb="xs">
        <Text className='!text-xl !font-bold gap-2  !text-white flex items-center'>{props.title} {<Badge rightSection = {props.live && <Indicator color='red' position='middle-end' size={7} processing/>} variant='outline' color="red">Live</Badge>}</Text>
      </Group>
      <Group mb="xs"> 
        {props.technologies.map((tech : String,index: number)=> index < 3 && <Badge size='md' key={index} variant='light' color='#64FFDA'>{tech}</Badge>)}
      </Group>

      <Text className='!text-justify' lineClamp={10} size="sm" c="dimmed">
        {props.desc}
      </Text>
      <Button onClick={open} className="" color="#64FFDA" variant="outline" mt="md" radius="md">
            Show More
        </Button>
    </Card>
     <FullProjectModel opened = {opened} close = {close} title={props.title} desc={props.desc} image={props.image} live={props.live} technologies = {props.technologies}/>
    </div>
  )
}

export default ProjectCards
