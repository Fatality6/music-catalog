import { Card, Image, Space } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

export const AuthorPage = () => {
    const authors = useSelector((state) => state.authors.authors)
    const albums = useSelector((state) => state.albums.albums)
    const params = useParams()
    const id = Number(params.id)
    const author = authors.find(author => author.id === id)

    return (
        <>
            <Row gutter={16} wrap>
                <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                    <Image
                        src={author.img}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={16}>
                    <Title level={3}>{author.title}</Title>
                    <Paragraph>{author.description}</Paragraph>
                </Col>
            </Row>
            <Title level={4}>Albums:</Title>
            <Space direction='horizontal' size="large" wrap style={{ marginTop: 10 }}>
                {albums.map((e) => {
                    if (e.authorId === params.id) {
                        return <Cards key={e.id} title={e.title} img={e.img} description={e.description} id={e.id}></Cards>
                    }
                    return null;
                })}
            </Space>
        </>
    )
}

const Cards = ({ title, img, description, id }) => {
    return <Link to={`/album/${id}`}>
        <Card
            hoverable
            style={{
                width: 150
            }}
            cover={<img alt={title} src={img} />}
        >
            <Meta title={title} description={description} />
        </Card>
    </Link>
}
