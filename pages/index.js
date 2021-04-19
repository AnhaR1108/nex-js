import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Article from '../components/article'
import Jumbotron from '../components/jumbotron'
import Pagination from '../components/pagination'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Menu from '../data-dummy/menu.json'
import Post from '../data-dummy/post.json'

export default function Home({ props }) {
  return (
<Layout LayoutProps = {props.menu} >
  <Jumbotron />

  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>
      {
        props.post.map(p => (
          <Article key={p.id} post = {p} />
        ))
      }
    
      <Pagination />

    </div>
   <Sidebar />
  </div>
</Layout>   
  )
}
Home.getInitialProps = () => {
  return {
    props : {
      menu : Menu, 
      post : Post
    }
  }
}
