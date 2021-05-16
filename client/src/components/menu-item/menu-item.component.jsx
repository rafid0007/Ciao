import React from "react";
import {withRouter} from 'react-router-dom';

import CustomButton from "../custom-button/custombutton.component";
import {Link} from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";

import './menu-item.styles.scss';


const MenuItem = ({imageUrl,title, linkUrl, history, match, inverse}) => {
    const {width} = useWindowSize();

    return (
        <div className='menu-item'>
            {
                width > 600 && inverse ?
                    (
                        <>
                            <div className="menu-item_text-box align-right">
                                <h1>shop</h1>
                                <h2>{title}</h2>
                                <p>utpo 40% off!</p>
                                <Link to={`${match.path}${linkUrl}`}>
                                    <CustomButton>shop now</CustomButton>
                                </Link>
                            </div>
                            <Link to={`${match.path}${linkUrl}`} className='menu-item_image'>
                                <img src={imageUrl} alt="pic"/>
                            </Link>
                        </>
                    )
                    :
                    (
                        <>
                            <Link to={`${match.path}${linkUrl}`} className='menu-item_image'>
                                <img src={imageUrl} alt="pic"/>
                            </Link>
                            <div className="menu-item_text-box">
                                <h1>shop</h1>
                                <h2>{title}</h2>
                                <p>utpo 40% off!</p>
                                <Link to = {`${match.path}${linkUrl}`}>
                                    <CustomButton>shop now</CustomButton>
                                </Link>
                            </div>
                        </>
                    )
            }
        </div>
    )
};

export default withRouter(MenuItem);
