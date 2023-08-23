import React from "react";
import { Outlet, } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

function AppLayout() {
  /* RENDER APP
  -------------------------------------------------------------------------------------*/
  return (
    <Layout>
      <Content >
        <Outlet />
      </Content>
    </Layout>
  );
}
export default AppLayout;