import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open source projects',
    Svg: require('@site/static/img/git.svg').default,
    description: (
      <>
        Bit Sync projects are open source and open to issues and pull requests.
      </>
    ),
  },
  {
    title: 'Cloud made easy',
    Svg: require('@site/static/img/Cloud-Sync.svg').default,
    description: (
      <>
        Cloud Sync is a platform that you can easily make virtual machines with just a email.
      </>
    ),
  },
  {
    title: 'Hosting is a piece of cake',
    Svg: require('@site/static/img/Cloud-Sync.svg').default,
    description: (
      <>
        Web Sync is easy to use, just send us a email. And your site will be online!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">Bit Sync</Heading>
        <p>Bit Sync is a software development company that also has cloud services.</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
