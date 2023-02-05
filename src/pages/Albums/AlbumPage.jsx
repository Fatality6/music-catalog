import { Button, Card, Col, Form, Image, Input, Modal, Row, Space } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PlayCircleTwoTone } from '@ant-design/icons'
import Paragraph from 'antd/es/typography/Paragraph'
import { addSong } from '../../redux/songs/songsSlice'
import AudioPlayer from 'react-audio-player'
import LetItBe from '../../common/music/The_Beatles-Let_It_Be-spcs.pub.mp3'

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
        setOpen(false);
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
                            number={a.number}>
                        </Cards>
                    }
                    return null
                });
            })}
            <AudioPlayer
      src={LetItBe}
      autoPlay={false}
      controls={true}
    />
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

const CollectionCreateForm = ({ open, onCreate, onCancel, id }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Add song in album"
            okText="Add"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title of song!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
            <AudioPlayer
      src={LetItBe}
      autoPlay={false}
      controls={true}
    />
        </Modal>
    );
};
