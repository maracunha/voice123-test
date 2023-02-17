import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Pagination, Grid, Stack, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import useTalentsList from '../../hooks/useTalentsList';
import Card from '../Card';
import SkeletonCards from '../SkeletonCards';

const SearchItems = () => {
  const [pages, setPages] = useState(0);
  const [requestParams, setRequestParams] = useState({
    keywords: '',
    page: 1,
  });

  const [searchParams] = useSearchParams();
  const keywords = searchParams.get('keywords') ?? '';
  const pagesStorage = localStorage.getItem('pages')

  useEffect(() => {
    if (pagesStorage) {
      const pgs = +JSON.parse(localStorage.getItem('pages') ?? '');
      setPages(pgs);
    }
  }, [pagesStorage]);

  useEffect(() => {
    setRequestParams((prev) => ({ ...prev, keywords }));
  }, [keywords]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setRequestParams((prev) => ({ ...prev, page: value }));
  };

  const [talents, status] = useTalentsList(requestParams);

  if (status === 'loading') {
    return <SkeletonCards />;
  }

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid container spacing={1}>
        {talents.map((talent) => (
          <Card key={talent.id} talent={talent} />
        ))}
      </Grid>

      {pages && (
        <Stack spacing={2}>
          <Pagination
            size="large"
            count={pages}
            page={requestParams.page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default SearchItems;
