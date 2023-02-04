import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, Space } from 'antd'
import { PlayCircleTwoTone } from '@ant-design/icons'

const { Meta } = Card;

export const Songs = () => {
  const songs = useSelector((state) => state.songs.songs)
  const params = useParams()
  const albumId = Number(params.id)

  if(!params.id) {
  return (
    <Space direction='horizontal' size="small" wrap>
      {songs?.map((e) => <Cards key={e.id} title={e.title} img={e.img} description={e.description} id={e.id}></Cards>)}
    </Space>
  )}
  return (
    <Space direction='horizontal' size="large" wrap>
      {songs.map((e) => {
      if(e.album[0].albumId === albumId) {
        return <Cards key={e.id} title={e.title} img={e.img} description={e.description} id={e.id}></Cards>}
        return null;
      })}
    </Space>
  )
}


const Cards = ({ title,id }) => {
  return (
    <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<PlayCircleTwoTone style={{ fontSize: '30px' }}/>}
          title={title}
          description="This is the description"
        />
      </Card>
  )
}

/* <Link to={`/songs/song/${id}`}> */
  /* </Link> */