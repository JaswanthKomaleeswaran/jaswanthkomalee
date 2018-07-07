import React from 'react';
import { CardDeck } from 'reactstrap';
import InfoCard from './InfoCard';
import SectionTitle from '../../SectionTitle';

const intellect = require('../../../Assets/intellect.png');
const stealth = require('../../../Assets/stealth.png');
const rich = require('../../../Assets/rich.png');

const Skills = () => (
  <CardDeck className="pb-5">
    <SectionTitle title="Skills" />
    <InfoCard title="Android" image={intellect} />
    <InfoCard title="Web Development" image={stealth} />
    <InfoCard title="IOT" image={rich} />
  </CardDeck>
);

export default Skills;
