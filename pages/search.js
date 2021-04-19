import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Article from '../components/article'
import Jumbotron from '../components/jumbotron'
import Pagination from '../components/pagination'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Menu from '../data-dummy/menu.json'

export default function Search({ props }) {
  return (
<Layout LayoutProps = {props.menu} >

  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Search Pgae
      </h3>
      <form action="">
          <div className="form-group">
              <label htmlFor="">Isikan kata kunci disini</label>
              <input type="text" className="form-control"/>
          </div>
      </form>
    </div>
   <Sidebar />
  </div>
</Layout> 
  )
}
Search.getInitialProps = () => {
  return {
    props : {
      menu : Menu
    }
  }
}
