import { Card, Space } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const { Meta } = Card;

export const Authors = () => {
  const authors = useSelector((state) => state.authors.authors)
  return (
    <Space direction='horizontal' size="large" wrap>
      {authors?.map((e) => <Cards key={e.id} title={e.title} img={e.img} description={e.description} id={e.id}></Cards>)}
    </Space>

  )
}

const Cards = ({ title, img, description, id }) => {
  return <Link to={`/author/${id}`}>
    <Card
      hoverable
      style={{
        width: 240,
        height: 400
      }}
      cover={<img alt={title} src={img} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </Link>
}