import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Space } from 'antd'

const { Meta } = Card;

export const Albums = () => {
  const albums = useSelector((state) => state.albums.albums)

  return (
    <Space direction='horizontal' size="large" wrap>
      {albums?.map((e) => <Cards
        key={e.id}
        title={e.title}
        img={e.img}
        description={e.description}
        id={e.id}>
      </Cards>
      )}
    </Space>
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