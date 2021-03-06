import React,{useState} from 'react';
import SHOP_DATA from './shop.data';
import {PreviewCollection} from '../../components/preview-collection/preview-collection';

export const ShopPage = () => {
    const  [collections] = useState(SHOP_DATA)
    return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key= {id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}


