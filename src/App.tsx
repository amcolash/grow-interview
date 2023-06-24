import React from 'react';
import { style } from 'typestyle';

const page = style({
  display: 'flex',
  maxWidth: '800px',
  width: 'calc(100% - 40px)',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
});

export default () => (
  <div className={page}>
    {/* <Navigation /> */}

    <h1>Top Wikipedia Articles</h1>

    {/* <ActionBar />

    <div>
      <Card>1</Card>
      <Card>2</Card>
    </div>

    <BottomPagination /> */}
  </div>
);
