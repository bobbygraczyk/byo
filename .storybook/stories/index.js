import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../../src/components/header';
import Card from '../../src/components/product_card';
import MultiButton from '../../src/components/buttons';
import "../../src/App.css";

storiesOf('Header', module)
    .add('Desktop', () => (
        <Header />
    ));

storiesOf('Product Card', module)
    .add('Desktop', () => (
        <Card 
            type='observatory_no_warmroom'
            image='http://www.iowabarnfoundation.org/2016px/rimathe-barn.jpg'
            title='CJE Max'
            description={`15'6" x 15'6" roll-off roof observatory (Warm room 15'6" x 5'6")`}
            priceOne='$8,450'
            priceTwo='$5,940'
        />
));

storiesOf('Buttons', module)
        .add('Multi Button', () => (
            <MultiButton />
        ));