import './work.scss';
import cayvayImage from '../../../assets/images/cayvay.png';
import baImage from '../../../assets/images/bridgeafrica.png';
import apsImage from '../../../assets/images/aps.png';
import type { RecentWorkType } from '../../../types/sectionTypes';
import SingleWork from './SingleWork';
import React from 'react';

export default function Work() {
  const recentWork: RecentWorkType[] = [
    {
      id: 0,
      title: 'Cay-vay',
      description: 'Cay-Vay is a web application that helps you to create a resume in just few minutes that will open doors to employment. Simply choose the template that suits you, fill in your information, customize the chosen template, and finally download your resume in PDF format.',
      image: cayvayImage,
      website: 'https://cay-vay.com',
      isReversed: false
    },
    {
      id: 1,
      title: 'A P S',
      description: 'Assistance Proxi Santé is a web application in progress primarily designed to digitalize the appointment-booking process between patients and healthcare professionals such as doctors (general and specialists), laboratories and pharmacies.',
      image: apsImage,
      website: 'https://ap-sante.com',
      isReversed: true
    },
    {
      id: 2,
      title: 'Bridge Africa',
      description: 'Bridge Africa is a web platform aimed at digitalizing businesses and consumers. It helps small and medium enterprises create websites on the platform to gain visibility and sell online. Additionally, it operates offline via SMS for users in areas with low network penetration',
      image: baImage,
      website: 'https://bridgeAfrica.com',
      isReversed: false
    }
  ]
  return (
    <section className="work-container" id='work'>
      <div className="work-title">
        Recent Works
      </div>
      {recentWork.map((work, index) => (
        <React.Fragment key={index}>
          <SingleWork work={work} />
        </React.Fragment>
      ))
      }
    </section>
  )
}