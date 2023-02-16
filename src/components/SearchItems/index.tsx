import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Pagination, Grid, Stack, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import useTalentsList from '../../hooks/useTalentsList';
import Card from '../Card';

const SearhItems = () => {
  const [requestParams, setRequestParams] = useState({
    keywords: '',
    page: 1,
  });
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get('keywords') ?? '';

  useEffect(() => {
      setRequestParams((prev) => ({ ...prev, keywords }));
  }, [keywords]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setRequestParams((prev) => ({ ...prev, page: value }));
  };

  const results = useTalentsList(requestParams);
  const [talents] = results;

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid container spacing={1}>
        {talents.map((talent) => (
          <Card key={talent.id} talent={talent} />
        ))}
      </Grid>

      <Stack spacing={2}>
        <Pagination
          count={3}
          page={requestParams.page}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
        />
      </Stack>
    </Stack>
  );
};

export default SearhItems;
