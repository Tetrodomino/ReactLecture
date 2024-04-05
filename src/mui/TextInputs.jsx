import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
];

export default function TextInputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {/* 
            variant = 디자인 속성
            label = 텍스트 박스의 제목 같은 것
            required = 필수 항목으로 지정
            defaultValue = 초기에 미리 입력된 값
            rows = 가로줄의 개수
            helperText = 입력창 아래에 적히는 짤막한 설명문
            
        */}
        <TextField required id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField disabled id="filled-basic" label="Filled" variant="filled" />
        <TextField aria-readonly id="standard-basic" label="Standard" variant="standard" />
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        /> {/* 바깥선을 빨간색으로 하기 */}
        <TextField 
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        /> {/* 줄을 여러 줄로 하기 */}

        {/* 여러 개의 선택 항목 지정(option이랑 비슷한 방식) */}
        <TextField
          id="outlined-select-currency"
          select
          label="통화선택"
          defaultValue="EUR"
          helperText="통화선택"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Box>
  );
}