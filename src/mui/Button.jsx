import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function Buttons() {

    // 버튼 만들기
  return (
    <Stack spacing={1} direction="row"> {/* spacing은 요소 사이의 간격을 의미, direction은 요소의 배치 방향 */}
        <Button variant="text">Text</Button> {/* 기본 파란색 버튼 */}
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button color="secondary">Secondary</Button> {/* 보라색 버튼 */}
        <br />
        <Button variant="contained" color="success"> {/* 초록색 버튼 */}
            Success
        </Button>
        <Button variant="outlined" color="error"> {/* 빨간색 버튼 */}
            Error
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
    </Stack>
    
  );
}