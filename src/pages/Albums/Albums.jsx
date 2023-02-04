import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Card, Space } from 'antd'

const { Meta } = Card;

export const Albums = () => {
  const albums = useSelector((state) => state.albums.albums)
  const params = useParams()

  if(!params.id) {
  return (
    <Space direction='horizontal' size="large" wrap>
      {albums?.map((e) => <Cards key={e.id} title={e.title} img={e.img} description={e.description} id={e.id}></Cards>)}
    </Space>
  )}


  return (
    <Space direction='horizontal' size="large" wrap>
      {albums.map((e) => {
      if(e.authorId === params.id) {
        return <Cards key={e.id} title={e.title} img={e.img} description={e.description} id={e.id}></Cards>}
        return null;
      })}
    </Space>
  )
}

const Cards = ({ title, img, description, id }) => {
  return <Link to={`/songs/${id}`}>
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