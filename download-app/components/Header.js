import React, {Component} from 'react'
import Head from 'next/head'
import { Col, Row, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Header extends Component {
  render() {
    const { state } = this.props
    return (
      <div>
        <Head>
          <title>Download free pic</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <div>
          <Row style={{ marginTop: '10px' }}>
            <Col lg={8} lgOffset={2}>
              <Jumbotron style={{ borderRadius: '15px' }}>
                <h1 style={{ textAlign: 'center' }}>Download Free Images</h1>
                <p style={{ textAlign: 'center' }}>Download free images from <a href="https://unsplash.com/" target="_blank">unsplash.com</a></p>
                <p style={{ textAlign: 'center' }}>Just write the word, search and click download</p>
                { state.display ? <p style={{  textAlign: 'center' }}>{`You'll download ${state.length} pics of ${state.text}`}</p> : null }                
              </Jumbotron>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    state
  }
} 

export default connect(mapStateToProps)(Header);