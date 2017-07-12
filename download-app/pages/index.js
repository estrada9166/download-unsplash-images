import React from 'react'
import Header from '../components/Header'
import Download from '../components/Download'
import Images from '../components/Images'
import { initStore, searchImages , inputChange, downloadImages} from '../store'
import withRedux from 'next-redux-wrapper'

class Index extends React.Component { 
  static getInitProps ({ store }) {
    store.dispatch(searchImages())
    store.dispatch(inputChange())
    store.dispatch(downloadImages())
  }

  render() {
    return (
      <div>
        <Header />
        <Download />
        <Images />
      </div>
    )
  }
}

export default withRedux(initStore, null)(Index);