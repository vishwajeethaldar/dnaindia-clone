import { Box, Stack} from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { getNews } from '../../../api/api'
import { ACTIONTYPES } from '../../../Context/actiontypes'
import { AppContext } from '../../../Context/AppContext'
import { BreadcrumbLeftNav } from '../../Utils/BreadcrumbLeftNav'
import {NewsItemCard} from '../../Utils/NewsItemCard'

export const Education = () => {
  const {state, dispatch} = useContext(AppContext);
  
  useEffect(()=>{
    getNews('/education').then((res)=>{
      console.log(res.data);
      dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:res.data});
    }).catch((err)=>{
      console.log(err);
    })
    return ()=>dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:[]});
  },[]);

    return (
      <Stack>
          <Box>
              <BreadcrumbLeftNav current='/education' curLinkName="Education"/>
          </Box>
          <Box>
            <Box as="h2" borderBottom={'1px solid #ccc'} fontSize={['1.5em','1.2em','1.6em']}>
                EDUCATION
            </Box>
          </Box>
          <Box>
            
              {state.data && state.data.map((news)=>{
                    return (
                      <Box py="15px" px="5px" bg={`light`} mb="10px" borderRadius={`3px` } key={news.id}>
                       <NewsItemCard  imgWidth="25%" gap="10px" id={news.id} imgLink={news.image} newsTitle={news.title} path='business' textFont={['1em','1.1em','1.2em']}/>
                      </Box>
                    )
              })}
             
          </Box>
      </Stack>)

}