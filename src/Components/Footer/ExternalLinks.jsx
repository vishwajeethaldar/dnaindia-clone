
import {Box} from '@chakra-ui/react';
export const ExternalLinks = ({path, text}) => {
return (
   <Box  as="div" color='light'>
     <a  href={path} target="_blank" > {text} </a>
   </Box>
  )
}
