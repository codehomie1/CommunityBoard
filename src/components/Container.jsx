import React from "react";

import Card from './Card'

const Container = () => {

    return (
        
        <div className="container">
            <div className="Card"><Card imgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goodwill_Industries_Logo.svg/1200px-Goodwill_Industries_Logo.svg.png"}  title={"GoodWill"} pgsrc={'https://sfgoodwill.org/'} /></div>
            <div className="Card"><Card imgSrc={"https://www.redcross.org/content/dam/redcross/red-cross-logos/American-Red-Cross_Logo_1200x630.jpg"} title={"American Red Cross"}  pgsrc={'https://www.redcross.org/'} /></div>
            <div className="Card"><Card imgSrc={"https://i.shgcdn.com/cbe4de4a-0927-4fd9-b3bd-5df086a72ec2/-/format/auto/-/preview/3000x3000/-/quality/lighter/"} title={"Feeding America"}  pgsrc={'https://www.feedingamerica.org/'} /></div>
            <div className="Card"><Card imgSrc={'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1401248909/zcte9nevwkaxhyanjskv.jpg'} title={"Salvation Army"} pgsrc={'https://www.salvationarmyusa.org/usn/'} /></div>
            <div className="Card"><Card imgSrc={"https://www.ithacaymca.com/graphics/images/blue_purple/largetile.png"} title={"YMCA"} pgsrc={'https://www.ymca.org/'} /></div>
            <div className="Card"><Card imgSrc={"https://good360.org/wp-content/uploads/2020/11/Good360-Logo-500x.jpg"} title={"Good 360"}  pgsrc={'https://good360.org/'} /></div>
            <div
             className="Card"><Card imgSrc={"https://images.squarespace-cdn.com/content/v1/574f31e07c65e4675a5befc2/1467917983223-TKXU2SAKJC6S45DZZRF6/direct-relief.png"} title={"Direct Relief"}  pgsrc={'https://www.directrelief.org/'} /></div>
            <div className="Card"><Card imgSrc={"https://www.bgca.org/-/media/Images/partners/BGCA_Partner_logo_325x215.ashx"} title={"Boys And Girls Club of America"} pgsrc={'https://www.bgca.org/'} /></div>
            <div className="Card"><Card imgSrc={"https://www.iwmc.org/wp-content/uploads/2021/05/44450209.jpeg"} title={"The Nature Conservancy"}  pgsrc={'https://www.nature.org/en-us/'} /></div>
            <div className="Card"><Card imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr46fClxFjzEHPVaHogmGWMAbrfGZKls1pw&usqp=CAU"} title={"Samaritan's Purse"} pgsrc={'https://www.samaritanspurse.org/'} /></div>
        </div>
    )
}

export default Container;