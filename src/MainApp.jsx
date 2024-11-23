import React, { useEffect, useState } from 'react';
// import { Switch } from 'react-router-dom';
import endpoints from './constants/endpoints';

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="MainApp">
      {/* <NavBarWithRouter /> */}
      <main className="main">
        {/* <Switch> */}
          {/* <Suspense fallback={<FallbackSpinner />}> */}
            {/* <Route exact path="/" component={Home} /> */}
            {/* {data
              && data.sections.map((route) => {
                const SectionComponent = React.lazy(() => import('./components/' + route.component));
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    component={() => (
                      <SectionComponent header={route.headerTitle} />
                    )}
                  />
                );
              })} */}
              Hello
          {/* </Suspense> */}
        {/* </Switch> */}
      </main>
    </div>
  );
}

export default MainApp;
