import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            {/* Header-rrrrrrrr */}
            {/* <img src="data:image/jpeg;base64,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" /> */}
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
        </header>
    );
}

export default Header;