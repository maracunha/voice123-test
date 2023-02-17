import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/system';

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" width={'100%'} height={150} />
        <Skeleton variant="rectangular" width={'100%'} height={150} />
      </Stack>
      <Stack spacing={1} direction="row">
        <Skeleton variant="rectangular" width={'100%'} height={150} />
        <Skeleton variant="rectangular" width={'100%'} height={150} />
      </Stack>
    </Stack>
  );
}
