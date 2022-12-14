import React, { useContext, useEffect } from 'react'
import Header from '../Components/Header/Header';
import { TopnewsSlider } from '../Components/Topnews/TopnewsSlider';
import { AppContext } from '../Context/AppContext';
import { ACTIONTYPES } from '../Context/actiontypes';
import { Footer } from '../Components/Footer/Footer';
import {Skeleton,Stack,Grid, GridItem, Box} from '@chakra-ui/react'
import { LeftNavbar } from '../Components/LeftNavbar/LeftNavbar';
import { Videos } from '../Components/LeftNavbar/Videos/Videos';
import { VideoItemCard } from '../Components/LeftNavbar/Videos/VideoItemCard';
import { LeftNav } from '../Components/LeftNavbar/LeftNav';
import { SearchBtn } from '../Components/Header/SearchBtn';
import { RightSection } from '../Components/RightSection/RightSection';

export const VideosSinglePage = () => {
    const {state, dispatch} = useContext(AppContext);

    useEffect(()=>{
      dispatch({type:ACTIONTYPES.LOADING, payLoad:false})
    }, []);
  
    return (
      <Stack w="100%"  bg='#eedeee'>
       
        <Skeleton isLoaded={!state.isLoading}>
        <Header>
            <SearchBtn/>
            </Header>
        </Skeleton>
        
        <Skeleton isLoaded={!state.isLoading}>
        <TopnewsSlider />
        </Skeleton>
  
      <Box w={'100%'} >
          <Grid  w={['98%', '90%', '90%']} mx='auto' templateColumns={['100%','100%','23% 50% 27%']}>
              <GridItem >
              <Skeleton isLoaded={!state.isLoading}>
                  <Box display={['block', 'block', 'none']}>
                    <LeftNav/>
                  </Box>
                  <Box display={['none', 'none', 'block']}>
                    <LeftNavbar />
                  </Box>
              </Skeleton>
              </GridItem>
  
              <GridItem>                  
                 <VideoItemCard/>
              </GridItem>
              <GridItem>
              <RightSection />
              </GridItem>
          </Grid>
        </Box>
  
        <Box marginLeft={'50px'} w={['98%', '90%', '90%']}>
          
          {/* <Grid minH="500px"  border='1px solid red'>
              
          </Grid> */}
        </Box>
        
  
        <Footer />
      </Stack>
    )
}
