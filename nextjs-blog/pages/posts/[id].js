import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

//동적 라우팅 하려면 [] 들어간 파일 명에다가 getStaticPaths(), getStaticProps() 함수를 구현해야함.

export default function Post({postData}) {
  return (
    <Layout>
      {postData.title}
      <br/>
      {postData.id}
      <br/>
      {postData.date}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false // 이 친구는 아직은 생각 안해도 됨.
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}