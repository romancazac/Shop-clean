import React from 'react'

const Tabs = () => {
   const tabs = [
      {
         id: 1,
         name: "Описание",
         title: 'Описание товара',
         text: "Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her cable Sail ho clipper bounty careen galleon bilge rat reef handsomely.",
         video: {
            cover: "https://romancazac.github.io/eclean/img/products/video.webp",
            link: '"https://www.youtube.com/watch?v=p9rgHcO26hg'
         }
      },
      {
         id: 2,
         name: "Информация",
         title: 'Информация',
         text: "Barbary Coast hogshead port Sea Legs cackle fruit dead men tell no tales crimp poop deck transom flogging. Bilge water man-of-war lanyard sloop starboard hardtack no prey, no pay avast tender crack Jennys tea cup. Hogshead cog aft Corsair spanker pinnace bilge water swing the lead Jack Tar Plate Fleet."
      },
      {
         id: 3,
         name: "Доставка и оплата",
         title: 'Доставка и оплата',
         text: "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye."
      }
   ];
   const [activeTab, setActiveTab] = React.useState(1)
   const onNavClick = (id) => {

      setActiveTab(id)

   }

   return (
      <div className="product-tabs" >
         <nav className="product-tabs__nav" >
            {
               tabs.map((item) =>
                  <button key={item.name} className={activeTab === item.id ? 'product-tabs__btn _tab-active' : 'product-tabs__btn'}
                     onClick={() => onNavClick(item.id)}
                  >{item.name}</button>
               )
            }
         </nav>
         <div className="product-tabs__body">
            {
               tabs.map((item) =>
                  <div key={item.id} className={activeTab === item.id ? 'product-tabs__row active' :'product-tabs__row'} >
                     {
                        item.video ?
                           <>
                              <div className="product-tabs__column">
                                 <h4 className="product-tabs__title">{item.title}</h4>
                                 <p>
                                    {item.text}
                                 </p>
                              </div>
                              <div className="product-tabs__column video-box">
                                 <a className="video-box__video-ibg" data-src={item.video.link}
                                    data-poster="../img/products/video.png">
                                    <img src={item.video.cover} />

                                 </a>
                              </div>
                           </>
                           : 
                           <>
                              <h4 className="product-tabs__title">{item.title}</h4>
                              <p>
                                 {item.text}
                              </p>
                           </>
                     }

                  </div>
               )
            }
            
         </div>
      </div>
   )
}

export default Tabs