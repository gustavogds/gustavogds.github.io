import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({language, handleClick}) {
    const transition = 'all 250ms ease-in-out'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            language ?
               <span onClick={handleClick} aria-label="Portuguese" role="img">🇧🇷</span>
               :
               <span onClick={handleClick} aria-label="English" role="img">🇬🇧</span>
         }
      </Box>
   )
}