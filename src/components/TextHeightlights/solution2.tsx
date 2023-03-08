import { ReactElement, useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

interface Props {
  texts: string;
  keywords: string;
  id: number;
}

interface IHighlight {
  priority: number;
  size: number;
  type: string;
}

const Hightlihgts = ({ texts, keywords, id }: Props): ReactElement | null => {
  const [ranges, setRanges] = useState<Range[]>([]);
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Experimental features are not included in the built-in DOM
    // @ts-ignore
    if (!window.CSS.highlights) {
      return console.log('not supported');
    }

    if (!nodeRef.current) {
      return;
    }

    const textNode = nodeRef.current.childNodes[0];

    if (!textNode.textContent) {
      return;
    }

    const idx = [];
    let startAt = 0;
    while (startAt < textNode.textContent.length) {
      const index = textNode.textContent.indexOf(keywords, startAt);
      if (index === -1) break;
      idx.push(index);
      startAt = index + keywords.length;
    }

    const ranges = idx.map((index: number) => {
      const range = new Range();
      range.setStart(textNode, index);
      range.setEnd(textNode, index + keywords.length);
      return range;
    });

    setRanges(ranges);
  }, [nodeRef, keywords]);

  // @ts-ignore
  const colorHighlight = new Highlight<IHighlight>(...ranges.flat()); // eslint-disable-line

  // Register this highlight under a custom name.
  // @ts-ignore
  // eslint-disable-next-line
  CSS.highlights.set(`search-text-${id}`, colorHighlight);

  return (
    <Box
      component="span"
      sx={{
        [`::highlight(search-text-${id})`]: {
          backgroundColor: '#f06',
          color: 'white',
        },
      }}
      ref={nodeRef}
    >
      {texts}
    </Box>
  );
};

export default Hightlihgts;
