import React from 'react'

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'ひつじ仙人',
            count: 0
        }
    }

    changeName (name) {
        this.setState({name: name})
    }

    countUp() {
        this.setState({count: this.state.count + 1})
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h1>こんにちは、{this.state.name}さん！</h1>
                {/* buttonタグ内に、コンソールに名前を出力するonClickイベントを追加してください */}
                <button onClick={() => {this.changeName('ひつじ仙人')}}>ひつじ仙人</button>

                {/* buttonタグ内に、コンソールに名前を出力するonClickイベントを追加してください */}
                <button onClick={() => {this.changeName('にんじゃわんこ')}}>にんじゃわんこ</button>
                <button onClick={() => {this.countUp()}}>+</button>
            </div>
        );
    }
}
export default PageHome