import { Box, Stack} from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { getNews } from '../../../api/api'
import { ACTIONTYPES } from '../../../Context/actiontypes'
import { AppContext } from '../../../Context/AppContext'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { BreadcrumbLeftNav } from '../../Utils/BreadcrumbLeftNav'
import {NewsItemCard} from '../../Utils/NewsItemCard'

export const Sports = () => {
    const {state, dispatch} = useContext(AppContext);
 
    useEffect(()=>{
      dispatch({type:ACTIONTYPES.GET_DATA_REQUESTED})
      getNews('/sports').then((res)=>{
        dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:res.data});
      }).catch((err)=>{
        console.log(err);
      })
      return ()=>dispatch({type:ACTIONTYPES.GET_DATA_SUCCESS, payLoad:[]});
    },[]);

    
if(state.isLoading || state.isDataLoading){
  return (
      <Box padding='6' boxShadow='lg' bg='white' h="100%">
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
      </Box>
  )
}
    return (
      <Stack>
          <Box>
              <BreadcrumbLeftNav current='/sports' curLinkName="Sports"/>
          </Box>

          <Box>
            <Box as="h2" borderBottom={'1px solid #ccc'} fontSize={['1.5em','1.2em','1.6em']}>
                SPORTS
            </Box>
          </Box>
          <Box>
            
              {state.data && state.data.map((news)=>{
                    return (
                      <Box py="15px" px="5px" bg={`light`} mb="10px" borderRadius={`3px` } key={news.id}>
                        <NewsItemCard flexDir="row" imgWidth="25%" gap="10px" id={news.id} imgLink={news.image} newsTitle={news.title} path='sports' textFont={['1em','1.1em','1.2em']}/>
                      </Box>
                    )
              })}
             
          </Box>
      </Stack>)

}
