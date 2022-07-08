import React from 'react';
import navigation from './navigation';

//const link = React.createElement('a', { href: 'https://google.com', className: 'Link' }, null, 'Link');

//const path = 'http://google.com';

//const link = <a href= {path} className='link'>Link</a>;

//const header = React.createElement('header', null, link);

const header = (
  <header className="header">
    <div>header</div>
    {navigation}
  </header>
);

export default header;