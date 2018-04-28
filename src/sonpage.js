import React, { Component } from 'react';
import logo from './logo.svg';
import './sonpage.css';   //引入css文件
import './myz.scss';      //引入sass文件
import 'qnui/lib/button/index.scss';//引入千牛组件
import Button from 'qnui/lib/button';//引入千牛组件

class demo extends Component {
  render() {
    const { text, onChangeText, onButtonClick } = this.props;  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          点击下方文字
        </p>
        <p className="myz" onClick={onChangeText}> {text} 
        </p>
        
        <Button type="normal" shape="warning" onClick={onButtonClick}>click</Button> &nbsp;&nbsp;
        <Button type="primary" shape="warning">主要警告按钮</Button> &nbsp;&nbsp;
        <Button type="primary">主要按钮</Button>
      </div>
    );
  }
}
export default demo;
