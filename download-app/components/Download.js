import React, {Component} from 'react'
import Head from 'next/head'
import { searchImages, inputChange, downloadImages} from '../store'
import { Col, Row, FormControl, Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Download extends Component {
  searchImages = (state) => {
    this.props.searchImages(state.text)
  }

  inputChange = (e) => {
    const text = e.target.value
    this.props.inputChange(text)
  }

  downloadImages = (state) => {
    this.props.downloadImages(state.text)
  }

  render () {
    const { state } = this.props
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <div>
          <Row>
            <form>
              <Col lg={8} lgOffset={2}>
                <InputGroup>
                  <FormControl onChange={(e) => this.inputChange(e)} type="text" placeholder="Search photo"/>
                  <InputGroup.Button>
                    <Button bsStyle="primary" onClick={() => this.searchImages(state)}><span className="glyphicon glyphicon-search"></span> Search</Button>
                  </InputGroup.Button>
                </InputGroup>
              </Col>
            </form>
          </Row>
          <Row style={{ marginTop: '10px' }}>
            <Col lg={3} lgOffset={5} style={{ paddingLeft: '40px' }}>
              { state.length > 0 ? <Button bsStyle="success" onClick={() => this.downloadImages(state)}><span className="glyphicon glyphicon-download"></span> Download</Button> : null }
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

const mapDispatchToProps = (dispatch) => {
  return {
    searchImages: bindActionCreators(searchImages, dispatch),
    inputChange: bindActionCreators(inputChange, dispatch),
    downloadImages: bindActionCreators(downloadImages, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Download);