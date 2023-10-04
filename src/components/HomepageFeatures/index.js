import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'PROJECTS',
    Svg: require('@site/static/img/project.svg').default,
    description: (
      <>
        Check my projects.
      </>
    ),
  },
  {
    title: 'BLOGS',
    Svg: require('@site/static/img/blogs.svg').default,
    description: (
      <>
       Read my blogs.
      </>
    ),
  },
  {
    title: 'LINKS',
    Svg: require('@site/static/img/links.svg').default,
    description: (
      <>
       Check other links
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
        <h3>{title}</h3>
        <p>{description}</p>
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
