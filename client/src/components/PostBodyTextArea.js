import {TextField,Paper,TextareaAutosize} from "@mui/material";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import PropTypes from 'prop-types';
import { ThemeProvider, styled } from '@mui/material/styles';


const TextArea = styled(TextareaAutosize)(({theme}) =>({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,    
    display: 'block',
    width:'100%',
    boxSizing: 'border-box',
    padding: '10px',
    minHeight: '200px',
    marginBottom: '20px',
    fontFamily: 'inherit',
    color: 'white',
}))

const PreviewArea = styled(Paper)(({theme})=>({
    padding: '10px 20px',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '5px',
    marginBottom: '20px',
    color:'white',
}))


function PostBodyTextArea(props) {
  return (
        <>
          <TextArea
            minRows={1}
            onChange={e => props.handlePostBodyChange(e.target.value)} value={props.value}/>
          {!!props.value && props.value.length > 0 && (
            <PreviewArea>
              <ReactMarkdown plugins={[gfm]} children={props.value} />
            </PreviewArea>
          )}
        </>
      );
}

PostBodyTextArea.propTypes = {
    value: PropTypes.string.isRequired,
    handlePostBodyChange: PropTypes.any,
};

export default PostBodyTextArea

