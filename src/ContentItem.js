import React from 'react';

class ContentItem extends React.Component{

    render(){
        let data = this.props.data;
        return (
            <div className='content-item'>
                <img className='item-image ' src={data.i} alt=''/>
                <div className='item-text' dangerouslySetInnerHTML={{__html: data.t}} />
            </div>
        )
    }
}

export default ContentItem
