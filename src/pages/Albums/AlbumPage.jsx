import { Card, Col, Image, Row, Space } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PlayCircleTwoTone } from '@ant-design/icons'

const { Meta } = Card;

export const AlbumPage = () => {
    const albums = useSelector((state) => state.albums.albums)
    const songs = useSelector((state) => state.songs.songs)
    const params = useParams()
    const id = Number(params.id)
    const album = albums.find(album => album.id === id)
    console.log(songs)

    return (<>
        <Row gutter={16} wrap>
            <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                <Image
                    src={album.img}
                />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={16}>
                <Title level={3}>{album.title}</Title>
                {/* <Paragraph>{author.description}</Paragraph> */}
            </Col>
        </Row>
        <Title level={4}>Songs:</Title>
        <Space direction='horizontal' size="large" wrap>
            {songs.map((e) => {
                if (e.album[0].albumId === id) {
                    return <Cards
                        key={e.id}
                        title={e.title}
                        img={e.img}
                        description={e.description}
                        number={e.album[0].number}>
                    </Cards>
                }
                return null;
            })}
        </Space>
    </>
    )
}

const Cards = ({ title, number }) => {
    return (
        <Card
            style={{
                width: 300,
                marginTop: 16,
            }}
        >
            <Meta
                avatar={<PlayCircleTwoTone style={{ fontSize: '30px' }} />}
                title={title}
                description={`Number in album is ${number}`}
            />
        </Card>
    )
}
