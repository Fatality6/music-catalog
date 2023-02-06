import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Space } from 'antd'
import { PlayCircleTwoTone } from '@ant-design/icons'

const { Meta } = Card

export const Songs = () => {
  const songs = useSelector((state) => state.songs.songs)

  return (
    <Space direction='horizontal' size="small" wrap>
      {songs?.map((e) => <Cards key={e.id} title={e.title}></Cards>)}
    </Space>
  )
}

const Cards = ({ title }) => {
  return (
    <Card
        hoverable
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