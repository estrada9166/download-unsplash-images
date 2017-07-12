import React, {Component} from 'react'
import Head from 'next/head'
import { searchImages, inputChange} from '../store'
import { Col, Row, FormControl, Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Images extends Component {
  render() {
    const { state } = this.props
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <div>
          <Row style={{marginTop: '20px'}}>
            <Col lg={8} lgOffset={2}>
              {state.images.map(image => 
                <Col lg={4} key={image.key} style={{ marginTop: '5px'}}>
                  <img src={image.image} style={{ width: '310px'}}/>
                </Col>
              )}
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

export default connect(mapStateToProps)(Images);