import React, { Component } from 'react';
import InquiriesContextProvider, { InquiriesContext } from '../contexts/inquiriesContext';
import "../stylesheets/show.scss";
import MessageCard from './components/messageCard';

class InquiriesShowView extends Component {
  state = {  } 

  componentDidMount(){
    var content = document.querySelector("#inquiries-show-page .content")
    var contentHeight = content.clientHeight
    content.scrollTop += contentHeight
  }

  render() { 
    return (
      <InquiriesContextProvider>
        <div id="inquiries-show-page" className='page-container'>
          <div className="header">
            <h1 className="title">Inquiries</h1>
          </div>
          <div className="content">
            <InquiriesContext.Consumer>{context => {
              const { messages, company } = context

              return (
                <React.Fragment>
                  {messages.map(message => 
                    <MessageCard key={message.id} side={message.userType === "Staff" ? "right" : "left"} message={message} company={company} /> 
                  )}
                </React.Fragment>
              )
            }}</InquiriesContext.Consumer>
          </div>
          <div className="footer d-flex justify-content-center">
            <div className="form-group">
              <input type="text" name="message" id="message" className='form-control' placeholder='Send Message ...'/>
            </div>
            <button className="btn btn-primary btn-sm" id='send'>Send</button>
          </div>
        </div>
      </InquiriesContextProvider>
    );
  }
}
 
export default InquiriesShowView;