import React from 'react'
import FacilitiesStyle from '../../style/Facilities.styles';
import ServicesItems from '../ServicesItems'
import businessCenter from '../../assets/images/business-centre.PNG'
import healthClub from '../../assets/images/healthClub.jpg'
import clubLounge from '../../assets/images/clubLounge.jpg'
import navvySalon from '../../assets/images/navvySalon.PNG'
import Title from '../Title'
import Footer from '../Footer';


export default function Facilities() {
    return (
        <FacilitiesStyle>
            <Title title='Facilities and Services' />
            <div className='services'>
            <div>
            <ServicesItems
            title='Business Centre'
            image = {businessCenter}
            subTitle='Our Services'
            servicesList = {['Rental of conference and meeting rooms which can accommodate 10 to 12 people',
                            'Private cubicles for email and Internet browsing',
                            'Local call facilities',
                            'Business magazines',
                            'Trade directories',
                        
        
                          
                        ]}
                                
                             
            
            />
             <ServicesItems
            title='Health Club'
            image = {healthClub}
            subTitle='Our Services'
            servicesList = {['Fully-equipped gymnasium',
                            'Steam bath',
                            'Separate indoor Jacuzzi for men and women',
                            'Outdoor Jacuzzi',
                            'Outdoor Jacuzzi',
                            'Body massage',
                            
                        ]}
                                
                             
            
            />
            </div>
            <div>
             <ServicesItems
            title='Club Lounge'
            image = {clubLounge}
            subTitle='Our Services'
            servicesList = {['All-day refreshments, including coffee, tea and soft drinks',
                            'Daily breakfast ',
                            'Evening drinks and canapes',
                            'Business facilities',
                            'Photocopying',
                            'Outdoor terrace',
                            'Complimentary Wi-Fi',
                            
                        ]}
                                
                             
            
            />
            <ServicesItems
            title='Navvy Salon'
            image = {navvySalon}
            subTitle='Our Services'
            servicesList = {['Haircut',
                            'Haircut with shampooing',
                            'Facial',
                            'Hair dye',
                            'Hair perm',
                            'Head massage with oils',
                            'Waxing',
                            
                        ]}
                                
                             
            
            />
          </div>
            </div>
              <Footer />          
        </FacilitiesStyle>
    )
}
