import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

// md파일 읽어서 보여주는 뼈대 같은 느낌
// ...3000/posts/md파일제목 으로 동적 링크를 만들어 줌
// 동적 라우팅 하려면 [] 들어간 파일 명에다가 getStaticPaths(), getStaticProps() 함수를 구현해야함.

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br/>
      {postData.id}
      <br/>
      <Date dateString={postData.date} />
      <br/>
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false // 이 친구는 true로 넣으면 없는 경로에 대해 404페이지가 안뜨고 에러 창이 뜸
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}