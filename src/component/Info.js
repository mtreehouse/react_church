import React from 'react'
import Button from '@mui/material/Button';
import { GoogleSpreadsheet } from 'google-spreadsheet'

export default function Info() {
    const doc = new GoogleSpreadsheet('1r8mvSOMi8tZe8D6-6SocafJ9_LeURIPVphH71a7aONE');
    doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
    });
    const sheet = function(){
        console.log(process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL);
    }

    return (
        <div>
            <Button 
            onClick={sheet}
            >
            test
            </Button>
        </div>
    );
}