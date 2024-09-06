import { Button, Indicator, Modal, Image, Group, Badge,Text, ScrollArea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'

const FullProjectModel = (props: any) => {
    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size={"70%"} className='font-mono' opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
            <Modal.Header className='!bg-bgColor border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl'>
                <Modal.Title className='!text-4xl flex  gap-4 text-white'>{props.title} {props.live && <Indicator color='red' position='middle-end' size={7} processing />}</Modal.Title>
                <Modal.CloseButton size="md" iconSize="30px" className='!bg-bgColor' />
            </Modal.Header>
            <Modal.Body className='!bg-bgColor  !pt-3 border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl'>
                <Image
                    className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
                    src={props.image}
                    alt={props.image}
                />
                <Group mt="md" mb="md">
                    {props.technologies.map((tech: String, index: number) => <Badge size='md' key={index} variant='light' color='#64FFDA'>{tech}</Badge>)}
                </Group>
                <Text className='!text-justify' size="lg" c="dimmed">
                    {props.desc}
                </Text>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}



export default FullProjectModel
