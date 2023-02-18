import SanityClientConstructor from '@sanity/client';



export const client = new SanityClientConstructor(
        {
        projectId: 'zd3mojmw',
        dataset: 'production',
        apiVersion: '2021-08-31',
        useCdn : true,
        ignoreBrowserTokenWarning: true,
        token: 'skMtgqvzJMV9ndNaiMFkVsiUM83pFclHGMIc7W10zjMNdjGqET2hxHBbMvcofXh4FjOFJIR79rqFaDjlEqgs0w2AHqx2PbaRAnY5jLP34N4Vv7DpKb1ys4hrfwXpH6gk0fbTqZ9etArOnC8fxg5WrPTKYKZrpYpSYBmOvXQf5sgnXLYYbqB9'
      }
);



