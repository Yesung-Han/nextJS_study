import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

import UserProFile from './UserProFile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: 'middle';
`

                     // 다른데서 이 컴포넌트 쓸때 <AppLayout>감싸진 애들이 children으로 들어온다.</AppLayout>
const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>홈</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton style={{verticalAlign: 'middle'}}/>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>로그인</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={4}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProFile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made By Zero Cho</a>
        </Col>
      </Row>
      
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;

// 각 페이지 별로 레이아웃 다르게 적용하고 싶으면. 다른 레이아웃 컴포넌트 만들어서 감싸면 돤디,