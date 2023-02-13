import { Button, Card, Col, Image, Row, Space } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SoundTwoTone } from '@ant-design/icons'
import Paragraph from 'antd/es/typography/Paragraph'
import { addSong } from '../../redux/songs/songsSlice'
import AudioPlayer from 'react-audio-player'
import { CollectionCreateForm } from '../../components/CollectionCreateForm'

const { Meta } = Card;

export const AlbumPage = () => {
    const albums = useSelector((state) => state.albums.albums)
    const songs = useSelector((state) => state.songs.songs)
    const params = useParams()
    const id = Number(params.id)
    const album = albums.find(album => album.id === id)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        const newSong = { values, id }
        dispatch(addSong(newSong))
        setOpen(false)
    };

    return (<>
        <Row gutter={16} wrap>
            <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                <Image
                    src={album.img}
                />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={16} >
                <Title level={3}>{album.title}</Title>
                <Paragraph>description</Paragraph>
            </Col>
            <Button
                type='primary'
                style={{ margin: 20 }}
                onClick={() => { setOpen(true); }}>
                Add song
            </Button>
            <CollectionCreateForm
                open={open}
                id={id}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </Row>
        <Title level={4}>Songs:</Title>
        <Space direction='horizontal' size="large" wrap>
            {songs.map((e) => {
                return e.album.map((a) => {
                    if (a.albumId === id) {
                        return <Cards
                            key={e.id}
                            title={e.title}
                            img={e.img}
                            description={e.description}
                            number={a.number}
                            src={e.src}
                            setOpen={() => { setOpen(true); }}
                        >
                        </Cards>
                    }
                    return null
                })
            })}
        </Space>
    </>
    )
}

const Cards = ({ title, number, src }) => {
    return (
        <Card
            hoverable
            style={{
                width: 300,
                marginTop: 16,
            }}
        >
            <Meta
                avatar={<SoundTwoTone style={{ fontSize: '30px' }} />}
                title={title}
                description={`Number in album is ${number}`}
            />
            <AudioPlayer
                src={src}
                autoPlay={false}
                controls={true}
                style={{ width: "250px", marginTop: "15px" }}
            />
        </Card>
    )
}
