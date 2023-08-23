import React, { FC } from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
import './style.css';

export const Loader = () => {
  return (
    <div className="spinner-container">
      <Spin indicator={<LoadingOutlined spin />} />
    </div>
  )
}

export default Loader;