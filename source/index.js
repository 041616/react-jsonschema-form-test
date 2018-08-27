import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from './Overlay';


ReactDOM.render((
    <Overlay active={true}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates tenetur consequuntur similique maxime delectus dolore quibusdam mollitia voluptatibus nobis quasi soluta corporis officiis, perferendis minus, quisquam eum rem nihil reiciendis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum temporibus iure eveniet fuga assumenda sed. Cupiditate provident quas voluptatem aut natus iure, sunt incidunt quae voluptate perspiciatis delectus accusamus?</p>
    </Overlay>
), document.getElementById('root'));
