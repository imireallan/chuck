import React from 'react';
import Header from './style'

function HeaderComponent() {
    return (
        <Header>
            <Header.Wrapper className="container flex">
                <Header.Logo>Chuck Norris<Header.Logo.Sup>JOKES</Header.Logo.Sup></Header.Logo>
                <nav>
                    <Header.NavList className="flex">
                        <Header.NavListItem>
                            <Header.NavLink>home</Header.NavLink>
                        </Header.NavListItem>
                        <Header.NavListItem>
                            <Header.NavLink>about</Header.NavLink>
                        </Header.NavListItem>
                        <Header.NavListItem>
                            <Header.NavLink>contact</Header.NavLink>
                        </Header.NavListItem>
                    </Header.NavList>
                </nav>
            </Header.Wrapper>
        </Header>
    )
}

export default HeaderComponent;
