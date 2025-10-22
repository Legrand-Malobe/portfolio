import './work.scss';
import cayvayImage from '../../assets/images/cayvay.png';
import baImage from '../../assets/images/bridgeafrica.png';
import type { RecentWorkType } from '../../types/sectionTypes';
import SingleWork from './SingleWork';

export default function Work() {
  const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perferendis in nulla sint iure quae aperiam facere, porro voluptate natus tenetur officia nemo culpa id minus aut voluptatum. Sit, delectus!'
  const recentWork: RecentWorkType[] = [
    {
      id: 0,
      title: 'Cay-vay',
      description: lorem,
      image: cayvayImage,
      website: 'https://cay-vay.com',
      isReversed: false
    },
    {
      id: 1,
      title: 'Bridge Africa',
      description: lorem,
      image: baImage,
      website: 'https://bridgeAfrica.com',
      isReversed: true
    }
  ]
  return (
    <section className="work-container">
      <div className="work-title">
        Recent Works
      </div>
      {recentWork.map((work, index) => (
        <SingleWork work={work} index={index} />
      ))
      }
    </section>
  )
}