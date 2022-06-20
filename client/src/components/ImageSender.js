import Software from "../static/software_icon.png";
import DevOps from "../static/devops_icon.png";
import Data from "../static/data_icon.png";
import Support from "../static/support_icon.png";
import Leader from "../static/leader_icon.png";
import {Typography} from '@mui/material';

function ImageSender(props) {
  return (
    (props.index === 0) ? (
        <Typography variant="h5" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            <img style={{height:'50px', width: 'auto'}} src={Software}/><br/>
            Software Engineers<br/><br/>
            <Typography variant="subtitle1" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            Help engineers be more efficient and streamline knowledge sharing using a tool they already love and trust.
            </Typography>
        </Typography>
        
    ) : (props.index === 1) ? (
        <Typography variant="h5" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            <img style={{height:'50px', width: 'auto'}} src={DevOps}/><br/>
            DevOps Engineers<br/><br/>
            <Typography variant="subtitle1" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads.
            </Typography>
        </Typography>
    ) : (props.index === 2) ? (
        <Typography variant="h5" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            <img style={{height:'50px', width: 'auto'}} src={Data}/><br/>
            Data Scientists<br/><br/>
            <Typography variant="subtitle1" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            Business decisions are better when backed by data. Give visibility to the data that support your strategies.
            </Typography>
        </Typography>
    ) : (props.index === 3) ? (
        <Typography variant="h5" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            <img style={{height:'50px', width: 'auto'}} src={Support}/><br/>
            Support Teams<br/><br/>
            <Typography variant="subtitle1" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            Level up your support by providing information to your customers using a natural interface: questions and answers.
            </Typography>
        </Typography>
    ) : (props.index === 4) ? (
        <Typography variant="h5" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            <img style={{height:'50px', width: 'auto'}} src={Leader}/><br/>
            Engineering Leads<br/><br/>
            <Typography variant="subtitle1" color="inherit" component='div' align="center" sx={{width:'inherit'}}>
            Help your team get the information they need to do their job - reduce burnout and help engineers grow and learn together.
            </Typography>
        </Typography>
    ) : null
  )
}

export default ImageSender