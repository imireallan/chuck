import React from 'react';
import Header from './style'

function HeaderComponent() {
    return (
        <Header className="center">
            <Header.Wrapper className="container center">
                <Header.Logo>Chuck Norris<Header.Logo.Sup>JOKES</Header.Logo.Sup></Header.Logo>
            </Header.Wrapper>
        </Header>
    )
}

export default HeaderComponent;
