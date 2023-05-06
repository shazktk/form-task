import React from 'react'
import '../App.css';
import { Card, Space } from 'antd';
import { useSelector } from 'react-redux';


export default function Table() {
  const userDetails = useSelector((state) => state)
  const dataCards = userDetails.map((inputDetails) => {
    const {firstName, lastName, designation, email} = inputDetails;
    return (
        <Card
          title="Default size card"
          style={{
            width: 300,
          }}
        >
          <h2>{firstName} {lastName}</h2>
          <h3>{designation}</h3>
          <p>{email}</p>
        </Card>
    )
  });


  return (
    <div>
      <Space className='cards-container' direction="vertical" size={16}>
        {dataCards}
      </Space>
    </div>
  )
}


  