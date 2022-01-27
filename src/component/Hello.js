import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import koLocale from 'date-fns/locale/ko';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import styles from '../css/Hello.module.css';

export default function Hello() {
    const [teacher, setTeacher] = useState('');
    const [student, setStudent] = useState('');
    const [pray, setPray] = useState('');
    const [worship, setWorship] = useState('');
    const [atnd, setAtnd] = useState('');
    const [value, setValue] = useState(new Date());


    const [stdList, setStdList] = useState([{}]);

    // 데이터 가져오기
    let db = {
        "권방울" : [
            {
                "id" : "01", 
                "name" : "조아름"
            },
            {
                "id" : "02", 
                "name" : "천준서"
            }
        ]
    }

    let data = db["권방울"];

    useEffect(() => {


    },[])


    
    

    let teacherOnChange = function (e, p) {
        const tchVal = e.target.value;
        const tchNm = p.props.children

        console.log(tchVal);
        
        setTeacher(tchVal);
        data = db[tchNm];

        const options = data.map(d => ({
            "value" : d.id,
            "label" : d.name
        }))

        setStdList(options);

    }    
    
    
    return (
        <div className={styles.box}>
            <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel>교사</InputLabel>
                <Select
                id="iptTeacher"
                value={teacher}
                label="교사"
                onChange={(e, p)=>teacherOnChange(e, p)}
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

            <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel>이름</InputLabel>
                <Select
                id="iptStudent"
                value={student}
                label="이름"
                onChange={e=>setStudent(e.target.value)}
                >
                {
                    stdList.map((data, idx) => {
                        return <MenuItem key={idx} value={data.value}>{data.label}</MenuItem>
                    })
                }
                </Select>
            </FormControl>

            <br/>

            <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
                <Stack width="100%">
                    <MobileDatePicker
                    mask={'__$__$____'}
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
            fullWidth 
            />

            <br/>

            <FormControl sx={{ m: 1, width: '100%' }}>
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

            <FormControl sx={{ m: 1, width: '100%' }}>
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

            <br/>

            <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel>출석</InputLabel>
                <Select
                id="iptAtnd"
                value={atnd}
                label="출석"
                onChange={e => setAtnd(e.target.value)}
                >
                <MenuItem value="">
                    <em>선택</em>
                </MenuItem>
                <MenuItem value={10}>출석(현장)</MenuItem>
                <MenuItem value={20}>출석(온라인)</MenuItem>
                <MenuItem value={30}>결석</MenuItem>
                </Select>
            </FormControl>

            <br/>

            <TextField
            id="iptRsn"
            label="결석 사유"
            multiline
            rows={4}
            defaultValue=""
            fullWidth
            />


        </div>
    );
}