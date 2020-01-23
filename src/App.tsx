import React from 'react';
import './App.scss';
import NavHeader from './components/header/header'
import Form from './components/Form/form_Container';
import Sidebar from './components/sidebar/sidebar';
import { Layout ,Menu, Icon } from 'antd'

const {Header,Footer,Sider,Content} = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout style={{width: '100%', height: '100vh'}}>
        <Sider trigger={true} className="trigger" collapsible>
           <Sidebar />
        </Sider>
        <Layout>
          <Header className="header" style={{ background: '#fff', padding: 0 }}>
            <NavHeader brand="Gigahex" Tinfo="dsfdslfs" />
          </Header>

          <Content
            className="R-form"
            style={{
              padding:50,
              background: '#f4f5fb',
            }}
          >
            <Form />
          </Content>
          <Footer style={{ textAlign: 'center',borderBottom: '1px solid #00000'}}>Gigahex ©2020</Footer> 
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
