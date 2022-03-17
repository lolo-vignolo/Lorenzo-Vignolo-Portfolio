import classes from "./myGrid.module.css"

import Image from 'next/image';
import React from 'react';

const MyGrid = () => {

    const img1 = "/images/site/js.png"
    const img2 = "/images/site/next.png"
    const img3 = "/images/site/ts.png"
    const img4 = "/images/site/node.png"
    const img5 = "/images/site/react.png"
    const img6 = "/images/site/firebase.png"
    const img7 = "/images/site/html.png"
    const img8 = "/images/site/css.png"
    return (
    <section className={classes.sec}>
        <div className={classes.grid1}>
            <Image src={img1} alt="img" width = {65} height = {65} className={classes.imagen} />
            <Image src={img2} alt="img" width = {65} height = {65} className={classes.imagen} />
            <Image src={img3} alt="img" width = {65} height = {65} className={classes.imagen} />
            <Image src={img7} alt="img" width = {65} height = {65} className={classes.imagen} />
        </div> 
        <div className={classes.grid2}>   
            <Image src={img4} alt="img" width = {65} height = {65} className={classes.imagen} />
            <Image src={img5} alt="img" width = {65} height = {65} className={classes.imagen} />
            <Image src={img6} alt="img" width = {65} height = {65} className={classes.imagen} />
            <Image src={img8} alt="img" width = {65} height = {65} className={classes.imagen} />
        </div>
    </section>
    )

};

export default MyGrid;