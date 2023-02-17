import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Card from './index';

const talent = {
  user: {
    name: 'jose',
    username: 'jose@man',
    picture_small: 'http://foo.bar',
  },
  relevant_sample: {
    name: 'aoeu aoa',
    sample: 'sample',
  },
};

test('displays a default thumbnail', async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const card = render(<Card talent={talent} />);

  const talentThumbnail = (await card.findByTestId('linkProfile')) as HTMLAnchorElement;
  expect(talentThumbnail.href).toContain('https://voice123.com/jose@man');
  card.unmount();
});
