import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';


export default function Hello() {
    const [age, setAge] = React.useState('');
    const [pray, setPray] = React.useState('');
    const [worship, setWorship] = React.useState('');
    const [stnd, setAtnd] = React.useState('');
    const [value, setValue] = React.useState(new Date());

    return (
        <div>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>이름</InputLabel>
                <Select
                id="iptName"
                value={age}
                label="이름"
                onChange={e=>setAge(e.target.value)}
                >
                <MenuItem value="">
                    <em>선택</em>
                </MenuItem>
                <MenuItem value={10}>권방울</MenuItem>
                <MenuItem value={20}>최수연</MenuItem>
                <MenuItem value={30}>김하영</MenuItem>
                </Select>
            </FormControl>

            <br/>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={2}>
                    <MobileDatePicker
                    label="심방 날짜"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>

            <br/>

            <TextField
            id="iptSimbang"
            label="심방 내용"
            multiline
            rows={4}
            defaultValue=""
            />

            <br/>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>기도</InputLabel>
                <Select
                id="iptPray"
                value={pray}
                label="기도"
                onChange={e => setPray(e.target.value)}
                >
                <MenuItem value="">
                    <em>선택</em>
                </MenuItem>
                <MenuItem value={10}>Y</MenuItem>
                <MenuItem value={20}>N</MenuItem>
                </Select>
            </FormControl>

            <br/>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>예배 방식</InputLabel>
                <Select
                id="iptWorship"
                value={worship}
                label="예배 방식"
                onChange={e => setWorship(e.target.value)}
                >
                <MenuItem value="">
                    <em>선택</em>
                </MenuItem>
                <MenuItem value={10}>현장</MenuItem>
                <MenuItem value={20}>온라인</MenuItem>
                </Select>
            </FormControl>




        </div>
    );
}