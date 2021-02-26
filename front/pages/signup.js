import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Signup = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <AppLayout>
        <div>회원 가입 페이지</div>
      </AppLayout>
    </>
  );
}

export default Signup;

//pages 폴더안에 있는애들 코드스플리팅 돤 페이지 컴포넌트로 만들어 줌
//pages 폴더 이름을 변경하면 안됨