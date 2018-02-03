import React from 'react';
import Overlay from '../Overlay'
import Page from '../../utils/Page'
import {Navbar} from '../../utils/Navbar'
import {Button} from '../../utils/Buttons'
import {Form, Input, TextArea} from '../../utils/Forms'
import {Icon} from '../../utils/Icons'
import axios from 'axios'

class Posts extends React.Component {
  constructor() {
    super()
    this.state = {
      showOverlay: false,
      post: {}
    }
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    });
  }

  store(e, action) {
    e.preventDefault()
    const {title, text} = this.state.post
    axios.post('/api/v1/post/store', this.state.post).
    then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <Page>
        <h1>Posts</h1>
        <Navbar>
          <Button onClick={() => this.setState({showOverlay: true})} singular={'Add'} icon={'plus'} />
        </Navbar>
        {this.state.showOverlay &&
          <Overlay active={this.state.showOverlay}>
            <div className={'row'}>
              <div className={'col-md-8'}>
                <h1>New post</h1>
              </div>
              <div className={'col-md-4 text-right'}>
                <Icon icon={'close'} />
              </div>
            </div>
            <div className={'row'}>
              <div className={'col-md-12'}>
                <Form>
                  <Input className={'input-lg'} name={'title'} value={this.state.value} onChange={e => this.handleChange(e)} />
                  <TextArea className={'input-lg'} name={'body'} value={this.state.text} onChange={e => this.handleChange(e)} />
                  <Button singular={'Create'} type={'primary'} onClick={e => this.store(e, 'live')} />
                  <Button singular={'Save as draft'} onClick={e => this.store(e, 'draft')}  />
                </Form>
              </div>
            </div>
          </Overlay>
        }
      </Page>
    )
  }
}

export default Posts;
