import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectCommonSettings } from './pages/ProjectCommonSettings';
import { ProjectIVRSettings } from './pages/ProjectIVRSettings';
import { ProjectList } from './pages/ProjectList';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header></Header>
        <Layout>
          <Sider></Sider>
          <Content>
            <Routes>
              <Route path="/" element={<Navigate to="/projects" />}></Route>
              <Route path="/projects">
                <Route index element={<ProjectList />} />
                <Route
                  path=":projectId/settings/common"
                  element={<ProjectCommonSettings />}
                ></Route>
                <Route
                  path=":projectId/settings/ivr"
                  element={<ProjectIVRSettings />}
                ></Route>
              </Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
