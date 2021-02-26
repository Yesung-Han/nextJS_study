import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
    <Head>
      <title>홈 | NodeBird</title>
    </Head>
    <AppLayout>
      <div>Hello Next!</div>
    </AppLayout>
    </>
  );
}

export default Home;

//pages 폴더안에 있는애들 코드스플리팅 돤 페이지 컴포넌트로 만들어 줌
//pages 폴더 이름을 변경하면 안됨