import React from 'react';
import { Layout, Button, Avatar, Icon, Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light">
        <div className={styles.logo}>
          <Link to="/">yyh123</Link>
        </div>
        <Menu mode="inline">
          <Menu.Item>
            <Link to="/dashboard">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>

          <SubMenu
            title={
              <span>
                <Icon type="appstore" />
                <span>Discover</span>
              </span>
            }
          >
            <Menu.Item>
              <Link to="/posts">Popular</Link>
            </Menu.Item>
            <Menu.Item>Frash</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Button type="link">
            <Icon type="left" />
            Go back
          </Button>
        </Header>
        <Content className={styles.content}>{props.children}</Content>
        <Footer>
          <Avatar className={styles.avatar}>N</Avatar>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
