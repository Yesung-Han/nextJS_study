import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const ButtonWrapper = styled.div`
    margin-top: 10px;
  `;

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Form onFinish={onSubmitForm}>   
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          />
        </div>
        <div>
        <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
          <Link href="/signup"><a>회원 가입</a></Link>
        </ButtonWrapper>
      </Form>
    </>
  )
}


LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm;