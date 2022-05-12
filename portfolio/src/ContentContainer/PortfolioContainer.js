import React from 'react'
import {TOTAL_SCREENS} from '../utilities/utils';

export default function PortfolioContainer() {

    return (
    <div>
        {TOTAL_SCREENS.map(item => { 

            if(item.component)
            {
                return <item.component ScreenName={item.screen_name} key={item.screen_name} id={item.screen_name}/>
            }
            else
            {
                return <div></div>
            }
            
             }) }
        
        
    </div>
  )
}
