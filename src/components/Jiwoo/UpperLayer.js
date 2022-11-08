import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Home from '../../images/Home.jpg';

class UpperLayer extends Component {
    render() {
        return (
            <div className="Upper-Layer">
                <Link to="/"><img src={Home} id="Home-button" alt="Home"></img></Link>
                <div id="title">
                    <Link to="/"><h2>매수/매도</h2></Link>
                    <Link to="/"><h2>내 보유자산</h2></Link>
                    <Link to="/"><h2>내 관심주식</h2></Link>
                    <Link to="/"><h2>내 프로필</h2></Link>
                </div>
                <Link to="/login"><button value="logout" id="logout">Logout</button></Link>
            </div>
        );
    }
}

export default UpperLayer;