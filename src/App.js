// @ts-nocheck
import React, { lazy, Suspense } from 'react';
import { map } from 'lodash';
import data from './data';
import { useToggle } from './hooks';
import './App.css';

const Items = lazy(() => import('./Items'));

function Section({ title, items }) {
  const [open, toggle] = useToggle(false);

  return (
    <section>
      <button onClick={toggle}>{title}</button>
      { open &&
        <Suspense fallback={<div>Loading...</div>}>
          <Items items={items} />
        </Suspense>
      }
    </section>
  );
}

export default () => map(data, (value, key) => <Section key={key} title={key} items={value} />);
