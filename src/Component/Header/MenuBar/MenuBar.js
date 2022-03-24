import React from 'react'
import './MenuBar.css'
import Logo from './logo.png'

function MenuBarMenu(props) {
    return (
        <li><h4 className='MenuBarMenuItem'>{props.name}</h4></li>
    );
}

class MenuBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: ['HOME', '공지사항', '서비스']
        }
    }

    renderMenu(i) {
        return (
            <MenuBarMenu name={this.state.menu[i]} />
        )
    }

    render() {
        return (
            <nav className="MenuBar">
                <ul>
                    <li className='MenuBarLiLogo'>
                        <img src={Logo}></img>
                    </li>
                    <li className='MenuBarLiLogoText'>
                        <div>
                            Farm Factory
                        </div>
                    </li>
                    <li className='MenuBarLiMenu'>
                        <ul>
                            {this.renderMenu(0)}
                            {this.renderMenu(1)}
                            {this.renderMenu(2)}
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuBar