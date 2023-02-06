import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Space } from 'antd'
import { SoundTwoTone } from '@ant-design/icons'
import ReactAudioPlayer from 'react-audio-player'

const { Meta } = Card

export const Songs = () => {
  const songs = useSelector((state) => state.songs.songs)

  return (
    <Space direction='horizontal' size="small" wrap>
      {songs?.map((e) => <Cards key={e.id} title={e.title} src={e.src}></Cards>)}
    </Space>
  )
}

const Cards = ({ title, src }) => {
  return (
    <Card
            hoverable
            style={{
                width: 650,
                marginTop: 16,
            }}
        >
            <Meta
                avatar={<SoundTwoTone style={{ fontSize: '30px' }} />}
                title={title}
                description={`Description`}
            />
            <ReactAudioPlayer
                src={src}
                autoPlay={false}
                controls={true}
                style={{width: 600, marginTop: 15}}
            />
        </Card>
  )
}